//	loadScript("../../../common/scripts/templates/RootContainer.js");
		
	var url=location.href;
	url=url.split("/")
	url=url[url.length-3];
	var xmlFile='media_'+url+'.xml';
	var layoutFile = 'media_'+url+'_layout.xml';
	var dataXML;

	function init(){
		
		if(!swfobject.hasFlashPlayerVersion("1"))
		{
			//Adding Preloader
			var preloader = new Image();
			preloader.id = "preloader";
			preloader.src = "../../../common/images/preloader.gif";
			preloader.style.cssText = "position:absolute;top:50%;left:50%;";
			//var divId = document.getElementById("flashContent");
			document.getElementById("flashContent").appendChild(preloader);
			//$("#flashContent").append('<img id="preloader" src="../../../common/images/preloader.gif" width="20" height="20" style="position:absolute;top:50%;left:50%;">');
			
			loadScript("../../../common/scripts/jquery-1.7.2.min.js",loadCreatejs);
		}
	}
	function loadCreatejs()
	{
		loadScript("../../../common/scripts/createJS_bundle_050.min.js",loadSlideBundle);
	}
	
	function loadSlideBundle()
	{
		loadScript("../../../common/scripts/slides_bundle_v1.0.js",loadDataXML);
	}
	
	function loadDataXML()
	{
		
		$.ajax({
			type: "GET",
			crossDomain:false, //edit 24/01 : this property must be set to false
			url: xmlFile,
			dataType: "xml",
			success: loadLayoutXML,
			error: erFun
		});
	}
	
	function loadLayoutXML(data)
	{
		dataXML = data;
		$.ajax({
			type: "GET",
			crossDomain:false, //edit 24/01 : this property must be set to false
			url: layoutFile,
			dataType: "xml",
			success: initTemplate,
			error: erFun
		});
	}
		
	function initTemplate(layoutXML)
	{		
	
		//var data = dataXML;
		
		//Remove the preloader
		$("#preloader").hide();
		
		//var templateType = $(layoutXML).find("templateType").text();
		
		//alert(templateType);
		//var dataObject = getData();
		var _slide;
		
		var canvas = document.getElementById("canvas");
		var stage = new createjs.Stage(canvas);	
		
		//Adding Root Container
		var rootContainer = new RootContainer();	
		stage.addChild(rootContainer);
		//For Touch Support
		if (createjs.Touch.isSupported()) { createjs.Touch.enable(stage); }
		
		switch($(layoutXML).find("templateType").text())
		{  		
			case "IMAGE":
					_slide = new ImageSlide(dataXML,layoutXML);	
					rootContainer.addChild(_slide);					
				break;
				/*
			case "MULTI_BUTTON":		
					stage.enableMouseOver();		
					_slide = new MultiButtonSlide(data,dataObject);					
					rootContainer.addChild(_slide);
				break;
				
			case "MULTI_BAR":		
					stage.enableMouseOver();		
					_slide = new MultiBarSlide(data,dataObject);					
					rootContainer.addChild(_slide);
				break;
				
			case "TABLE":	
					_slide = new TableSlideNew(data,dataObject);
					rootContainer.addChild(_slide);
				break;
			
			case "DESCRIPTION":				
					_slide = new DescriptionSlide(data,dataObject);	
					rootContainer.addChild(_slide);
				break;
			
			case "ANIMATION":	
					_slide = new AnimationSlide(data,dataObject);	
					rootContainer.addChild(_slide);
				break;
			
			case "INTERACTIVE":	
					
				break;
				*/
			
			case undefined:
					alert("I think you forgot to update the template type in getData().. Please check..");
				break;	
		}
	}

 function erFun(e){
        alert("Error"+e);
    }
