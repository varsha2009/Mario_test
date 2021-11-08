function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400)
	video.parent('game_console')
	
    poseNet=ml5.poseNet('video',modalLoaded)
	poseNet.on('pose',getPoses)
}
function modalLoaded(){
	console.log("modal is loaded");
}
function getPoses(results){
	console.log("testing")
	if(results.length > 0){
		console.log(results);       
	}
}

function draw() {
	game()

}






