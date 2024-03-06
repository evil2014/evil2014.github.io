package classes.media.timeline 
{	
	import fl.core.UIComponent;
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.events.IOErrorEvent;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.text.TextField;
	import fl.containers.ScrollPane;
	import fl.controls.ScrollPolicy;
	
	import flash.display.GradientType;
	import flash.geom.Matrix;
	import flash.text.TextFieldAutoSize;
	
	
	/**
	 * ...
	 * @author Ravi Kumar D
	 */
	public class Timeline extends UIComponent 
	{
		private var layoutXML:XML;
		private var mediaXML:XML;
		private var xmlPathPrefix:String;
		
		public var up_panel:MovieClip;
		public var down_panel:MovieClip;
		public var titleTxt:TextField;
		public var slideTitleTxt:TextField;
		public var arrow_mc:MovieClip;
		
		private var direction:String = "UP";
		private var interval:Number;
		private var sliderYValue:Number;
		private var tweenYValue:Number;
		private var heightRatio:Number;
		private var xmlLoader:URLLoader;
				
		private var timeLineSlider:TimelineSlider;
		private var eventSlideBG:Sprite;
		public var eventSlideMask:Sprite;
		private var scrollBarComp:ScrollPane;
		
		private var textObject:Object = {};
		
		public function Timeline() 
		{
			//Event slide BG
			drawEventSlideBG();
			
			//Event slide Mask
			drawEventSlideMask()
			
			this.addEventListener(Event.RENDER, addedToStageHandler, false, 0, true);			
		}	
		
		private function addedToStageHandler(ev:Event):void
		{		
			
			if (this.parent)
			{
				var _mc:MovieClip;
				for (var i:int = 0; i < this.parent.numChildren; i++)
				{
					_mc = this.parent.getChildAt(i) as MovieClip;
					
					if (_mc && (_mc.name.split("_")[0] == "event"))
					{
						_mc.visible = false;
					}
				}
			}
			
			ev.target.removeEventListener(Event.RENDER, addedToStageHandler);
			
			var swfPath:String = stage.loaderInfo.url;
			xmlPathPrefix =  String(swfPath.slice(0, swfPath.length - 4));	
						
			xmlLoader = new URLLoader();
			xmlLoader.addEventListener(Event.COMPLETE, xmlLoaderCompleted, false, 0, true);
			xmlLoader.addEventListener(IOErrorEvent.IO_ERROR, errorHandler, false, 0, true);
			xmlLoader.load(new URLRequest(String(xmlPathPrefix + "_layout.xml")));
			
			this.addEventListener(Event.REMOVED_FROM_STAGE, removedFromStageHandler, false, 0, true);
			
			
		}
		
		private function errorHandler(ev:Event):void
		{
			ev.target.removeEventListener(IOErrorEvent.IO_ERROR, errorHandler);
			ev.target.removeEventListener(Event.COMPLETE, xmlLoaderCompleted);
		}
		
		private function xmlLoaderCompleted(ev:Event):void
		{	
			trace("Layout xml Loaded successfully");
			
			layoutXML = new XML(ev.target.data);
			ev.target.removeEventListener(Event.COMPLETE, xmlLoaderCompleted);			
			xmlLoader = null;
		
			this.initiate();			
		}
				
		public function initiate():void
		{			
			
				
			slideTitleTxt.autoSize = TextFieldAutoSize.LEFT;
		
			timeLineSlider = new TimelineSlider(this.layoutXML.timeline,this.parent);
			timeLineSlider.x = 405;
			timeLineSlider.y = 13;
			this.addChild(timeLineSlider);
			
			var _sprite:Sprite = new Sprite();
			_sprite.graphics.beginFill(0xFFFFFF);
			_sprite.graphics.drawRect(0, 0, 68, 337);
			_sprite.graphics.endFill();			
			this.addChild(_sprite);
			
			_sprite.x = 396;
			_sprite.y = 15;
			
			timeLineSlider.mask = _sprite;
					
			//up_panel.visible = true;
			//down_panel.visible = true;
			heightRatio = (timeLineSlider.height - 100 - 330);
			tweenYValue = timeLineSlider.y;
			
			up_panel.gotoAndStop(2);
			up_panel.buttonMode = true;
			down_panel.buttonMode = true;
			up_panel.addEventListener(MouseEvent.CLICK, mouseEventHandler, false, 0, true);
			down_panel.addEventListener(MouseEvent.CLICK, mouseEventHandler, false, 0, true);
						
			//Bring Arrow Point to front of all clips
			this.setChildIndex(arrow_mc, this.numChildren - 1);
			
		}
		
		private function mouseEventHandler(ev:MouseEvent):void
		{
			
			var _type:String = (ev.currentTarget == up_panel) ? "UP" : "DOWN";
			timeLineSlider.timelineEventChangeFromUpDown(_type);			
			
		}
		
		public function changeNavigationStatus(_type:String,_status:Boolean):void
		{
			
			if (_type == "UP")
			{
				if (_status)
				{
					up_panel.gotoAndStop(1);
				}
				else
				{
					up_panel.gotoAndStop(2);
				}
			}
			else
			{
				if (_status)
				{
					down_panel.gotoAndStop(1);
				}
				else
				{
					down_panel.gotoAndStop(2);
				}
			}
		}
		
		public function updatedEventSlide(_id:int,_mc:MovieClip):void
		{
			slideTitleTxt.htmlText = "";
			var _txt:String = "";
			var compId:String = String(this.layoutXML.timeline.event[_id].titletext.@src);
			
			_txt = textObject[compId];
			
			if(_txt) slideTitleTxt.htmlText = _txt;
			
			eventSlideBG.y = 40 + slideTitleTxt.height;				
			eventSlideBG.height = 310 - slideTitleTxt.height;
			eventSlideMask.y = 40 + slideTitleTxt.height;
			eventSlideMask.height = 310 - slideTitleTxt.height;			
			_mc.y = eventSlideBG.y + this.x - 10;
			updateScrollBarComp(_mc);
		}
		
		public function setText(id:String, value:String):Boolean
		{
			textObject[id] = value;
			
			for (var i:uint = 0; i < numChildren; i++)
			{
				var child:Object = getChildAt(i);
				if (child.hasOwnProperty("setText"))
				{
					if (child.setText(id, value))
						return true;
				}
			}
			return false;
		}
		
		private function updateScrollBarComp(_mc:MovieClip):void
		{
			if (scrollBarComp)
			{
				scrollBarComp.source = null;
				this.removeChild(scrollBarComp);
				scrollBarComp = null;
			}			
			if (_mc.height > eventSlideMask.height)
			{
				//Scroll Bar
				scrollBarComp = new ScrollPane();
				scrollBarComp.x = 5;
				this.addChild(scrollBarComp);
				scrollBarComp.y = eventSlideMask.y;
				scrollBarComp.source = _mc;
				scrollBarComp.setSize(386, eventSlideMask.height);	
				scrollBarComp.update();
			}
			
		}
		
		private function drawEventSlideMask():void
		{
			eventSlideMask = new Sprite();
			eventSlideMask.x = 5;
			eventSlideMask.y = 50;
			this.addChild(eventSlideMask);
			eventSlideMask.graphics.beginFill(0xFFFFFF);
			eventSlideMask.graphics.drawRect(0, 0, 386, 302);
			eventSlideMask.graphics.endFill();
			
		}
		
		private function drawEventSlideBG():void
		{			
			eventSlideBG = new Sprite();
			eventSlideBG.x = 5;
			eventSlideBG.y = 50;
			this.addChild(eventSlideBG);
			
			var _matrix:Matrix = new Matrix();
			_matrix.createGradientBox(386,302,90*Math.PI/180);
			eventSlideBG.graphics.beginGradientFill(GradientType.LINEAR, [0xFFFFFF,0xE9E7E8], [1, 1], [0, 225],_matrix);
			eventSlideBG.graphics.drawRect(0, 0, 386, 302);
			eventSlideBG.graphics.endFill();			
		}
		
		private function removedFromStageHandler(ev:Event):void
		{
			
			this.layoutXML = null;
			ev.target.removeEventListener(Event.REMOVED_FROM_STAGE, removedFromStageHandler);
		}
		
		
	}//end of class

}//enD of package