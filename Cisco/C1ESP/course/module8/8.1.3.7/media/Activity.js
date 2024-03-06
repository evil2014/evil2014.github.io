var binary;
var decimal;
var fullAddress;
var showMeMode = false;
var Data;

var Activity = function(_xmlData,_dataObject)
{		
	Data=_xmlData;
	$("#title").html($(_xmlData).find("component#ID_title").text());
	$("#title_sub").html($(_xmlData).find("component#ID_txt01").text());
	$("#addresstext").html($(_xmlData).find("component#ID_txt02").text());
	$("#host").html($(_xmlData).find("component#ID_txt03").text());
	$("#subnet").html($(_xmlData).find("component#ID_txt04").text());
	$("#hostbin").html($(_xmlData).find("component#ID_txt05").text());
	$("#subnetbin").html($(_xmlData).find("component#ID_txt06").text());
	$("#fortext").html($(_xmlData).find("component#ID_txt08").text());
	$("#ID_txt09").html($(_xmlData).find("component#ID_txt09").text());
	$("#ID_txt10").html($(_xmlData).find("component#ID_txt10").text());
	$("#ID_txt11").html($(_xmlData).find("component#ID_txt11").text());
	$("#ID_txt12").html($(_xmlData).find("component#ID_txt12").text());
}

	var temp="";
	temp +='<table width="700" border="0" cellspacing="0" cellpadding="0" style="padding-left:9px;"> <tr> <td width="700" align="left" valign="top"> <table cellpadding="0" cellspacing="0" border="0" width="95%"> <tr><td id="title"></td></tr><tr><td id="title_sub"></td></tr><tr> <td></td> </tr> <tr> <td height="10"></td> </tr> <tr> <td></td> </tr> </table> </td> <td width="500" align="center" valign="top"> <table width="562" border="0" cellspacing="1" cellpadding="1" class="top_gap"> <tr> <td width="4"></td> <td colspan="12"></td> </tr> <tr> <td class="top_gap"></td> <td colspan="4"></td> </tr> <tr><td colspan="8"><table width="101%" cellpadding="0" cellspacing="0" border="0"><tr><td id="addresstext" width="270" align="center"></td><td id="address"></td></tr><tr><td colspan="2" height="10"></td></tr></table></td></tr><tr><td colspan="8"></td></tr><tr> <td height="26" class="align_right" id="decival"></td> <td colspan="4"> <table width="101%" border="0" id="title_bg" cellspacing="0" cellpadding="0"> <tr> <td width="153" id="ID_txt09"></td> <td width="145" id="ID_txt10"></td> <td width="149" id="ID_txt11"></td> <td width="155" id="ID_txt12"></td> </tr> </table> </td> </tr><tr height="30"> <td class="align_right"></td> <td class="exponent_bg" width="125" id="host"></td><td class="exponent_bg" width="118"><input name="network1" type="text" id="network1" size="8" maxlength="8" /></td><td class="exponent_bg" width="123"><input name="network2" type="text" id="network2" size="8" maxlength="15" /></td><td class="exponent_bg" width="126"><input name="network3" type="text" id="network3" size="8" maxlength="15" /></td></tr><tr height="30"><td class="align_right"></td><td class="position_bg" width="125" id="subnet"></td><td class="position_bg" width="118"><input name="broadcast1" type="text" id="broadcast1" size="8" maxlength="8" /></td><td class="position_bg" width="123"><input name="broadcast2" type="text" id="broadcast2" size="8" maxlength="15" /></td><td class="position_bg" width="126"><input name="broadcast3" type="text" id="broadcast3" size="8" maxlength="15" /></td></tr><tr height="30"><td class="align_right"></td><td class="exponent_bg" width="125" id="hostbin"></td><td class="exponent_bg" width="118"><input name="fuhostadd1" type="text" id="fuhostadd1" size="8" maxlength="8" /></td><td class="exponent_bg" width="123"><input name="fuhostadd2" type="text" id="fuhostadd2" size="8" maxlength="15" /></td><td class="exponent_bg" width="126"><input name="fuhostadd3" type="text" id="fuhostadd3" size="8" maxlength="15" /></td></tr><tr height="30"><td class="align_right"></td><td class="position_bg" width="125" id="subnetbin"></td><td class="position_bg" width="118"><input name="luhostadd1" type="text" id="luhostadd1" size="8" maxlength="8" /></td><td class="position_bg" width="123"><input name="luhostadd2" type="text" id="luhostadd2" size="8" maxlength="15" /></td><td class="position_bg" width="126"><input name="luhostadd3" type="text" id="luhostadd3" size="8" maxlength="15" /></td></tr><tr> <td>&nbsp;</td> <td colspan="7" class="align_center" id="enter"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><input type="submit" name="check" id="check" value="Check" /></td><td><input type="submit" name="reset" id="reset" value="Reset" /></td><td><input type="submit" name="new_nub" id="new_nub" value="New Value" /></td><td><input type="submit" name="show" id="show" value="Show Me" /></td></tr></table></td></tr></table></td></tr><div id="pannel" style="display:none;"><div class="cross"><span></span><a href="#" id="incorrect" ><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result"><p></p></div></div><div id="pannel_2" style="display:none"><div class="cross_2"><span></span><a href="#" id="correct" ><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result_2"><p></p></div></div><script> $("a#incorrect").click(function ( event ) { $("#pannel").slideUp(1000); event.preventDefault(); $(this).hide(); });</script><script> $("a#correct").click(function ( event ) { $("#pannel_2").hide(); event.preventDefault(); $(this).hide(); });</script></table>';
	
