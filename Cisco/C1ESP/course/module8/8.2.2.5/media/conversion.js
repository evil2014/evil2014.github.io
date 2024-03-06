var Deci1answer;
var Deci2answer;
var Deci3answer;
var Deci4answer;
var Deci5answer;
var Deci6answer;
var Deci7answer;
var Deci8answer;
var Deci9answer;


$(".numbersOnly").live("keypress",function(e){
    if(e.which == 13) {
        checkAns(this.id);	
		
    }
});

$(document).ready(function() {
        $('.numbersOnly').live("click",function(){
            $(this).css({'color': '#000'});
			$("#pannel").hide();
			$("#"+this.id+"tick").hide();
			$("#"+this.id+"wrong").hide();


			//alert(this.id);

			
        });
    });

function checkAns( _id, isAll){
		var colRight = _id;
		var correctAnswer= eval(colRight+"answer");	
		   // correctAnswer=correctAnswer+'';
		var user_entry = $("#"+colRight).val();
			// user_entry =user_entry+'';
			//alert(correctAnswer);
			//alert(colRight);
		if($("#"+colRight).val() != "" || isAll)
		{
			//alert(user_entry.toLowerCase()+"   "+correctAnswer.toLowerCase());
			if(user_entry.toLowerCase() == correctAnswer.toLowerCase())	
			{				
				$("#"+colRight+"tick").show();
				$("#"+colRight+"wrong").hide()	
				$("#"+colRight).css("color","green");
				checkAll();
			}
			else
			{
				$("#"+colRight+"wrong").show();
				$("#"+colRight+"tick").hide();
				$("#"+colRight).css("color","red");
				$("#pannel").hide();
			}
		}

}



function checkAll(){		
	var successcount=0;
	for(x=1; x<10; x++)
	{
		if(eval("Deci"+x+"answer").toLowerCase() == $("#Deci"+x).val().toLowerCase())
		{
			successcount++;				
		}		
	}
	if(successcount==9)
	{
		$("#pannel").show();			
	}
	else
	{
		$("#pannel").hide();		
	}

	// alert("check all"+successcount);
}

function clearFields()
{
	$("input#Deci1").attr("value","");
	$("input#Deci2").attr("value","");
	$("input#Deci3").attr("value","");
	$("input#Deci4").attr("value","");	
	$("input#Deci5").attr("value","");
	$("input#Deci6").attr("value","");
	$("input#Deci7").attr("value","");
	$("input#Deci8").attr("value","");
	$("input#Deci9").attr("value","");
	$(".tick").hide();
	$(".wrong").hide();
	$("#pannel").hide();
	$("input#Deci1").css("color","black");
	$("input#Deci2").css("color","black");
	$("input#Deci3").css("color","black");
	$("input#Deci4").css("color","black");
	$("input#Deci5").css("color","black");
	$("input#Deci6").css("color","black");
	$("input#Deci7").css("color","black");
	$("input#Deci8").css("color","black");
	$("input#Deci9").css("color","black");

}

