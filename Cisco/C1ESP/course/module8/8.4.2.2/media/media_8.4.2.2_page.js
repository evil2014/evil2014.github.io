//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"8_4_2_2.jpg",
						x:15,
						y:49.1,
						width:451.65,
						height:276.75,
						type:"STD"},
						{name:"8_4_2_2a.png",
						x:203	,
						y:159,
						width:82,
						height:81,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:25,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

