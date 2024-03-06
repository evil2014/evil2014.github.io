
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
	
	var manifest = [
		{src:"images/_3_3_1_1.jpg", id:"_3_3_1_1"},
		{src:"images/arrow.png", id:"arrow"}
	];
	
	return manifest;			
});


