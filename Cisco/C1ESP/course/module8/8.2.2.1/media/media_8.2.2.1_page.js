loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js"); 
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "MULTI_BAR";
    var commonTexts = [{compId:"ID_inst",
						x:5,
						y:390,
						width:460,
						height:17,
						size:12,
						textAlign:"left"}];

    var slide_1_type = "IMAGE";
    var slide_1_images = [{name:"8.2.2.1a.jpg",
							x:18,
							y:61,
							width:404.9,
							height:253.3,
							type:"STD"},
							{name:"8.2.2.1a1.png",
							x:15,
							y:48,
							width:417,
							height:285,
							type:""}];
    var slide_1_texts = [{compId:"ID_s1_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:25,
							y:35.85, 
							width:104,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_s1_txt02",
							x:219.8,
							y:35.85, 
							width:141,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_s1_txt03",
							x:120.05,
							y:179.5, 
							width:199.95,
							height:17,
							size:12,
							shadow:"YES",
							shadowColor:"#FFFFFF",
							textAlign:"center"},
							{compId:"ID_s1_txt04",
							x:25,
							y:328.35, 
							width:120,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_s1_txt05",
							x:170,
							y:328.35, 
							width:120,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_s1_txt06",
							x:320,
							y:328.35, 
							width:120,
							height:17,
							size:12,
							textAlign:"left"}];
    var slide_1_object = {templateType:slide_1_type,
								x:0,
								y:0,
								images:slide_1_images,
								texts:slide_1_texts};


   var slide_2_type = "IMAGE";
    var slide_2_images = [{name:"8.2.2.1b.jpg",
							x:120,
							y:175,
							width:200,
							height:29.1,
							type:"STD"},
							{name:"8.2.2.1b1.png",
							x:114,
							y:150,
							width:216,
							height:81,
							type:""}];
    var slide_2_texts = [{compId:"ID_s2_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s2_txt01",
							x:70,
							y:227.85, 
							width:155,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_s2_txt02",
							x:120,
							y:136.85, 
							width:155,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_s2_txt03",
							x:224.9,
							y:136.85, 
							width:155,
							height:17,
							size:12,
							
							textAlign:"left"},
							{compId:"ID_s2_txt04",
							x:230,
							y:227.85, 
							width:155,
							height:17,
							size:12,
							textAlign:"center"}];
    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_2_images,
        texts:slide_2_texts};
		
		
	var slide_3_type = "IMAGE";
    var slide_3_images = [{name:"8.2.2.1c.jpg",
							x:10,
							y:54,
							width:370,
							height:320,
							type:"STD"},
							{name:"8.2.2.1c1.png",
							x:110,
							y:60,
							width:214,
							height:300,
							type:""}];
    var slide_3_texts = [{compId:"ID_s3_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s3_txt01",
							x:325.3,
							y:68, 
							width:104,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_s3_txt02",
							x:325.3,
							y:135, 
							width:104,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_s3_txt03",
							x:325.3,
							y:175, 
							width:104,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_s3_txt04",
							x:325.3,
							y:230, 
							width:104,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_s3_txt05",
							x:326,
							y:285, 
							width:104,
							height:17,
							size:12,
							textAlign:"left"}];
    var slide_3_object = {templateType:slide_3_type,
        x:0,
        y:0,
        images:slide_3_images,
        texts:slide_3_texts};

    var slides = [slide_1_object,slide_2_object,slide_3_object];

    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}