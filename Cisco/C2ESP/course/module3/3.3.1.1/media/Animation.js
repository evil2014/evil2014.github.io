(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400.2);


// symbols:
(lib._3_3_1_1 = function() {
	this.initialize(img._3_3_1_1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,167);


(lib.textAnim2 = function() {
	this.initialize();

	// Layer 1
	//this.text = new cjs.Text("ID_txt09", "11px Arial", "#4E4C4D");
 	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt09",  width:"115", expand:"down", size:"11",color:"#F68026"}); 


	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.1,16.2);


(lib.textAnim = function() {
	this.initialize();

	// Layer 1
	//this.text_1 = new cjs.Text("ID_txt10", "11px Arial", "#4E4C4D");
 	this.text_1 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt10",  width:"360", expand:"down", size:"11"}); 


	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.1,16.2);


(lib.Arrow_oramge = function() {
	this.initialize();

	// arrow png
	this.instance = new lib.arrow();
	this.instance.setTransform(-26.8,81.7,0.849,0.849,-124.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.8,-82.4,174.2,164.2);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// text anim
	this.instance_1 = new lib.textAnim();
	this.instance_1.setTransform(20,304.3,1,1,0,0,0,13.5,8.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70).to({alpha:1},10).wait(1));

	// ID_txt09
	this.instance_2 = new lib.textAnim2();
	this.instance_2.setTransform(226.4,200.4,1,1,0,0,0,13.5,8.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({x:152.5,y:185.5},0).to({alpha:1},7).wait(72));

	// lazy text
	//this.text_2 = new cjs.Text("ID_txt07", "11px Arial", "#4E4C4D");
  	this.text_2 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt07",  width:"75", expand:"down", size:"11"}); 

	this.text_2.setTransform(370,266);

	//this.text_3 = new cjs.Text("ID_txt04", "11px Arial", "#4E4C4D");
  	this.text_3 = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt04",  width:"103", expand:"up", size:"11"}); 

	this.text_3.setTransform(15,149.4);

	//this.text_4 = new cjs.Text("ID_txt08", "11px Arial", "#4E4C4D");
  	this.text_4 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt08",  width:"66", expand:"up", size:"11"}); 

	this.text_4.setTransform(345,76.2);

	//this.text_5 = new cjs.Text("ID_txt06", "11px Arial", "#4E4C4D");
  	this.text_5 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt06",  width:"66", expand:"down", size:"11"}); 

	this.text_5.setTransform(402,133.2);

//	this.text_6 = new cjs.Text("ID_txt05", "11px Arial", "#4E4C4D");
  	this.text_6 = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt05",  width:"90", expand:"down", size:"11"}); 

 
	this.text_6.setTransform(267,170);

	//this.text_7 = new cjs.Text("ID_txt03", "11px Arial", "#4E4C4D");
  	this.text_7 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt03",  width:"80", expand:"down", size:"11"}); 

	this.text_7.setTransform(205,107);

	//this.text_8 = new cjs.Text("ID_txt02", "11px Arial", "#4E4C4D");
  	this.text_8 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt02",  width:"95", expand:"left+right", size:"11"}); 

	this.text_8.setTransform(200,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2}]}).wait(81));

	// arrow
	this.instance_3 = new lib.Arrow_oramge();
	this.instance_3.setTransform(137.3,175.8,0.81,0.899,124.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({alpha:1},5).to({alpha:0},10).to({alpha:1},10).to({alpha:0},10).to({alpha:1},10).wait(32));

	// bg
	this.instance_4 = new lib._3_3_1_1();
	this.instance_4.setTransform(0,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400.2);


(lib.Main = function() {
	this.initialize();

	// slide1
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;