//var Deci1;
var temp;
var conversion = function(data,slideObj)
{
if(slideObj.slideID == 1)
{		
	//alert(slideObj.slideID);

temp = '<div id="ID_inst"></div><div id="subtitle"></div> <div id="mainwrapper"><div id="row1"><div id="ID_txt02"></div><div id="colRight"><div id="slide1_col1">2001</div><div id="semicolon1">:</div><div id="slide1_col2">0000</div><div id="semicolon1">:</div><div id="slide1_col3">0DB8</div><div id="semicolon1">:</div><div id="slide1_col4">1111</div><div id="semicolon1">:</div><div id="slide1_col5">0000</div><div id="semicolon1">:</div><div id="slide1_col6">0000</div><div id="semicolon1">:</div><div id="slide1_col7">0000</div><div id="semicolon1">:</div><div id="slide1_col8">0200</div>  </div></div> <div id="clearfix"></div><div id="row1"><div id="ID_txt03" style="background-color:#e9e7e8;"></div><div id="colRight" style="background-color:#e9e7e8;"><div id="slide1_col1" style="background-color:#e9e7e8;"><input type="text" class="numbersOnly" maxlength="4" size="4" id="Deci1" name="Deci1" /></div><div id="semicolon">:</div><div id="slide1_col2"><input type="text" class="numbersOnly" maxlength="4" size="4" id="Deci2" name="Deci2" value=""></div><div id="semicolon">:</div><div id="slide1_col3"><input type="text" class="numbersOnly" maxlength="4" size="4" id="Deci3" name="Deci3" value=""></div><div id="semicolon">:</div><div id="slide1_col4"><input type="text" class="numbersOnly" maxlength="4" size="4" id="Deci4" name="Deci4" value=""></div><div id="semicolon">:</div><div id="slide1_col5"><input type="text"  class="numbersOnly" maxlength="4" size="4" id="Deci5" name="Deci5" value=""></div><div id="semicolon">:</div><div id="slide1_col6"><input type="text" class="numbersOnly" maxlength="4" size="4" id="Deci6" name="Deci6" value=""></div><div id="semicolon">:</div><div id="slide1_col7"><input type="text" class="numbersOnly" maxlength="4" size="4" id="Deci7" name="Deci7" value=""></div><div id="semicolon">:</div><div id="slide1_col8"><input type="text" class="numbersOnly" maxlength="4" size="4" id="Deci8" name="Deci8" value=""></div>  </div></div><div id="clearfix"></div> <div id="row1"><div id="ID_txt04"></div><div id="colRight"><div id="slide1_col1"><input type="text" class="numbersOnly" maxlength="100" size="4" id="Deci9" name="Deci9" value=""></div>  </div></div></div><div><input type="submit" name="check" id="check" value="Check" class="button_add" /><input type="submit" name="reset" class="button_add" id="reset" value="Reset" /></div>';
temp +='<div id="Deci1tick" class="tick" style="display:none;" />';
temp +='<div id="Deci1wrong" class="wrong" style="display:none;" />';
temp +='<div id="Deci2tick" class="tick" style="display:none;" />';
temp +='<div id="Deci2wrong" class="wrong" style="display:none;" />';
temp +='<div id="Deci3tick" class="tick" style="display:none;" />';
temp +='<div id="Deci3wrong" class="wrong" style="display:none;" />';
temp +='<div id="Deci4tick" class="tick" style="display:none;" />';
temp +='<div id="Deci4wrong" class="wrong" style="display:none;" />';
temp +='<div id="Deci5tick" class="tick" style="display:none;" />';
temp +='<div id="Deci5wrong" class="wrong" style="display:none;" />';
temp +='<div id="Deci6tick" class="tick" style="display:none;" />';
temp +='<div id="Deci6wrong" class="wrong" style="display:none;" />';
temp +='<div id="Deci7tick" class="tick" style="display:none;" />';
temp +='<div id="Deci7wrong" class="wrong" style="display:none;" />';
temp +='<div id="Deci8tick" class="tick" style="display:none;" />';
temp +='<div id="Deci8wrong" class="wrong" style="display:none;" />';
temp +='<div id="Deci9tick" class="tick" style="display:none;" />';
temp +='<div id="Deci9wrong" class="wrong" style="display:none;" />';
temp +='<div id="pannel" style="display:none"><div id="ID_correctTitle"></div><div id="ID_correctBody"></div><div id="crossbutton" class="cross"><span></span><a href="#" id="incorrect" ><img src="cross.png" width="10" height="10" alt=""></a></div><div class="result"><p></p></div></div><script> $("a#correct").click(function ( event ) { $("#pannel2").hide(); event.preventDefault(); $(this).hide(); });</script>';



		$("#mainDiv").html(temp);

		Data = data;
		$("#ID_inst").html($(data).find("component#ID_inst").text());
		$("#subtitle").html($(data).find("component#ID_txt01").text());
		$("#ID_txt02").html($(data).find("component#ID_txt02").text());
		$("#ID_txt03").html($(data).find("component#ID_txt03").text());
		$("#ID_txt04").html($(data).find("component#ID_txt04").text());
		$("#ID_correctTitle").html($(data).find("component#ID_correctTitle").text());
		$("#ID_correctBody").html($(data).find("component#ID_correctBody").text());
		
		Deci1answer="2001";
		Deci2answer="0";
		Deci3answer="db8";
		Deci4answer="1111";
		Deci5answer="0";
		Deci6answer="0";
		Deci7answer="0";
		Deci8answer="200";
		Deci9answer="2001:0:db8:1111::200";		
		$(".numbersOnly").live("focusout",function(){checkAns(this.id);});


		$('.numbersOnly').live("click",function(){
            $(this).css({'color': '#000'});
			$("#pannel").hide();
			$("#"+this.id+"tick").hide();
			$("#"+this.id+"wrong").hide();});


	}
}

