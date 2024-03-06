loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


window.parent.myLayout.sizePane("west", 390);
window.parent.myLayout.options.west.minSize = 390;