$("#mainDiv").html(temp);

$(function(){
	network1 = new Array()
	resetQuestion();	
		
	$("#new_nub").click(function(){
		resetQuestion();
		
	});
	
	$("#show").live("click",function(){
		onShow();
	});
	
$("#check").live("click",function(){
	
	if($("#network1,#network2,#network3,#network4,#broadcast1,#broadcast2,#broadcast3,#broadcast4,#fuhostadd1,#fuhostadd2,#fuhostadd3,#fuhostadd4,#luhostadd1,#luhostadd2,#luhostadd3,#luhostadd4").attr("value")=="")
	{
		
		
	}
	
	if (!showMeMode)
	{	
		validateAnswer();
	}
	else
	{
		$("#pannel").css("display","none");
	}
})
		
	$('#network1,#broadcast1,#fuhostadd1,#luhostadd1').keypress(function(key)
	{
		$("#pannel").css("display","none");
		var k = key.charCode;
		if(k == 48 || k == 49 || k == 0)  
		{
			return true;
		}
		else
		{			
			return false;
		}
	});
	
	$('#network2,#network3,#broadcast2,#broadcast3,#fuhostadd2,#fuhostadd3,#luhostadd2,#luhostadd3').keypress(function(key)
	{
		$("#pannel").css("display","none");
		var k = key.charCode;
		if(k>=48 && k<=57 || k == 0 || k==46)
		{
			return true;
		}
		else
		{			
			return false;
		}
	});
	
	$("#network1,#network2,#network3,#network4,#broadcast1,#broadcast2,#broadcast3,#broadcast4,#fuhostadd1,#fuhostadd2,#fuhostadd3,#fuhostadd4,#luhostadd1,#luhostadd2,#luhostadd3,#luhostadd4").focus(function(){
		
		$("#pannel").css("display","none");
	});
	
	$("#reset").live("click",function(){
		$("#pannel").css("display","none");	
	showMeMode = false;
	
if($("#network1,#network2,#network3,#network4,#broadcast1,#broadcast2,#broadcast3,#broadcast4,#fuhostadd1,#fuhostadd2,#fuhostadd3,#fuhostadd4,#luhostadd1,#luhostadd2,#luhostadd3,#luhostadd4").is('[readonly]'))
	{
		$("#network1,#network2,#network3,#network4,#broadcast1,#broadcast2,#broadcast3,#broadcast4,#fuhostadd1,#fuhostadd2,#fuhostadd3,#fuhostadd4,#luhostadd1,#luhostadd2,#luhostadd3,#luhostadd4").removeAttr('readonly');
		$("#network1").focus();		
	}
		
	$("#network1,#network2,#network3,#network4,#broadcast1,#broadcast2,#broadcast3,#broadcast4,#fuhostadd1,#fuhostadd2,#fuhostadd3,#fuhostadd4,#luhostadd1,#luhostadd2,#luhostadd3,#luhostadd4").attr("value","");

	})
});

function RowAnswer() 
{ 
	this.binary = "";
	this.decimal = "";
	this.fullAddress = "";
} 

