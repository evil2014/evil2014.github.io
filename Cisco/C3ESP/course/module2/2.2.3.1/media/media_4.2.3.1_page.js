
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/createJS_bundle.min.js", null);
//loadScript("media_4.2.3.1_graphic.js", null);
