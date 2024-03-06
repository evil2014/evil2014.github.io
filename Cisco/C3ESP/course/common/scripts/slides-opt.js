	//loadScript("../../../common/scripts/templates/RootContainer.js");
		
	var url=location.href;
	url=url.split("/")
	url=url[url.length-3];
	var xmlFile='media_'+url+'.xml';
	var dataObject;
	
	function getJSFileNames(_arr)
	{
		var jsArray = [];
		for(var i = 0;i<_arr.length;i++)
		{
			switch(_arr[i])
			{
				case "root":
						jsArray.push("../../../common/scripts/templates/RootContainer.js");
					break;
				case "text":
						jsArray.push("../../../common/scripts/templates/comp/TextComp.js");
					break;
				case "image":
						jsArray.push("../../../common/scripts/templates/comp/ImageComp.js");
					break;
				case "mimage":
						jsArray.push("../../../common/scripts/templates/comp/MultipleImageComp.js");
					break;
				case "simage":
						jsArray.push("../../../common/scripts/templates/slide/ImageSlideNew.js");
					break;
			}
		}
		
		return jsArray;
	}
	
	function init(){ 
		if(!swfobject.hasFlashPlayerVersion("1")){				
			loadScript("../../../common/scripts/jquery-1.7.2.min.js",JQueryLoaded);			
		}
	}
	
	function JQueryLoaded()
	{
		loadScript("../../../common/scripts/createJS_bundle_050.min.js",createjsLoaded);
	}
	
	function createjsLoaded()
	{
		//loadScript("../../../common/scripts/templates/RootContainer.js");
		//createjs.Ticker.addListener(this);
		//var sc = getJSFileNames(["root","text","image","mimage"]);
		loadJSFiles(getJSFileNames(["root"]),loadScriptFiles);
		
	}
	function loadJSFiles (scripts, callback)
	{
		var loadCount = scripts.length;

		function done(){
			loadCount -=1;
			if (loadCount==0){ 
				callback();
			}
		}

		for ( var i=0; i<scripts.length; i++){
			$.getScript(scripts[i], done);
		}

	}
	function loadScriptFiles()
	{
		var dObject = getData();
		switch(dObject.templateType)
		{  		
			case "IMAGE":
					loadScript(getJSFileNames(["text","image","mimage","simage"]),loadXMLFile);		
				break;
		}
		
	}
	
	
	function loadXMLFile()
	{
		$.ajax({
				type: "GET",
				crossDomain:false, //edit 24/01 : this property must be set to false
				url: xmlFile,
				dataType: "xml",
				success: initTemplate,
				error: erFun
			});
	}
		
	function initTemplate(data)
	{		
		dataObject = getData();
		var _slide;
		
		var canvas = document.getElementById("canvas");
		var stage = new createjs.Stage(canvas);	
		var rootContainer = new RootContainer();	
		stage.addChild(rootContainer);
		if (createjs.Touch.isSupported()) { createjs.Touch.enable(stage); }
		switch(dataObject.templateType)
		{  		
			case "IMAGE":
					stage.enableMouseOver();		
					_slide = new ImageSlideNew(data, dataObject.slideObject);	
					rootContainer.addChild(_slide);
					stage.update();			
				break;
				
			case "MULTI_BUTTON":		
					stage.enableMouseOver();		
					_slide = new MultiButtonSlide(data,dataObject);					
					rootContainer.addChild(_slide);
					stage.update();
				break;
				
			case "MULTI_BAR":		
					stage.enableMouseOver();		
					_slide = new MultiBarSlide(data,dataObject);					
					rootContainer.addChild(_slide);
					stage.update();
				break;
				
			case "TABLE":	
					_slide = new TableSlideNew(data,dataObject);
					rootContainer.addChild(_slide);
					stage.update();
				break;
			
			case "DESCRIPTION":				
					_slide = new DescriptionSlide(data,dataObject);	
					rootContainer.addChild(_slide);
					stage.update();
				break;
			
			case "ANIMATION":	
					_slide = new AnimationSlide(data,dataObject);	
					rootContainer.addChild(_slide);
					stage.update();
				break;

			
				case "VIDEO":
					_slide = new VideoSlide(data,dataObject);
					
				break;

			case "DRAG_DROP":
					dataObject.isViewDD = 1;
					_slide = new DragDropSlide(data,dataObject);	
					//rootContainer.addChild(_slide);
					//stage.update();
				break;
			case "INTERACTIVE":	
					stage.enableMouseOver();		
					_slide = new InteractiveSlide(data,dataObject);	
					rootContainer.addChild(_slide);
					stage.update();
				break;			
			case "TIMELINE_ANIMATION":	 
					
					bindTimeLine.initTimeLine(data,dataObject.sort_type);

				break;
				
			case "POP_OVER_SLIDE":
					stage.enableMouseOver();		
					_slide = new PopOverSlide(data, dataObject.slideObject);	
					rootContainer.addChild(_slide);
					stage.update();			
				break;
				
			case "INTERACTIVEANIM":					
				_slide = new InteractiveAnimSlide(data,dataObject.slideObject);
			    break;
				
			case "DECITOBINARY":
				_slide = new DecimaltoBinarySlide(data,dataObject.slideObject);	
				break;
				
			case "BINARYTODECI":
				_slide = new BinarytoDecimalSlide(data,dataObject.slideObject);					
				break;			
				
			case "ASCIITOBIN":
				_slide = new AsciiToBinSlide(data,dataObject.slideObject);	
				break;
						
			case "FIBACTIVITY":			
				_slide = new FibActivitySlide(data,dataObject.slideObject);
				break;	

	         case "UBM":
				_slide = new UniMultiBroadcastSlide(data);					
				break;
				
			case "ANI-ACTIVITY":
				_slide = new AnimationActivitySlide(data,dataObject.slideObject);					
				break;
				
			case "ANDING":
				  _slide = new AndingSlide(data,dataObject.slideObject);					
				  break;
		
			case "FIBHOSTACTIVITY":				
				_slide = new FibActivityHostSlide(data,dataObject.slideObject);
				break;	
				
			 case "PABA":
				_slide = new PassAndBlockAction(data);					
				break;	
					
			case undefined:
					alert("I think you forgot to update the template type in getData().. Please check..");
				break;				
			
		}
	}

 function erFun(e){
        alert("Error"+e);
    }
