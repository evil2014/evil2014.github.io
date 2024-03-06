
var VideoSlide = function(_xmlData,_dataObject)
{		
	this.initiateComp(_xmlData,_dataObject);	
}

var _this = VideoSlide.prototype = new createjs.Container();

_this.initiateComp = function(_xmlData,_dataObject)

{	
	_this.dataObject = _dataObject;
	_this.xmlData = _xmlData;
	
	//var videoTag = "<iframe id='ytplayer' type='text/html' width='340' height='390' src='"+videoURL+"' frameborder='0'/>"	
	//var videoTag = "<object width='640' height='390'><param name='youtube' value='http://www.youtube.com/v/qgRAm7QMtmg?version=3&fs=1&modestbranding=1&rel=0&color=white&theme=light&autoplay=0&autohide=0&frameborder=0&allowfullscreen'></param><param name='allowScriptAccess' value='always'></param><embed src='http://www.youtube.com/v/qgRAm7QMtmg?version=3&fs=1&modestbranding=1&rel=0&color=white&theme=light&autoplay=0&autohide=0&frameborder=0&allowfullscreen'type='application/x-shockwave-flash' allowscriptaccess='always' width='640' height='390'></embed></object>"
	//$('#videoDiv').html(videoTag);
	//$("#mainDiv").append('<div id="videoDiv"></div>');
	
	var videoURL = _this.dataObject.videoObject[0].url;	
	var videoTag = document.createElement('div');
	videoTag.id = "videoTag"+_this.dataObject.slideNum;
	//videoTag.innerHTML=' <iframe id="ytplayer" width='+_this.dataObject.videoObject[0].width+' height='+_this.dataObject.videoObject[0].height+' frameborder="0" src="'+videoURL+'" type="text/html"> </iframe>';
	videoTag.innerHTML= '<iframe id="ytplayer" style="max-width:100%;" width="440" height="248" src="http://www.youtube.com/embed/D34G30lWgg8" frameborder="0" allowfullscreen>';
	
	videoTag.style.cssText = "position:absolute; top:0px;left:0px;width:"+_this.dataObject.videoObject[0].width+ "px;height:"+_this.dataObject.videoObject[0].height+"px;";
	$("#flashContent").append(videoTag);
	//videoTag.style.cssText = "position:absolute; top:0px;left:0px;";
	
	var dom = new createjs.DOMElement(videoTag);
	dom.x = _this.dataObject.videoObject[0].x;
	dom.y = _this.dataObject.videoObject[0].y;
	this.addChild(dom);
	
	//alert($("#canvas").width()+" -- "+$("#ytplayerr").contents().find("video-player"));
	
	//$("#ytplayerr").contents().find("video-player").css("width",440+"px");
	
	var t = this;
	var ci,w,h,r;
	this.tick = function()
	{
		if(t)
		{			
			if(w != window.innerWidth)
			{
				w = window.innerWidth;
				h = window.innerHeight;
				r = w/h;
				
				if($("#canvas").width() > 540)
				{
					this.x = 0;
					this.y = 0;
					
				}				
			}
		}
		else
		{
			clearInterval(ci);
		}
	}	
	//ci = setInterval(function(){t.tick();},100);
	
}

