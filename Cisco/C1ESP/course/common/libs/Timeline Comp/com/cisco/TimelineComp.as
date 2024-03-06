package com.cisco 
{
	import fl.core.UIComponent;
	import flash.display.MovieClip;
	import flash.events.Event;
	
	/**
	 * ...
	 * @author Ravi Kumar D
	 */
	public class TimelineComp extends UIComponent 
	{
		private var timelineSlide:TimeLineSlide;
		
		public function TimelineComp() 
		{
			addEventListener(Event.RENDER, renderHandler, false, 0, true);
		}
		
		override protected function configUI():void{  
            //Call the superclass configUI function  
            super.configUI();  
  
            //Create a definition for the background  
           // var bgDef:Object=this.loaderInfo.applicationDomain.getDefinition("TimeLineSlide");  
		   timelineSlide = new TimeLineSlide();
		   addChild(timelineSlide);
        }  
		
		private function renderHandler(ev:Event):void
		{
			if (this.parent)
			{
				var _mc:MovieClip;
				
				for (var i:int = 0; i < this.parent.numChildren; i++)
				{
					_mc = this.parent.getChildAt(i) as MovieClip;
					if (_mc && (_mc.name.split("_")[0] == "event_"))
					{
						_mc.visible = false;
					}
				}
			}
			
		}
		
		
	}//end of class

}//enDate of package