var canvas, canvasContext;

var blueCar = new carClass();
var greenCar = new carClass();

var music;

window.onload = function() {
	//Jeffery Cen 20510562
	//Assignment Three for GBDA 301
	//Racing game with five ways of wellbeing theme

	//Create the canvas	
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	//Loading screen if images does not load
	colorRect(0,0, canvas.width,canvas.height, 'green');
	colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');

	loadImages();

	music = new Audio('16race.wav');
	music.play();
}

function imageLoadingDoneSoStartGame() {
	//When image loaded, start the game at 30 frames a second
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	setupInput();

	//Load first level in level list
	loadLevel(levelList[levelNow]);
}

function nextLevel() {
	//Function to load next level
	levelNow++;
	if(levelNow >= levelList.length) {
		levelNow = 0;
	}
	loadLevel(levelList[levelNow]);
}

function loadLevel(whichLevel) {
	//Load level, reset cars
	trackGrid = whichLevel.slice();
	greenCar.reset(otherCarPic, "Green Machine");
	blueCar.reset(carPic, "Blue Storm");
}

function updateAll() {
	//Update each frame
	moveAll();
	drawAll();
}

function moveAll() {
	//Move the car with WASD and arrow keys
	blueCar.move();
	greenCar.move();
}

function drawAll() {
	//Draw map and cars
	drawTracks();
	blueCar.draw();
	greenCar.draw();
} 