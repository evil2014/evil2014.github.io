loadScript("../../../common/scripts/swfobject.js", registerSWF);
loadScript("../../../common/scripts/templates/slide/DragDropSlide.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "DRAG_DROP";
    var buttonStyle = {normalSkinImage:"../../../common/images/drag_normal.png",
        overSkinImage:"../../../common/images/drop_normal.png",
        dropNormalSkinImage:"../../../common/images/drop_normal.png",
        normalTextStyle:'#FFFFFF',
        overTextStyle:'#006699',
        cornorRadius:5,
        selected:0};

    var buttons = [{compId:"ID_s1_drag08",
        x:5,
        y:243.5,
        width:148,
        height:40,
	    tag:1,
        size:12,
        textAlign:"center"},
        {compId:"ID_s1_drag04",
            x:160,
            y:243.5,
            width:148,
            height:40,
	        tag:1,
            size:12,
            textAlign:"center"},
	{compId:"ID_s1_drag07",
            x:315,
            y:243.5,
            width:148,
            height:40,
	        tag:1,
            size:12,
            textAlign:"center"},
	{compId:"ID_s1_drag02",
            x:5,
            y:285.5,
            width:148,
            height:40,
	        tag:2,
            size:12,
            textAlign:"center"},
	{compId:"ID_s1_drag05",
            x:160,
            y:285.5,
            width:148,
            height:40,
	        tag:2,
            size:12,
            textAlign:"center"},
	{compId:"ID_s1_drag01",
            x:315,
            y:285.5,
            width:148,
            height:40,
	        tag:2,
            size:12,
            textAlign:"center"},
	{compId:"ID_s1_drag09",
            x:5,
            y:327.5,
            width:148,
            height:40,
    	    tag:2,
            size:12,
            textAlign:"center"},
	{compId:"ID_s1_drag06",
            x:160,
            y:327.5,
            width:148,
            height:40,
    	    tag:2,
            size:12,
            textAlign:"center"},
	{compId:"ID_s1_drag03",
            x:314.45,
            y:327.5,
            width:148,
            height:40,
    	    tag:1,
            size:12,
            textAlign:"center"}
    ];
    var dropBox = [{compId:"ID_drop01",
        x:8,
        y:39,
        width:148,
        height:40,
        size:12,
        answer:1,
        textAlign:"center"},
        {compId:"ID_drop02",
            x:160.5,
            y:39.5,
            width:148,
            height:40,
            size:12,
            answer:1,
            textAlign:"center"},
        {compId:"ID_drop03",
            x:313,
            y:39.5,
            width:148,
            height:40,
            size:12,
            answer:1,
            textAlign:"center"},
	{compId:"ID_drop04",
            x:8,
            y:82.5,
             width:148,
            height:40,
            size:12,
            answer:1,
            textAlign:"center"},
	{compId:"ID_drop05",
            x:160.50,
            y:82.5,
             width:148,
            height:40,
            size:12,
            answer:1,
            textAlign:"center"},
	{compId:"ID_drop06",
            x:313, 
            y:82.5,
            width:148,
            height:40,
            size:12,
            answer:1,
            textAlign:"center"},
	{compId:"ID_drop07",
            x:8,
            y:150,
            width:148,
            height:40,
            size:12,
            answer:2,
            textAlign:"center"},
	{compId:"ID_drop08",
            x:160.5,
            y:150.5,
            width:148,
            height:40,
            size:12,
            answer:2,
            textAlign:"center"},
	{compId:"ID_drop09",
            x:313, 
            y:150.5,
            width:148,
            height:40,
            size:12,
            answer:2,
            textAlign:"center"},
	    {compId:"ID_drop10",
            x:8,
            y:193.5,
            width:148,
            height:40,
            size:12,
            answer:2,
            textAlign:"center"},
	{compId:"ID_drop11",
            x:160.5,
            y:193.5,
            width:148,
            height:40,
            size:12,
            answer:2,
            textAlign:"center"},
	{compId:"ID_drop12",
            x:313,           
            y:193.5,
            width:148,
            height:40,
            size:12,
            answer:2,
            textAlign:"center"}
    ];

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [{compId:"ID_s1_inst",
        x:3.35,
        y:379,
        width:341,
        height:17,
        size:14,
        textAlign:"left"},
        {compId:"ID_s1_title",
            x:150,
            y:2,
            width:300,
            height:17,
            size:16,
            textAlign:"center"}];
    var slide_text = [{compId:"ID_s1_term01",
                            x:10.3,
                            y:22.85,
                            width:104,
                            height:17,
                            size:12,
                            textAlign:"left"},
                      {compId:"ID_s1_term02",
                            x:10.3,
                            y:133.85,
                            width:104,
                            height:17,
                            size:12,
                            textAlign:"left"} 
    ];
    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_images = [{compId:"ID_image01",
                            name:"../../../common/images/dd_bg.png",
                            x:2,
                            y:21,
                            width:465,
                            height:106,
                            size:12,
                            textAlign:"left"},
                        {compId:"ID_image02",
                            name:"../../../common/images/dd_bg.png",
                            x:2,
                            y:132,
                           width:465,
                            height:106,
                            size:12,
                            textAlign:"left"}
                    ];

    var submit_buttons = [{},{compId:"ID_RESET",
                            x:387.5,
                            y:369,
                            width:74.95,
                            height:21,
                            size:12,
                            normalSkinImage:"../../../common/images/btn_normal.png",
                            textAlign:"center"}
                        ];                    
    
    var feedbackObj = [{compId:"ID_FEEDBACK",
        x:100,
        y:200,
        width:150,
        height:17,
        size:12,
        image:"../../../common/images/feedback.png",
        textAlign:"center"}];
	
    var instobj = {ansType:"snap-back"};
	
    return {templateType:template_type,
        textObject:commonTexts,
        buttonObject:buttonObject,
        slideObject:slide_text,
        slideImages:slide_images,
        dropObject:dropObject,
        submitObject:submit_buttons,
        feedbackObj:feedbackObj,
	instobj:instobj
    };

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