function initializeAnswers()
{
	// for nework1 address in last octet in binary, in decimal , full address, 
	var rowAnswer = new RowAnswer();
	rowAnswer.binary = dec2bin(netAddress[3]);
	rowAnswer.decimal =netAddress[3];
	rowAnswer.fullAddress = joinAddress(netAddress);
	network1.push(rowAnswer);

	// for nework1 = broad cast address
	rowAnswer = new RowAnswer();
	rowAnswer.binary = dec2bin(baAddress[3]);;
	rowAnswer.decimal =baAddress[3];
	rowAnswer.fullAddress =joinAddress(baAddress);
	network1.push(rowAnswer);
	
	// for nework1 = B=27 row 3
	rowAnswer = new RowAnswer();
	rowAnswer.binary = dec2bin(fipAddress[3]);
	rowAnswer.decimal =fipAddress[3];
	rowAnswer.fullAddress =joinAddress(fipAddress);
	network1.push(rowAnswer);
	
	// for nework1 = B=27 row 4
	rowAnswer = new RowAnswer();
	rowAnswer.binary = dec2bin(lipAddress[3]);
	rowAnswer.decimal =lipAddress[3];
	rowAnswer.fullAddress =joinAddress(lipAddress);
	network1.push(rowAnswer);
}

function joinAddress(array)
{
	var ipAddress = "";
	for (var i=1;i< array.length+1;i++) 
	{
		ipAddress += array[i-1] + (i== array.length ? "" : ".");
	}
	return ipAddress;
}


function getMaskBits(mask)
{
	var submask = mask + ".";
	var k = 0;
	var smn = 0;
	for (var j = 0; j < submask.length; j++)
		{
		if (submask.charAt(j) == '.') 
			{
			var oc = submask.substr(k, j-k);
			k = j+1;
			if (oc == "255") smn += 8;
			else if (oc == "254") smn += 7;
			else if (oc == "252") smn += 6;
			else if (oc == "248") smn += 5;
			else if (oc == "240") smn += 4;
			else if (oc == "224") smn += 3;
			else if (oc == "192") smn += 2;
			else if (oc == "128") smn += 1;
			}
		}
	return smn;
}


function newNumber() 
{
	showMeMode = false;
	$("#network1,#network2,#network3,#network4,#broadcast1,#broadcast2,#broadcast3,#broadcast4,#fuhostadd1,#fuhostadd2,#fuhostadd3,#fuhostadd4,#luhostadd1,#luhostadd2,#luhostadd3,#luhostadd4").attr("value","");
	
	$("#network1").focus();		
	hostAddress = new Array(4);
	subnetMask  = new Array(4);
	netAddress  = new Array(4);
	fipAddress = new Array(4);
	lipAddress = new Array(4);
	baAddress = new Array(4);

	// First octet is always 10
	hostAddress[0] = Math.round(Math.random() * 63)+ 129;
	hostAddress[1] = Math.round(Math.random() * 255);
	hostAddress[2] = Math.round(Math.random() * 255);
	hostAddress[3] = Math.round(Math.random() * 253) + 1; // Don't consume 10.0.0.0 or 10.255.255.255

	// First two octets are always 255
	var validMasks = new Array(255, 254, 252, 248, 240, 224, 192, 128, 0);
	subnetMask[0] = 255;
	subnetMask[1] = 255;

	var rand = Math.round(Math.random() * (validMasks.length + 6)); // Make it 8/16 chance for 255
	if (rand <= 7) rand = 0;
	else           rand = rand - 7; // Adjust for everything else
	subnetMask[2] = validMasks[rand];
	subnetMask[3] = (subnetMask[2] == 255 ? (validMasks[Math.round(Math.random() * (validMasks.length - 2)) + 2]) : 0);
	// Calculate the network address
	for (var i = 0; i < 4; i++) {
		netAddress[i] = ((hostAddress[i] & 0xFF) & (subnetMask[i] & 0xFF)) & 0xFF;
	}	
	// Find the host address
	for (i = 0; i < 4; i++) {
		fipAddress[i] = netAddress[i];
		if (i == 3) fipAddress[i]++;
	}

	// Invert the subnetmask, and OR it with the host address for the broadcast address
	for (i = 0; i < 4; i++) {
		baAddress[i] = netAddress[i] | ((~subnetMask[i]) & 0xFF);
	}

	// Calculate the last address from the BA address
	for (i = 0; i < 4; i++) {
		lipAddress[i] = baAddress[i];
		if (i == 3) lipAddress[i]--;
	}

}

