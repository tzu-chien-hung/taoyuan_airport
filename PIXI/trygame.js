(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"trygame_atlas_1", frames: [[0,355,95,244],[344,0,169,231],[97,355,181,80],[97,437,118,122],[0,0,333,221],[344,233,108,241],[0,223,342,130]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.alien = function() {
	this.initialize(ss["trygame_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.astronaut = function() {
	this.initialize(ss["trygame_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg201 = function() {
	this.initialize(img.bg201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3751,1667);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6500,2889);


(lib.btn = function() {
	this.initialize(ss["trygame_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.planet = function() {
	this.initialize(ss["trygame_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Q = function() {
	this.initialize(ss["trygame_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.rocket = function() {
	this.initialize(ss["trygame_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.topic = function() {
	this.initialize(ss["trygame_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Tween41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Q();
	this.instance.setTransform(-476,-338.4,2.8588,3.0625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-476,-338.4,952,676.8);


(lib.Tween39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.astronaut();
	this.instance.setTransform(77.4,-114.2,0.8929,1,0,0.9766,-179.0237);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.4,-116.7,154.8,233.5);


(lib.Tween38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.astronaut();
	this.instance.setTransform(77.4,-114.2,0.8929,1,0,0.9766,-179.0237);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.4,-116.7,154.8,233.5);


(lib.Tween37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.astronaut();
	this.instance.setTransform(56.45,-125.9,0.8929,1,0,-8.9893,171.0106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.6,-125.9,185.2,251.8);


(lib.Tween36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.astronaut();
	this.instance.setTransform(75.45,-115.5,0.8929,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.4,-115.5,150.9,231);


(lib.Tween35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.astronaut();
	this.instance.setTransform(75.45,-115.5,0.8929,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.4,-115.5,150.9,231);


(lib.Tween34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.astronaut();
	this.instance.setTransform(75.45,-115.5,0.8929,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.4,-115.5,150.9,231);


(lib.Tween33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rocket();
	this.instance.setTransform(-53.45,-120.7,0.9999,0.9999,0.2614);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-120.7,109.1,241.5);


(lib.Tween32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rocket();
	this.instance.setTransform(-53.45,-120.7,0.9999,0.9999,0.2614);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-120.7,109.1,241.5);


(lib.Tween31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rocket();
	this.instance.setTransform(-53.45,-120.75,0.9999,0.9999,0.2614);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-120.7,109.1,241.4);


(lib.Tween30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rocket();
	this.instance.setTransform(16.3,-131.05,0.9999,0.9999,31.2139);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.6,-131,217.3,262);


(lib.Tween29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rocket();
	this.instance.setTransform(102.4,-83.45,1,1,74.9611);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.3,-83.4,260.70000000000005,166.8);


(lib.Tween28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rocket();
	this.instance.setTransform(123.75,-46.15,1,1,93.6851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.7,-61.6,247.5,123.2);


(lib.Tween27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rocket();
	this.instance.setTransform(128.65,-29.75,1,1,101.127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.6,-76.2,257.29999999999995,152.4);


(lib.Tween26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rocket();
	this.instance.setTransform(115.55,-63.95,1,1,85.1744);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.6,-63.9,249.3,127.8);


(lib.Tween25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rocket();
	this.instance.setTransform(107.6,-76.5,1,1,78.7154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.7,-76.5,257.5,153.1);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Q();
	this.instance.setTransform(-432.8,-287.25,2.5994,2.5994);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-432.8,-287.2,865.6,574.4);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Q();
	this.instance.setTransform(-432.8,-287.2,2.5994,2.5994);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-432.8,-287.2,865.6,574.5);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.alien();
	this.instance.setTransform(-47.5,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-122,95,244);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.alien();
	this.instance.setTransform(-47.5,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-122,95,244);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.planet();
	this.instance.setTransform(13.45,-83.8,1,1,53.157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.2,-83.8,168.4,167.6);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.planet();
	this.instance.setTransform(-17.4,-83.05,1,1,32.1933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.4,-83,164.9,166.1);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.planet();
	this.instance.setTransform(-59,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-61,118,122);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.astronaut();
	this.instance.setTransform(-100.2,-102.15,1,1,-8.2591);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.2,-126.4,200.5,252.9);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.astronaut();
	this.instance.setTransform(-52.95,-132.95,1,1,14.4733);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.7,-132.9,221.4,265.9);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.astronaut();
	this.instance.setTransform(-84.5,-115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-115.5,169,231);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rocket();
	this.instance.setTransform(-54,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-120.5,108,241);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rocket();
	this.instance.setTransform(-54,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-120.5,108,241);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rocket();
	this.instance.setTransform(-54,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-120.5,108,241);


(lib.QA22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("水星", "50px 'Hanyi Senty Chalk Original'", "#FFFFFF");
	this.text.lineHeight = 59;
	this.text.lineWidth = 108;
	this.text.parent = this;
	this.text.setTransform(-47.95,-39.9);

	this.instance = new lib.topic();
	this.instance.setTransform(-199,-75.65,1.1637,1.1637);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199,-75.6,398,151.3);


(lib.QA21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("金星", "50px 'Hanyi Senty Chalk Original'", "#FFFFFF");
	this.text.lineHeight = 59;
	this.text.lineWidth = 108;
	this.text.parent = this;
	this.text.setTransform(-61.8,-43.85);

	this.instance = new lib.topic();
	this.instance.setTransform(-199,-75.65,1.1637,1.1637);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199,-75.6,398,151.3);


(lib.QA12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("木星", "60px 'Hanyi Senty Chalk Original'", "#FFFFFF");
	this.text.lineHeight = 71;
	this.text.lineWidth = 132;
	this.text.parent = this;
	this.text.setTransform(-64.9,-46.25);

	this.instance = new lib.topic();
	this.instance.setTransform(-193,-73,1.1285,1.1285);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193,-73,386,146.7);


(lib.QA11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("土星", "60px 'Hanyi Senty Chalk Original'", "#FFFFFF");
	this.text.lineHeight = 71;
	this.text.lineWidth = 132;
	this.text.parent = this;
	this.text.setTransform(-61.95,-46.25);

	this.instance = new lib.topic();
	this.instance.setTransform(-193,-73,1.1285,1.1285);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193,-73,386,146.7);


(lib.next = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.btn();
	this.instance.setTransform(-212,580,2.3443,2.3443);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212,580,424.3,187.60000000000002);


(lib.Tween43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("太陽系中哪顆行星最熱？", "60px 'Hanyi Senty Chalk Original'", "#FFFFFF");
	this.text.lineHeight = 71;
	this.text.lineWidth = 712;
	this.text.parent = this;
	this.text.setTransform(-350.85,-154.1);

	this.instance = new lib.Tween41("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-476,-338.4,952,676.8);


(lib.Tween42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("太陽系中哪顆行星最熱？", "60px 'Hanyi Senty Chalk Original'", "#FFFFFF");
	this.text.lineHeight = 71;
	this.text.lineWidth = 712;
	this.text.parent = this;
	this.text.setTransform(-350.85,-154.1);

	this.instance = new lib.Tween41("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-476,-338.4,952,676.8);


(lib.rocket2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween25("synched",0);

	this.instance_1 = new lib.Tween26("synched",0);
	this.instance_1.setTransform(233.55,-71);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween27("synched",0);
	this.instance_2.setTransform(397.15,-80);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween28("synched",0);
	this.instance_3.setTransform(531.4,-41.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween29("synched",0);
	this.instance_4.setTransform(688.55,-42.2);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween30("synched",0);
	this.instance_5.setTransform(801.8,-85.85);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween31("synched",0);
	this.instance_6.setTransform(794.55,-44.25);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween32("synched",0);
	this.instance_7.setTransform(794.55,103.7);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween33("synched",0);
	this.instance_8.setTransform(794.55,193.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_5}]},15).to({state:[{t:this.instance_6}]},15).to({state:[{t:this.instance_7}]},10).to({state:[{t:this.instance_8}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:233.55,y:-71},14,cjs.Ease.get(1)).wait(106));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14,cjs.Ease.get(1)).to({_off:true,x:397.15,y:-80},15,cjs.Ease.get(-0.7)).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},15,cjs.Ease.get(-0.7)).to({_off:true,x:531.4,y:-41.5},15,cjs.Ease.get(-0.8)).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},15,cjs.Ease.get(-0.8)).to({_off:true,x:688.55,y:-42.2},15).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},15).to({_off:true,x:801.8,y:-85.85},15).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},15).to({_off:true,x:794.55,y:-44.25},15,cjs.Ease.get(-0.8)).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},15,cjs.Ease.get(-0.8)).to({_off:true,y:103.7},10,cjs.Ease.get(-1)).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(89).to({_off:false},10,cjs.Ease.get(-1)).to({_off:true,y:193.7},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.7,-216.9,1053.4,531.4);


(lib.rocket_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(0,-344.5);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(0,-184.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(0,1.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:-184.5},19).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,y:1.5},25,cjs.Ease.get(-0.5)).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},25,cjs.Ease.get(-0.5)).wait(1).to({y:1.5208},0).wait(1).to({y:1.5833},0).wait(1).to({y:1.6875},0).wait(1).to({y:1.8333},0).wait(1).to({y:2.0208},0).wait(1).to({y:2.25},0).wait(1).to({y:2.5208},0).wait(1).to({y:2.8333},0).wait(1).to({y:3.1875},0).wait(1).to({y:3.5833},0).wait(1).to({y:4.0208},0).wait(1).to({y:4.5},0).wait(1).to({y:5.0208},0).wait(1).to({y:5.5833},0).wait(1).to({y:6.1875},0).wait(1).to({y:6.8333},0).wait(1).to({y:7.5208},0).wait(1).to({y:8.25},0).wait(1).to({y:9.0208},0).wait(1).to({y:9.8333},0).wait(1).to({y:10.6875},0).wait(1).to({y:11.5833},0).wait(1).to({y:12.5208},0).wait(1).to({y:13.5},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-465,108,599);


(lib.QA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween19("synched",0);
	this.instance.setTransform(-0.2,720.2);

	this.instance_1 = new lib.Tween20("synched",0);
	this.instance_1.setTransform(0,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:0,y:30.4},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-433,-256.8,865.8,1264.3);


(lib.Q2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween42("synched",0);
	this.instance.setTransform(-2,679.7);

	this.instance_1 = new lib.Tween43("synched",0);
	this.instance_1.setTransform(12,4.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:12,y:4.05},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-478,-334.3,966,1352.4);


(lib.planet_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween9("synched",0);

	this.instance_1 = new lib.Tween10("synched",0);
	this.instance_1.setTransform(64.7,-59.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween11("synched",0);
	this.instance_2.setTransform(163.5,-90.25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:64.7,y:-59.6},19,cjs.Ease.get(1)).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19,cjs.Ease.get(1)).to({_off:true,x:163.5,y:-90.25},25,cjs.Ease.get(-1)).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},25,cjs.Ease.get(-1)).to({x:282.9,y:-96.8},24).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-180.6,426.1,241.6);


(lib.explain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("木星是太陽系中最大的行\n星，體積最大，自轉最快，\n是由矽酸鹽岩石和鐵組成，\n質量是地球質量的10倍。", "50px 'Hanyi Senty Chalk Original'", "#FFFFFF");
	this.text.lineHeight = 59;
	this.text.lineWidth = 650;
	this.text.parent = this;
	this.text.setTransform(-307.85,475.85);

	this.instance = new lib.QA("synched",9);
	this.instance.setTransform(0,639.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-432.8,0,865.6,956.9);


(lib.astronaut2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween34("synched",0);

	this.instance_1 = new lib.Tween35("synched",0);
	this.instance_1.setTransform(-131.55,-0.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween36("synched",0);
	this.instance_2.setTransform(-211.55,-0.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween37("synched",0);
	this.instance_3.setTransform(-247.25,-13.9);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween38("synched",0);
	this.instance_4.setTransform(-311.35,1.65);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween39("synched",0);
	this.instance_5.setTransform(-465.3,-4.35,1,1,0,0,0,12,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},25).to({state:[{t:this.instance_3}]},30).to({state:[{t:this.instance_4}]},25).to({state:[{t:this.instance_5}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-131.55,y:-0.5},19).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({_off:true,x:-211.55},25).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},25).to({_off:true,x:-247.25,y:-13.9},30).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},30).to({_off:true,x:-311.35,y:1.65},25).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},25).to({_off:true,regX:12,x:-465.3,y:-4.35},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-554.7,-139.8,630.2,266.70000000000005);


(lib.astronaut_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween5("synched",0);
	this.instance._off = true;

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.setTransform(212.5,-36.45);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.setTransform(314.7,-94.35);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true,x:212.5,y:-36.45},15,cjs.Ease.get(0.3)).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},15,cjs.Ease.get(0.3)).to({_off:true,x:314.7,y:-94.35},25,cjs.Ease.get(-0.1)).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},25,cjs.Ease.get(-0.1)).to({x:402.7,y:-146.05},19).to({_off:true},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-272.5,587.5,388);


