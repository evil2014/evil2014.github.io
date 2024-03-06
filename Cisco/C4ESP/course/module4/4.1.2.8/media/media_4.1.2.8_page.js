function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
(slideViewDidLoad = function(container,id){	
	isResize = false;
	root.resizer();
	if(id==3){
		loadFirst();
	}
	
	function loadFirst(){
		//Create new div with scroll property into root container
	$("#slide_3").append("<div id='canvasId' style='top:10px;left:0px;position:absolute;width:437px;overflow-x:auto;'></div>");	
	var canvasDOM = new createjs.DOMElement(document.getElementById("canvasId"));
	canvasDOM.x = 10;
	canvasDOM.y = 140;
	root.addChild(canvasDOM);
	//Create new canvas & stage into new div
	$("#canvasId").append("<canvas id='childCanvas' width='724' height='96' style='position:relative;top:0px;left:0px;'></canvas>");	
	var childStage = new createjs.Stage(document.getElementById("childCanvas"));	
	var im = new Image();
	
	//Create Flowchart IMAGE component
	im.onload = function()
	{		
		var _img = new createjs.Bitmap(this);
		_img.y = 0;
		_img.x = 0;
		childStage.addChild(_img);
		initSlide();	
	}
	im.src = "4_1_2_8.png";	
	function initSlide(){
	var textArray = [
		{compId:"ID_s3_txt13", x:"607.6", y:"87.5", width:"45", expand:"left+right", align:"center", size:"10"},
		{compId:"ID_s3_txt11", x:"208.05", y:"87.5", width:"45", expand:"left+right", align:"center", size:"10"},
		{compId:"ID_s3_txt12", x:"473", y:"86", width:"78", expand:"down", align:"center", size:"10"},
		{compId:"ID_s3_txt02", x:"-8", y:"26.5", width:"80", expand:"up+down", align:"center", size:"10"},
		{compId:"ID_s3_txt03", x:"70.6", y:"26.5", width:"80", expand:"up+down", align:"center", size:"10"},
		{compId:"ID_s3_txt04", x:"151.85", y:"26.5", width:"80", expand:"up+down", align:"center", size:"10"},
		{compId:"ID_s3_txt05", x:"232.1", y:"26.5", width:"80", expand:"up+down", align:"center", size:"10"},
		{compId:"ID_s3_txt06", x:"311.95", y:"26.5", width:"80", expand:"up+down", align:"center", size:"10"},
		{compId:"ID_s3_txt07", x:"391.7", y:"26.5", width:"80", expand:"up+down", align:"center", size:"10"},
		{compId:"ID_s3_txt08", x:"471.2", y:"26.5", width:"80", expand:"up+down", align:"center", size:"10"},
		{compId:"ID_s3_txt09", x:"550.9", y:"26.5", width:"80", expand:"up+down", align:"center", size:"10"},
		{compId:"ID_s3_txt10", x:"631", y:"26.5", width:"80", expand:"up+down", align:"center", size:"10"},
		{id:"ID_static_1", text:"8", x:"26.85", y:"74", align:"center", width:"6", size:"10"},

	{id:"ID_static_2", text:"16", x:"103.4", y:"74", align:"center", width:"11.5", size:"10"}, 
	{id:"ID_static_3", text:"8", x:"186.7", y:"74", align:"center", width:"6.2", size:"10"}, 
	{id:"ID_static_4", text:"8", x:"266.95", y:"74", align:"center", width:"6.2", size:"10"}, 
	{id:"ID_static_5", text:"8", x:"346.8", y:"74", align:"center", width:"6.2", size:"10"}, 
	{id:"ID_static_6", text:"8", x:"426.55", y:"74", align:"center", width:"6.2", size:"10"}, 
	{id:"ID_static_7", text:"16", x:"582.7", y:"74", align:"center", width:"11.5", size:"10"}, 
	{id:"ID_static_8", text:"8", x:"665.85", y:"74", align:"center", width:"6.2", size:"10" },
		
];						
		
		//Add each text object into the new stage
		var tComp;				
		for(var i = 0;i<textArray.length;i++)
		{
			textArray[i].div = "canvasId";
			tComp = getCJSElement("TEXT",textArray[i],"canvasId");
			childStage.addChild(tComp);
		}
		
		//Update stage for rendering new Image & Text objects
		update = true;
		childStage.update();
	}	
	}
});