function resetQuestion(){
	if($("#network1,#network2,#network3,#network4,#broadcast1,#broadcast2,#broadcast3,#broadcast4,#fuhostadd1,#fuhostadd2,#fuhostadd3,#fuhostadd4,#luhostadd1,#luhostadd2,#luhostadd3,#luhostadd4").is('[readonly]'))
	{
		$("#network1,#network2,#network3,#network4,#broadcast1,#broadcast2,#broadcast3,#broadcast4,#fuhostadd1,#fuhostadd2,#fuhostadd3,#fuhostadd4,#luhostadd1,#luhostadd2,#luhostadd3,#luhostadd4").removeAttr('readonly');
		$("#network1").focus();		
	}
	
	$("#network1,#network2,#network3,#network4,#broadcast1,#broadcast2,#broadcast3,#broadcast4,#fuhostadd1,#fuhostadd2,#fuhostadd3,#fuhostadd4,#luhostadd1,#luhostadd2,#luhostadd3,#luhostadd4").attr("value","");
	
	network1 = new Array()
	newNumber();
	$("#address").html("<b>"+ joinAddress(hostAddress)+"/" + getMaskBits(joinAddress(subnetMask)) +"</b>");
	initializeAnswers();
}


function dec2bin(val) 
{
	var result = "";
	while (val > 0) 
	{
		if (val & 0x01) result = "1" + result;
		else            result = "0" + result;
		val = (val >> 1);
	}
	while (result.length % 8 || result.length == 0) 
	{
		result = "0" + result;
	}
	return result;
}

function bin2dec(val) 
{
	var result = 0;
	while (val.length != 0) 
	{
		if (val.substr(0, 1) == "1") result = result | 0x1;
		result = result << 1;
		val = val.substr(1);
	}
	result = result >> 1;
	return result;
}

function onShow() {
	showMeMode = true;
	$("#pannel").css("display","none");
	
	// display all answers
	var answerObj = network1[0];
	$("#network1").attr("value",answerObj.binary);
	$("#network2").attr("value",answerObj.decimal);
	$("#network3").attr("value",answerObj.fullAddress);
	
	
	answerObj = network1[1];
	$("#broadcast1").attr("value",answerObj.binary);
	$("#broadcast2").attr("value",answerObj.decimal);
	$("#broadcast3").attr("value",answerObj.fullAddress);
	
	

	answerObj = network1[2];
	$("#fuhostadd1").attr("value",answerObj.binary);
	$("#fuhostadd2").attr("value",answerObj.decimal);
	$("#fuhostadd3").attr("value",answerObj.fullAddress);

	
	answerObj =  network1[3];
	$("#luhostadd1").attr("value",answerObj.binary);
	$("#luhostadd2").attr("value",answerObj.decimal);
	$("#luhostadd3").attr("value",answerObj.fullAddress);
$("#network1,#network2,#network3,#network4,#broadcast1,#broadcast2,#broadcast3,#broadcast4,#fuhostadd1,#fuhostadd2,#fuhostadd3,#fuhostadd4,#luhostadd1,#luhostadd2,#luhostadd3,#luhostadd4").attr('readonly', true);
}

function validateAnswer()
{
	
	// check for all rows
	var answerObj = network1[0];
	
	var row1 = false;
	var row2 = false;
	var row3 = false;
	var row4 = false; 
	if ($("#network1").attr("value") == answerObj.binary && $("#network2").attr("value") == answerObj.decimal && $("#network3"        ).attr("value") == answerObj.fullAddress)
	{
		row1 = true;
	}
	else
	{
	
	}
	
	answerObj = network1[1];
	if ($("#broadcast1").attr("value") == answerObj.binary && $("#broadcast2").attr("value") == answerObj.decimal && $(        "#broadcast3").attr("value") == answerObj.fullAddress)
	{
		row2 = true;
	}
	else
	{
	
	}
	
	answerObj =  network1[2];
	if ($("#fuhostadd1").attr("value") == answerObj.binary && $("#fuhostadd2").attr("value") == answerObj.decimal && $(        "#fuhostadd3").attr("value") == answerObj.fullAddress)
	{
		row3 = true;
	}
	else
	{
	
	}
	
	answerObj =  network1[3];
	if ($("#luhostadd1").attr("value") == answerObj.binary && $("#luhostadd2").attr("value") == answerObj.decimal && $(        "#luhostadd3").attr("value") == answerObj.fullAddress)
	{
		row4 = true;
	}else
	{
	
	}
	
	if (row1 == true && row2 == true && row3 == true && row4 == true)
	{
		$(".cross span").html($(Data).find("component#ID_CORRECT_TITLE").text());
		$(".result p").html($(Data).find("component#ID_CORRECT_BODY").text());
		$("#pannel").css("display","block");
	}
	else
	{
		$(".cross span").html($(Data).find("component#ID_INCORRECT_TITLE").text());
		$(".result p").html($(Data).find("component#ID_INCORRECT_BODY").text());
		$("#pannel").css("display","block");
	}
}