$("#reset").live("click",function(){	
	clearFields();
});


$("#check").live("click",function(){
	
	for(i=1;i<10;i++){
		checkAns("Deci"+i, true);
	}
	
});




$("#crossbutton").click(function ( event ) { 
	$("#pannel").hide() 
});


function callBackFromButtonBar(_id)
{
	//Clear the values
	clearFields();

	switch(_id)
	{
		case 0:/*first slide*/ 
			$("#slide1_col1").html("2001");
			$("#slide1_col2").html("0000");
			$("#slide1_col3").html("0DB8");
			$("#slide1_col4").html("1111");
			$("#slide1_col5").html("0000");
			$("#slide1_col6").html("0000");
			$("#slide1_col7").html("0000");
			$("#slide1_col8").html("0200");

			Deci1answer="2001";
			Deci2answer="0";
			Deci3answer="db8";
			Deci4answer="1111";
			Deci5answer="0";
			Deci6answer="0";
			Deci7answer="0";
			Deci8answer="200";
			Deci9answer="2001:0:db8:1111::200";
			//checkAns();

			break;

		case 1:/* second slide */
			$("#slide1_col1").html("2013");
			$("#slide1_col2").html("0000");
			$("#slide1_col3").html("0123");
			$("#slide1_col4").html("4567");
			$("#slide1_col5").html("89AB");
			$("#slide1_col6").html("CDEF");
			$("#slide1_col7").html("0000");
			$("#slide1_col8").html("0001");
			

			Deci1answer="2013";
			Deci2answer="0";
			Deci3answer="123";
			Deci4answer="4567";
			Deci5answer="89ab";
			Deci6answer="cdef";
			Deci7answer="0";
			Deci8answer="1";
			Deci9answer="2013:0:123:4567:89AB:CDEF::1";
			//checkAns();
			break;

		case 2:/* 3rd slide */
			$("#slide1_col1").html("0000");
			$("#slide1_col2").html("0000");
			$("#slide1_col3").html("0000");
			$("#slide1_col4").html("0000");
			$("#slide1_col5").html("0000");
			$("#slide1_col6").html("0000");
			$("#slide1_col7").html("0000");
			$("#slide1_col8").html("0001");
			

			Deci1answer="0";
			Deci2answer="0";
			Deci3answer="0";
			Deci4answer="0";
			Deci5answer="0";
			Deci6answer="0";
			Deci7answer="0";
			Deci8answer="1";
			Deci9answer="::1";
			//checkAns();
			break;

		case 3:/* 4th slide */
			$("#slide1_col1").html("2012");
			$("#slide1_col2").html("ABCD");
			$("#slide1_col3").html("EF01");
			$("#slide1_col4").html("2345");
			$("#slide1_col5").html("0678");
			$("#slide1_col6").html("0910");
			$("#slide1_col7").html("AAAA");
			$("#slide1_col8").html("BBBB");
			

			Deci1answer="2012";
			Deci2answer="abcd";
			Deci3answer="ef01";
			Deci4answer="2345";
			Deci5answer="678";
			Deci6answer="910";
			Deci7answer="aaaa";
			Deci8answer="bbbb";
			Deci9answer="2012:abcd:ef01:2345:678:910:aaaa:bbbb";
			//checkAns();
			break;

		case 4:/* 5th slide */
			$("#slide1_col1").html("AB1E");
			$("#slide1_col2").html("2B00");
			$("#slide1_col3").html("0000");
			$("#slide1_col4").html("1234");
			$("#slide1_col5").html("5678");
			$("#slide1_col6").html("9101");
			$("#slide1_col7").html("1112");
			$("#slide1_col8").html("1113");
			

			Deci1answer="ab1e";
			Deci2answer="2b00";
			Deci3answer="0";
			Deci4answer="1234";
			Deci5answer="5678";
			Deci6answer="9101";
			Deci7answer="1112";
			Deci8answer="1113";
			Deci9answer="ab1e:2b00::1234:5678:9101:1112:1113";
			//checkAns();
			break;
		
		case 5:/* 6th slide */
			$("#slide1_col1").html("BB2B");
			$("#slide1_col2").html("EF12");
			$("#slide1_col3").html("BFF3");
			$("#slide1_col4").html("9125");
			$("#slide1_col5").html("1111");
			$("#slide1_col6").html("0101");
			$("#slide1_col7").html("1111");
			$("#slide1_col8").html("0101");
			

			Deci1answer="bb2b";
			Deci2answer="ef12";
			Deci3answer="bff3";
			Deci4answer="9125";
			Deci5answer="1111";
			Deci6answer="101";
			Deci7answer="1111";
			Deci8answer="101";
			Deci9answer="bb2b:ef12:bff3:9125:1111:101:1111:101";
			//checkAns();
			break;

		case 6:/* 7th slide */
			$("#slide1_col1").html("1129");
			$("#slide1_col2").html("1984");
			$("#slide1_col3").html("2233");
			$("#slide1_col4").html("4455");
			$("#slide1_col5").html("6677");
			$("#slide1_col6").html("0000");
			$("#slide1_col7").html("0000");
			$("#slide1_col8").html("0101");
			

			Deci1answer="1129";
			Deci2answer="1984";
			Deci3answer="2233";
			Deci4answer="4455";
			Deci5answer="6677";
			Deci6answer="0";
			Deci7answer="0";
			Deci8answer="101";
			Deci9answer="1129:1984:2233:4455:6677::101";
			//checkAns();
			break;

		case 7:/* 8th slide */
			$("#slide1_col1").html("1111");
			$("#slide1_col2").html("0000");
			$("#slide1_col3").html("0000");
			$("#slide1_col4").html("0000");
			$("#slide1_col5").html("0000");
			$("#slide1_col6").html("0000");
			$("#slide1_col7").html("0101");
			$("#slide1_col8").html("1111");
			

			Deci1answer="1111";
			Deci2answer="0";
			Deci3answer="0";
			Deci4answer="0";
			Deci5answer="0";
			Deci6answer="0";
			Deci7answer="101";
			Deci8answer="1111";
			Deci9answer="1111::101:1111";
			//checkAns();
			break;

		case 8:/* 9th slide */
			$("#slide1_col1").html("1031");
			$("#slide1_col2").html("1976");
			$("#slide1_col3").html("0001");
			$("#slide1_col4").html("0002");
			$("#slide1_col5").html("0003");
			$("#slide1_col6").html("0004");
			$("#slide1_col7").html("0000");
			$("#slide1_col8").html("0101");
			

			Deci1answer="1031";
			Deci2answer="1976";
			Deci3answer="1";
			Deci4answer="2";
			Deci5answer="3";
			Deci6answer="4";
			Deci7answer="0";
			Deci8answer="101";
			Deci9answer="1031:1976:1:2:3:4::101";
			//checkAns();
			break;

		case 9:/* 10th slide */
			$("#slide1_col1").html("0000");
			$("#slide1_col2").html("0000");
			$("#slide1_col3").html("0000");
			$("#slide1_col4").html("1234");
			$("#slide1_col5").html("6678");
			$("#slide1_col6").html("9101");
			$("#slide1_col7").html("0000");
			$("#slide1_col8").html("34AB");
			

			Deci1answer="0";
			Deci2answer="0";
			Deci3answer="0";
			Deci4answer="1234";
			Deci5answer="6678";
			Deci6answer="9101";
			Deci7answer="0";
			Deci8answer="34ab";
			Deci9answer="::1234:6678:9101:0:34AB";
			//checkAns();
			break;



	}

	
}