(lib.alien_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween13("synched",0);
	this.instance._off = true;

	this.instance_1 = new lib.Tween15("synched",0);
	this.instance_1.setTransform(-172.5,10);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({_off:true,x:-172.5,y:10},30).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},30).to({x:-227.2},19).to({_off:true},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.7,-122,322.2,254);


(lib.scene2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_124 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(124).call(this.frame_124).wait(1));

	// Layer_2
	this.instance = new lib.QA22();
	this.instance.setTransform(147.05,809.75);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.QA21();
	this.instance_1.setTransform(-222.95,809.75);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.Q2("synched",0);
	this.instance_2.setTransform(-43.95,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{startPosition:0}},{t:this.instance_1,p:{x:-222.95,y:809.75}},{t:this.instance,p:{x:147.05,y:809.75}}]},120).to({state:[{t:this.instance_2,p:{startPosition:4}},{t:this.instance_1,p:{x:-216.95,y:102}},{t:this.instance,p:{x:153.05,y:102}}]},4).wait(1));

	// Layer_1
	this.instance_3 = new lib.astronaut2("synched",0);
	this.instance_3.setTransform(546.15,226.9);

	this.instance_4 = new lib.rocket2("synched",0);
	this.instance_4.setTransform(-542.1,-10.85);

	this.instance_5 = new lib.bg201();
	this.instance_5.setTransform(-804.3,-367.6,0.4289,0.4289);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhQOA8jMAAAh5FMCgdAAAMAAAB5Fg");
	this.shape.setTransform(-41.725,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_5},{t:this.instance_4,p:{startPosition:0}},{t:this.instance_3,p:{startPosition:0}}]}).to({state:[{t:this.shape},{t:this.instance_5},{t:this.instance_4,p:{startPosition:119}},{t:this.instance_3,p:{startPosition:119}}]},119).to({state:[]},1).wait(5));

	// Layer_3
	this.instance_6 = new lib.bg201();
	this.instance_6.setTransform(-804,-368,0.4289,0.4289);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120).to({_off:false},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-804.3,-387.4,1609,1407.6);


