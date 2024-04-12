function preload() {
	world_start = loadSound("missed.wav");
}

function setup() {
	canvas = createCanvas(650,400);
	video = createCapture(VIDEO);
	video.size(600, 300);
    canvas.parent('canvas');
    video.hide();
	
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded(){
	console.log('Model Loaded!');
}
function draw(){
    image(img, 0, 0, 650, 400);
}