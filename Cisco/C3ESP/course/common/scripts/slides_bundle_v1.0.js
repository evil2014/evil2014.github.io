// Slides Bundle v1.0

/*****************************************************************************************************************************************/
								/*********      Public variable  Area             *******/

var imageArray = [];
var textArray = [];
var xmlData;

/*****************************************************************************************************************************************/
								/*********      Slides  Area             *******/

/*********************  Start Image Slide  ***********************/
(ImageSlide = function(_xmlData,_layoutXML){
	
	//super class inheritance
	this.initialize();
	
	xmlData = _xmlData;
	
	//alert($(_layoutXML).find("images").children().size());
	
	//alert($(_layoutXML).find("images").children(1).attr("y"));
	
	
	loadImageFromArray(this,$(_layoutXML).find("images"));
	
	//For text components
	
	$("#flashContent").append('<div id="ImageSlideText"></div>');
	
	//loadTextFromArray("ImageSlideText",this,_dataObject.texts);
	
}).prototype = new createjs.Container;


/*********************  End Image Slide  ***********************/


/*****************************************************************************************************************************************/
								/*********      Component  Area             *******/
								
(loadTextFromArray = function(_divId,_parent,_array)
{
	var textContainer;
	
	for(var i = 0;i<_array.length;i++)
	{
		textContainer = new createjs.Container();
		_parent.addChild(textContainer);
		
		textContainer.x = _array[i].x;
		textContainer.y = _array[i].y;
		
		loadText(_divId,textContainer,_array[i]);
	}
	
});
								
(loadText = function(_divId,_parent,_textObject)
{
	var color = _textObject.color == undefined ? "#000000" : _textObject.color;
	var align = _textObject.textAlign == undefined ? "left" : _textObject.textAlign;	
	var width = _textObject.width == undefined ? "auto" : _textObject.width+"px";
		
	var textDiv = document.createElement("div");		
	textDiv.style.cssText = 'position:absolute;top:0px;left:0px;width:'+width+';overflow:auto;font-size:'+_textObject.size+'px;visibility:hidden;color:'+color+';text-align:'+align+';';
	textDiv.id = _textObject.compId;
	textDiv.innerHTML = $(xmlData).find("component#"+_textObject.compId).text();		
		
	$("#"+_divId).append(textDiv);
	
	var domElement = new createjs.DOMElement(textDiv);
	domElement.x = domElement.y = 0;
	_parent.addChild(domElement);
	
	if(_parent.getStage()) _parent.getStage().update();
	
});
								
								
(loadImageFromArray = function(_parent,_xml)
{
	var imageHolder,imageContainer;
	var maskShape;
	
	$(_xml).find("image").each(function(){
		
		imageHolder = new createjs.Container();
		_parent.addChild(imageHolder)
	
		imageContainer = new createjs.Container();
		imageHolder.addChild(imageContainer);
		
		if($(this).attr("type") != undefined &&$(this).attr("type") == "STD")
		{
			var _shadow = new createjs.Shape();
			_shadow.graphics.beginFill('rgba(0,0,0,1)').drawRoundRect(0,0, $(this).attr("width"), $(this).attr("height"),8);
			_shadow.shadow = new createjs.Shadow("#000000",3,3,10);
			_shadow.x = _shadow.y = 0.5;
			_shadow.scaleX = _shadow.scaleY = 0.99;
			imageHolder.addChild(_shadow);
			
			imageHolder.swapChildren(imageHolder.getChildAt(0),_shadow);
			
			maskShape = new createjs.Shape();
			maskShape.graphics.beginFill().drawRoundRect(0,0, $(this).attr("width"), $(this).attr("height"),8);			
			imageHolder.addChild(maskShape);			
			imageContainer.mask = maskShape;
		}
		
		imageHolder.x = parseFloat($(this).attr("x"));
		imageHolder.y = parseFloat($(this).attr("y"));
						
		loadImage(imageContainer,$(this).attr("width"), $(this).attr("height"),$(this).attr("name"));
		
	});
});
								
function loadImage(_parent,_width,_height,_src)
{
	$("#preloader").show();
	
	var _image = new Image();
	_image.onload = function()
	{
		$("#preloader").hide();
		
		var bitmap = new createjs.Bitmap(this);
		_parent.addChild(bitmap);
		
		//For Image Resizing
		bitmap.scaleX = (_width/this.width);
		bitmap.scaleY = (_height/this.height);
				
		if(_parent.getStage()) _parent.getStage().update();
		
	}
	_image.src = _src;
}

						
/*********************  Start Root Container  ***********************/
(RootContainer = function()
{
	//super class inheritance
	this.initialize();
		
	
	this.windowWidth;
	this.windowHeight;
	this.canvas = document.getElementById("canvas");
		
	var _bg = new createjs.Shape();
	_bg.graphics.beginFill().drawRect(0,0,STAGE_WIDTH,STAGE_HEIGHT);
	this.addChild(_bg);
	
	
	this.resizeHandler = function()
	{
		
		if(this.windowWidth != window.innerWidth || this.windowHeight != window.innerHeight)
		{
			
			this.windowWidth = window.innerWidth;
			this.windowHeight = window.innerHeight;
		
			this.canvas.width = ((window.innerWidth) * 0.99); //;
			this.canvas.height = (window.innerHeight * 0.99);
			
			//RESIZING THE CONTAINER
			$('#flashContent').css('width','auto' );		
			$('#flashContent').css('cssText', 'overflow: hidden !important');
			
			var _ratio = Math.min(this.canvas.width/STAGE_WIDTH,this.canvas.height/STAGE_HEIGHT);
			if(_ratio<0.9)
			{	
				var width = this.canvas.width+"px";
				var height = this.canvas.height+"px";
				
				_ratio = 0.9;
				
				//console.log("this.canvas.height --> "+this.canvas.height+" stage size "+(STAGE_HEIGHT * _ratio));
				
				this.canvas.width = (STAGE_WIDTH * _ratio);
				$('#flashContent').css('cssText', 'overflow-x: scroll !important');	
				$('#flashContent').css("width",width);	
									
			}
			else if(_ratio > 1.3)
			{	
				_ratio = 1.3;
			} 		
			
			this.scaleX = this.scaleY = _ratio
			
			//POSITIONING THE CONTAINER			
			this.x = (((this.canvas.width) - (STAGE_WIDTH * _ratio))/2) ;
			this.y = ((this.canvas.height - (STAGE_HEIGHT * _ratio))/2);
			
			//$('#mainDiv').css("left",((this.canvas.width - $('#mainDiv').width())/2));
			if(this.getStage())
			{
				this.getStage().update();
			}			
		}		
	}
	
	this.resizeHandler();
	
	var _this = this;
	setInterval(function(){
					_this.resizeHandler();
				},100);
	
}).prototype = p = new createjs.Container();


/********************* End Root Container ************************/