(lib.scene1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_75 = function() {
		this.stop();
		this.explain.visible = false;
		this.nextBtn.visible=false;
		var s = this;
		var movie1 = s.parent;
		this.nextBtn.addEventListener("mousedown",function(){
			movie1.gotoAndPlay("movie2");
		});
		var s =this;
		var movie1 = s.parent;
		this.jupiter.addEventListener("mousedown",function(){
			movie1.gotoAndPlay("movie2");
		});
		var s = this;
		this.saturn.addEventListener("mousedown",function(){
			s.explain.visible = true;
			s.nextBtn.visible = true;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(75).call(this.frame_75).wait(1));

	// Layer_13
	this.nextBtn = new lib.next();
	this.nextBtn.name = "nextBtn";
	this.nextBtn.setTransform(4,-552.2);
	new cjs.ButtonHelper(this.nextBtn, 0, 1, 2, false, new lib.next(), 3);

	this.explain = new lib.explain("synched",0);
	this.explain.name = "explain";
	this.explain.setTransform(4,-670.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.explain},{t:this.nextBtn}]},75).wait(1));

	// Layer_12
	this.jupiter = new lib.QA12();
	this.jupiter.name = "jupiter";
	this.jupiter.setTransform(184.95,84.35);
	this.jupiter._off = true;
	new cjs.ButtonHelper(this.jupiter, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.jupiter).wait(75).to({_off:false},0).wait(1));

	// Layer_11
	this.saturn = new lib.QA11();
	this.saturn.name = "saturn";
	this.saturn.setTransform(-167.9,88);
	this.saturn._off = true;
	new cjs.ButtonHelper(this.saturn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.saturn).wait(75).to({_off:false},0).wait(1));

	// Layer_6
	this.instance = new lib.QA("synched",0);
	this.instance.setTransform(3.8,-32.75);

	this.text = new cjs.Text("八大行星中體積最大的\n行星是哪顆？", "60px 'Hanyi Senty Chalk Original'", "#FFFFFF");
	this.text.lineHeight = 71;
	this.text.lineWidth = 682;
	this.text.parent = this;
	this.text.setTransform(-331.85,-175.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{startPosition:0}}]},66).to({state:[{t:this.instance,p:{startPosition:9}},{t:this.text}]},9).wait(1));

	// Layer_5
	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(-807,-363,0.2482,0.2482);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).wait(7));

	// Layer_1
	this.instance_2 = new lib.planet_1("synched",0);
	this.instance_2.setTransform(-417.5,-133.3);

	this.instance_3 = new lib.alien_1("synched",0);
	this.instance_3.setTransform(552,179.7);

	this.instance_4 = new lib.astronaut_1("synched",0);
	this.instance_4.setTransform(-535,183.2);

	this.instance_5 = new lib.rocket_1("synched",0);
	this.instance_5.setTransform(247.5,153.2);

	this.instance_6 = new lib.bg();
	this.instance_6.setTransform(-806.5,-363.3,0.2482,0.2482);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhQOA8jMAAAh5FMCgdAAAMAAAB5Fg");
	this.shape.setTransform(2.325,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).to({state:[]},69).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-807,-387.4,1613.5,1362.1);


// stage content:
(lib.trygame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// one
	this.movie1 = new lib.scene1();
	this.movie1.name = "movie1";
	this.movie1.setTransform(509.5,382.3);

	this.movie2 = new lib.scene2();
	this.movie2.name = "movie2";
	this.movie2.setTransform(553.3,386.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movie1}]}).to({state:[{t:this.movie2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(215,378.9,1142.7,395.20000000000005);
// library properties:
lib.properties = {
	id: '36F75FC237AB450B9072A5D3A6C8F2EB',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/bg201.png?1655032516098", id:"bg201"},
		{src:"images/bg.jpg?1655032516098", id:"bg"},
		{src:"images/trygame_atlas_1.png?1655032515992", id:"trygame_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['36F75FC237AB450B9072A5D3A6C8F2EB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;