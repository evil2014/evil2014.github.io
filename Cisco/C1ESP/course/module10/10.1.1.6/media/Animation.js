
var bubble1,ping1,ping2,ping3,ping4,ping5,ping6;
var myTimeline;
var envelop1,envelop2,envelop3,envelop4,envelop5,envelop6,envelop7,envelop8,envelop9,envelop10,envelop11,envelop12,envelop13,envelop14,envelop15;
var bubble1,bubble2,bubble3,bubble4;
var pause,play,restart;
var nestedTimeline1,nestedTimeline2;

var animation1 = function(data)
{
	
	//alert($(data).find("component#ID_s2_txt06").text())
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	

	var temp ='';
	

	temp +='<div id="maincontainer1"><div id="imagecontainer1"><div id="slide1"><img src="slide_1.png" width="375" height="260" />';
	temp +='<div id="ping" class="ping1" style="opacity:0;"><img src="ping_1.png" width="20" height="13" /></div>';
	temp +='<div id="ping2" class="ping2"><img src="ping_2.png" width="19" height="14" /></div>'; 
	temp +='</div>';
	//
	temp+='<div id="ID_s1_txt01"></div><div id="ID_s1_txt02"></div>';
	temp+='<div id="ID_s1_txt03"></div>';
	temp+='<div id="slide1_bubble1" style="opacity:0"><div id="slide1_bub1text"></div></div>';
	temp+='<div id="slide1_bubble2" style="opacity:0"><div id="slide1_bub2text"></div></div>';
	temp+='<div id="slide1_bubble3" style="opacity:0"><div id="slide1_bub3text"></div></div>';
	
	$("#animDiv").html(temp);
	
			$("#ID_s1_txt01").html($(data).find("component#ID_s1_txt01").text());
			$("#ID_s1_txt02").html($(data).find("component#ID_s1_txt02").text());
			$("#ID_s1_txt03").html($(data).find("component#ID_s1_txt03").text());
			$("#slide1_bub1text").html($(data).find("component#ID_s1_txt05").text());
			$("#slide1_bub2text").html($(data).find("component#ID_s1_txt06").text());
			$("#slide1_bub3text").html($(data).find("component#ID_s1_txt04").text());
}

		
	function animation()
	{   
		pause = $("#pauseBtn");
		play = $("#playBtn");
		restart = $("#restartBtn");
		
		var ping = $('#ping');
		for (var i = 1; i <= 12; i++) {
			ping.clone().attr('id','ping_'+i).insertAfter($('#ping'));
		}

		var ping = $('#ping2');
		for (var i = 1; i <= 8; i++) {
			ping.clone().attr('id','ping_2_'+i).insertAfter($('#ping'));
			}
	 
		ping1 = $("#ping_1"); 
		ping2 = $("#ping_2");		
		ping3 = $("#ping_3");
		ping4 = $("#ping_4"); 
		ping5 = $("#ping_5");
		ping6 = $("#ping_6"); 
		ping7 = $("#ping_7");
		ping8 = $("#ping_8"); 
		ping9 = $("#ping_9");
		ping10 = $("#ping_10");
		ping11 = $("#ping_11"); 
		ping12 = $("#ping_12"); 

		ping21 = $("#ping_2_1"); 
		ping22 = $("#ping_2_2"); 
		ping23 = $("#ping_2_3");
		ping24 = $("#ping_2_4"); 
		ping25 = $("#ping_2_5");
		ping26 = $("#ping_2_6");
		ping27 = $("#ping_2_7");
		ping28 = $("#ping_2_8"); 

		slide1_bubble1 = $("#slide1_bubble1"); 
		slide1_bubble2 = $("#slide1_bubble2"); 
		slide1_bubble3 = $("#slide1_bubble3"); 
		 

			//tl.to(slide1_bubble1,1,{css:{display:"block"}})  
			tl.to(slide1_bubble1,.1,{css:{opacity:1}})

			
			nestedTimeline1 = new TimelineMax({repeat:1,repeatDelay:0,yoyo:false,});
			  
				nestedTimeline1.append([ 

					new TweenLite(ping1,.5,{css:{opacity:1}}),
					new TweenLite(ping1,1,{css:{left:187,bottom:100},delay:.2}), 
					new TweenLite(ping1,.5,{css:{opacity:0},delay:.5}), 

					new TweenLite(ping2,.5,{css:{opacity:1},delay:.5}), 
					new TweenLite(ping2,1,{css:{left:187,bottom:100},delay:.7}), 
					new TweenLite(ping2,.5,{css:{opacity:0},delay:1}),

					new TweenLite(ping3,.5,{css:{opacity:1},delay:1}), 
					new TweenLite(ping3,1,{css:{left:187,bottom:100},delay:1.2}), 
					new TweenLite(ping3,.5,{css:{opacity:0},delay:1.5}),

					new TweenLite(ping4,.5,{css:{opacity:1},delay:1.5}), 
					new TweenLite(ping4,1,{css:{left:187,bottom:100},delay:1.7}), 
					new TweenLite(ping4,.5,{css:{opacity:0},delay:2})
				])
			
			
		tl.append(nestedTimeline1);

	        nestedTimeline2 = new TimelineMax();
			nestedTimeline2.append([ 
				new TweenLite(ping21,.5,{css:{opacity:.9}}),
				new TweenLite(ping21,1,{css:{left:37,bottom:16},delay:.2}),
				new TweenLite(ping21,.5,{css:{opacity:0},delay:.5}),

			 	new TweenLite(ping5,.5,{css:{opacity:.9}}),
				new TweenLite(ping5,1,{css:{left:187,bottom:100},delay:.2}), 
				new TweenLite(ping5,.5,{css:{opacity:0},delay:.5}), 
				
				new TweenLite(ping22,.5,{css:{opacity:.9},delay:.5}),
				new TweenLite(ping22,1,{css:{left:37,bottom:16},delay:.7}),
				new TweenLite(ping22,.5,{css:{opacity:0},delay:1}),

				new TweenLite(ping6,.5,{css:{opacity:.9},delay:.5}), 
				new TweenLite(ping6,1,{css:{left:187,bottom:100},delay:.7}), 
				new TweenLite(ping6,.5,{css:{opacity:0},delay:1}),

				new TweenLite(ping23,.5,{css:{opacity:.9},delay:1}),
				new TweenLite(ping23,1,{css:{left:37,bottom:16},delay:1.2}),
				new TweenLite(ping23,.5,{css:{opacity:0},delay:1.5}),

				new TweenLite(ping7,.5,{css:{opacity:.9},delay:1}), 
				new TweenLite(ping7,1,{css:{left:187,bottom:100},delay:1.2}), 
				new TweenLite(ping7,.5,{css:{opacity:0},delay:1.5}),

				new TweenLite(ping24,.5,{css:{opacity:.9},delay:1.5}),
				new TweenLite(ping24,1,{css:{left:37,bottom:16},delay:1.7}),
				new TweenLite(ping24,.5,{css:{opacity:0},delay:2}),

				new TweenLite(ping8,.5,{css:{opacity:.9},delay:1.5}), 
				new TweenLite(ping8,1,{css:{left:187,bottom:100},delay:1.7}), 
				new TweenLite(ping8,.5,{css:{opacity:0},delay:2}),

				new TweenLite(ping25,.5,{css:{opacity:.9},delay:2}),
				new TweenLite(ping25,1,{css:{left:37,bottom:16},delay:2.2}),
				new TweenLite(ping25,.5,{css:{opacity:0},delay:2.5}),

				// add callout
				new TweenLite(slide1_bubble2,.1,{css:{opacity:1},delay:2}),  
				new TweenLite(ping9,.5,{css:{opacity:.9},delay:2}), 
				new TweenLite(ping9,1,{css:{left:187,bottom:100},delay:2.2}), 
				new TweenLite(ping9,.5,{css:{opacity:0},delay:2.5}), 

				new TweenLite(ping26,.5,{css:{opacity:.9},delay:2.5}),
				new TweenLite(ping26,1,{css:{left:66,bottom:32},delay:2.7}),
				new TweenLite(ping26,.5,{css:{opacity:0.5},delay:3}),

				new TweenLite(ping10,.5,{css:{opacity:.9},delay:2.5}), 
				new TweenLite(ping10,1,{css:{left:219,bottom:85},delay:2.7}), 
				new TweenLite(ping10,.5,{css:{opacity:0.5},delay:3}),
				// add callout
				new TweenLite(slide1_bubble3,.1,{css:{opacity:1},delay:3}),  
				new TweenLite(ping27,.5,{css:{opacity:.9},delay:3}),
				new TweenLite(ping27,1,{css:{left:141,bottom:74},delay:3.2}),
				new TweenLite(ping27,.5,{css:{opacity:.7},delay:3.5}),

				new TweenLite(ping11,.5,{css:{opacity:.9},delay:3}), 
				new TweenLite(ping11,1,{css:{left:287,bottom:52},delay:3.2}), 
				new TweenLite(ping11,.5,{css:{opacity:.7},delay:3.5}),
				
				]) 
		tl.append(nestedTimeline2); 
		
		tl.to(pause,.05,{onComplete:myFunction})
	}
	 
	 
	function myFunction()
	{
		//tl.invalidate();
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	 
var animation2 = function(data)
{
	
	//alert($(data).find("component#ID_s2_txt06").text())
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	

	var temp ='';
	
temp +='<div id="maincontainer">';
temp +='<div id="imagecontainer"><div id="slide2"><img src="10_1_1_6_B.png" width="315" height="200" />';/**/
temp +='<div>';
temp +='<img id="envelop1" class="envelop hide" src="e1.png" style="top:177px;left:311px;opacity:0;"/>';
temp +='<img id="envelop2" class="envelop hide" src="e1.png" style="top:177px;left:311px;opacity:0;"/>';
temp +='<img id="envelop3" class="envelop hide" src="e1.png" style="top:104px;left:155px;"/>';
temp +='<img id="envelop4" class="envelop hide" src="e3.png" style="top:104px;left:155px;"/>';
temp +='<img id="envelop5" class="envelop hide" src="e1.png" style="left:-16px;top:23px"/>';
temp +='<img id="envelop6" class="envelop hide" src="e3.png" style="left:285px;top:29px;"/>';
temp +='<img id="envelop7" class="envelop hide" src="e3.png" style="top:104px;left:155px;"/>';
temp +='<img id="envelop8" class="envelop hide" src="e3.png" style="top:104px;left:155px;"/>';

temp +='<img id="envelop9" class="envelop hide" src="e1.png" style="left:-16px;top:23px"/>';
temp +='<img id="envelop10" class="envelop hide" src="e3.png" style="left:285px;top:29px;"/>';
temp +='<img id="envelop11" class="envelop hide" src="e3.png" style="top:104px;left:155px;"/>';
temp +='<img id="envelop12" class="envelop hide" src="e3.png" style="top:104px;left:155px;"/>';

temp +='<img id="envelop13" class="envelop hide" src="e1.png" style="left:-16px;top:23px"/>';
temp +='<img id="envelop14" class="envelop hide" src="e3.png" style="left:285px;top:29px;"/>';
temp +='<img id="envelop15" class="envelop hide" src="e3.png" style="top:104px;left:155px;"/>';
temp +='<img id="envelop16" class="envelop hide" src="e3.png" style="top:104px;left:155px;"/>';
temp +='</div>';
temp +='<div id="cloud"></div>'; 
temp +='<div id="female"><img src="enduserfemale.png" width="86" height="88" />'; 
temp +='<div id="server"><img src="server.png" width="38" height="54" /></div>';
temp +='<div id="male"><img src="endusermale.png" width="89" height="89" /></div>'; 
temp +='<div id="unaumale"><img src="unauthorized-user.png" width="58" height="76" /></div>';  
temp+='<div id="bubble1" style="opacity:0;"><div id="bub1text"></div></div>';
temp+='<div id="bubble2" style="opacity:0;"><div id="bub2text"></div></div>';
temp+='<div id="bubble3" style="opacity:0;"><div id="bub3text"></div></div>';
temp+='<div id="bubble4" style="opacity:0;"><div id="bub4text"></div></div>';
temp+='<div id="ID_s2_txt02"></div><div id="ID_s2_txt03"></div>';
temp+='<div id="ID_s2_txt04"></div><div id="ID_s2_txt05"></div>';
temp+='</div></div>';
	
			$("#animDiv").html(temp);
			
			$("#bub1text").html($(data).find("component#ID_s2_txt06").text());
			$("#bub2text").html($(data).find("component#ID_s2_txt08").text());
			$("#bub3text").html($(data).find("component#ID_s2_txt08").text());
			$("#bub4text").html($(data).find("component#ID_s2_txt07").text());
			$("#ID_s2_txt02").html($(data).find("component#ID_s2_txt02").text());
			$("#ID_s2_txt03").html($(data).find("component#ID_s2_txt03").text());
			$("#ID_s2_txt04").html($(data).find("component#ID_s2_txt04").text());
			$("#ID_s2_txt05").html($(data).find("component#ID_s2_txt05").text());
}
 
	function animation3()
	{   
 
		envelop1 =  $("#envelop1");  
		envelop2 =  $("#envelop2");
		envelop3 =  $("#envelop3");
		envelop4 =  $("#envelop4");
		envelop5 =  $("#envelop5");
		envelop6 =  $("#envelop6");
		envelop7 =  $("#envelop7");
		envelop8 =  $("#envelop8");
		envelop9 =  $("#envelop9");
		envelop10 =  $("#envelop10");
		envelop11 =  $("#envelop11");
		envelop12 =  $("#envelop12");
		envelop13 =  $("#envelop13");
		envelop14 =  $("#envelop14");
		envelop15 =  $("#envelop15");
		envelop16 =  $("#envelop16");
		bubble1  =  $("#bubble1");
		bubble2  =  $("#bubble2");
		bubble3  =  $("#bubble3");
		bubble4  =  $("#bubble4");
		pause = $("#pauseBtn");
		restart = $("#reatartBtn")
		
	 tl.call(unHide);
		tl.append([
			new TweenLite([envelop1,bubble1],.5,{css:{opacity:"1"}}), 
			new TweenLite(envelop1,1,{css:{left:"155px",top:"104px"}}),
			new TweenLite(envelop2,.05,{css:{opacity:"1"},delay:.3}),
			new TweenLite(envelop2,1,{css:{left:"155px",top:"104px"},delay:.35}),
			new TweenLite(envelop3,1,{css:{left:"-16px",top:"23px"},delay:.6}),
			new TweenLite(envelop4,1,{css:{left:"285px",top:"29px"},delay:.7}),
		])

		.to([envelop1,envelop2,envelop3],.02,{css:{opacity:0}})
		
		tl.append([
		//new TweenLite([envelop1,envelop2,envelop3],.02,{css:{opacity:0}}),
		new TweenLite(bubble1,.2,{css:{opacity:0}}),
		new TweenLite(bubble2,.5,{css:{opacity:1}}),
		new TweenLite(bubble3,.5,{css:{opacity:1}}),
		]) 
 		 
		.append([
		new TweenLite(envelop5,1,{css:{left:"155px",top:"104px"}}),
		new TweenLite(envelop6,1,{css:{left:"155px",top:"104px"},delay:.2}),
		new TweenLite(envelop7,1,{css:{left: "-33px",top:"190px"},delay:1}),
		new TweenLite(envelop7,.01,{css:{opacity:0},delay:2}),
		new TweenLite(envelop8,1.2,{css:{left: "-33px",top:"190px"},delay:1.2}),
		new TweenLite(envelop8,.01,{css:{opacity:0},delay:2}),
		]) 

		.append([
		new TweenLite(envelop9,1,{css:{left:"155px",top:"104px"}}),
		new TweenLite(envelop10,1,{css:{left:"155px",top:"104px"},delay:.2}),
		new TweenLite(envelop11,1,{css:{left: "-33px",top:"190px"},delay:1}),
		new TweenLite(envelop11,.01,{css:{opacity:0},delay:2}),
		new TweenLite(envelop12,1.2,{css:{left: "-33px",top:"190px"},delay:1.2}),
		new TweenLite(envelop12,.01,{css:{opacity:0},delay:2}),
		]) 

		.append([
		new TweenLite(envelop13,1,{css:{left:"155px",top:"104px"}}),
		new TweenLite(envelop14,1,{css:{left:"155px",top:"104px"},delay:.2}),
		new TweenLite(envelop15,1,{css:{left: "-33px",top:"190px"},delay:1}),
		new TweenLite(envelop15,.01,{css:{opacity:0},delay:2}),
		new TweenLite(envelop16,1.2,{css:{left: "-33px",top:"190px"},delay:1.2}),
		new TweenLite(envelop16,.01,{css:{opacity:0},delay:2}),
		]) 
    
		.append([
		new TweenLite(bubble2,.5,{css:{opacity:0}}),
		new TweenLite(bubble3,.5,{css:{opacity:0}}),
		new TweenLite(bubble4,.5,{css:{opacity:1}})
		])
		 
		
	.to(pause,.05,{onComplete:myFunction1})
	}
	
	function myFunction1()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	
	function unHide()
	{
		$('.hide').removeClass('hide');
	}


var animeArray = [{name:animation1,animFunction:animation},{name:animation2,animFunction:animation3}];