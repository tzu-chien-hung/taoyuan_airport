var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
window.onload = function(){
    init();
}

function init() {
	canvas = document.getElementById("canvas");
	//
	const context = canvas.getContext("2d");
	context.translate(canvas.width/2, canvas.height/2);
	context.rotate(Math.PI / 2);
	//

	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("36F75FC237AB450B9072A5D3A6C8F2EB");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.trygame();
	stage = new lib.Stage(canvas);
	stage.enableMouseOver();
	exportRoot.on("pressmove", drag);

	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	// AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
function drag(evt) {
	// target will be the container that the event listener was added to
		evt.target.x = evt.stageX;
		evt.target.y = evt.stageY;

	// make sure to redraw the stage to show the change
	stage.update();
	// console.log(evt)
}