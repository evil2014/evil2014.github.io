loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/DragDropSlide.js");


function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}