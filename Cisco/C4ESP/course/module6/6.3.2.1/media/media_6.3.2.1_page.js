
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
	var img = new Image();

		img.src="../../../common/images/numbers.png";
		img.onload = function()
		{	
			
		}
	
});