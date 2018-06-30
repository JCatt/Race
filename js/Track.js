
const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;	


//Draw all the levels
var theGive =   [1, 4, 4, 4, 4, 4, 18, 17, 16, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				 1, 12, 12, 1, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 1, 1, 1, 1,
				 1, 12, 12, 0, 0, 0, 0, 12, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1, 1, 1,
				 1, 16, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 12, 0, 0, 4, 0, 1, 1,
				 1, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 1,
				 1, 16, 0, 0, 4, 12, 12, 12, 12, 13, 13, 12, 13, 12, 4, 0, 0, 0, 0, 1,
				 1, 5, 2, 2, 5, 1, 0, 0, 0, 4, 0, 0, 0, 0, 4, 4, 4, 0, 0, 1,
				 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 4, 1,
				 1, 6, 3, 3, 6, 1, 0, 0, 4, 18, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1,
				 1, 21, 0, 0, 23, 1, 1, 0, 0, 0, 0, 18, 0, 4, 0, 0, 4, 0, 4, 1,
				 1, 22, 0, 0, 22, 1, 1, 0, 4, 0, 1, 0, 0, 4, 0, 0, 0, 0, 0, 1,
				 1, 1, 0, 0, 0, 4, 0, 0, 1, 0, 4, 0, 0, 4, 0, 4, 4, 0, 1, 1,
				 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
				 1, 1, 1, 1, 4, 1, 4, 1, 1, 1, 0, 0, 4, 0, 4, 0, 1, 1, 1, 1,
				 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var theActive =  [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
				 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
				 7, 0, 12, 1, 1, 1, 1, 1, 4, 0, 0, 4, 1, 1, 1, 1, 1, 12, 0, 7,
				 7, 0, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 0, 7,
				 7, 0, 1, 4, 4, 8, 0, 9, 0, 10, 0, 11, 0, 10, 0, 4, 4, 1, 0, 7,
				 7, 0, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 0, 7,
				 7, 0, 1, 4, 4, 0, 12, 0, 12, 0, 12, 0, 12, 0, 12, 4, 4, 1, 0, 7,
				 7, 2, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 2, 7,
				 7, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 7,
				 7, 0, 0, 0, 1, 0, 1, 4, 4, 4, 4, 4, 4, 1, 0, 1, 0, 0, 0, 7,
				 7, 0, 16, 0, 17, 0, 1, 4, 12, 3, 3, 12, 4, 1, 0, 12, 0, 18, 0, 7,
				 7, 0, 1, 0, 0, 0, 1, 4, 1, 0, 0, 1, 4, 1, 0, 0, 0, 1, 0, 7,
				 7, 0, 1, 1, 1, 1, 1, 1, 12, 0, 0, 12, 1, 1, 1, 1, 1, 1, 0, 7,
				 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
				 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7];

var theLearn =  [4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
				 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 1, 1,
				 4, 1, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 1,
				 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				 1, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 12, 12, 13, 0, 0, 1,
				 1, 0, 0, 1, 1, 0, 0, 1, 4, 4, 1, 1, 0, 0, 0, 0, 13, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 13, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 24, 0, 0, 12, 12, 0, 0, 12, 0, 0, 13, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 12, 0, 0, 1, 0, 0, 13, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 24, 0, 0, 0, 24, 0, 0, 1, 0, 0, 13, 0, 0, 1,
				 1, 2, 2, 1, 0, 0, 12, 12, 0, 0, 0, 0, 0, 1, 0, 0, 24, 0, 0, 1,
				 1, 1, 1, 1, 0, 0, 12, 12, 0, 0, 24, 0, 0, 1, 0, 0, 0, 0, 0, 1,
				 20, 3, 0, 0, 0, 0, 16, 4, 17, 0, 0, 0, 1, 1, 0, 0, 24, 0, 0, 1,
				 20, 3, 0, 0, 0, 0, 18, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
				 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 4];

var theNotice =  [4, 4, 4, 1, 1, 1, 1, 1, 14, 12, 12, 12, 4, 4, 4, 16, 16, 16, 17, 4,
				 4, 4, 1, 0, 0, 0, 0, 0, 0, 4, 4, 13, 13, 0, 0, 0, 0, 0, 17, 17,
				 4, 1, 0, 0, 0, 0, 0, 0, 0, 4, 4, 13, 13, 0, 0, 0, 0, 0, 0, 18,
				 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 12, 12, 0, 0, 16, 18, 0, 0, 0, 18,
				 1, 0, 0, 0, 1, 1, 1, 4, 0, 0, 4, 17, 0, 0, 18, 16, 17, 0, 0, 16,
				 1, 0, 0, 1, 1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 12, 12, 17, 0, 0, 18,
				 1, 0, 0, 1, 0, 0, 0, 0, 16, 0, 0, 0, 0, 4, 4, 4, 17, 0, 0, 18,
				 1, 0, 0, 1, 0, 12, 0, 0, 0, 12, 12, 12, 12, 12, 0, 0, 12, 0, 0, 12,
				 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 12,
				 1, 0, 0, 1, 0, 0, 13, 0, 0, 0, 4, 0, 0, 0, 0, 0, 12, 0, 0, 4,
				 1, 2, 2, 1, 0, 0, 13, 13, 0, 0, 0, 0, 0, 17, 0, 0, 16, 0, 0, 16,
				 13, 13, 13, 13, 0, 0, 13, 12, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 16,
				 13, 3,  0,  0,  0, 0, 13, 16, 4,  18, 4, 4, 18, 18, 0, 0, 0, 0, 0, 18,
				 13, 3, 0, 0, 0, 0, 13, 4, 16, 12, 12, 12, 12, 12, 12, 4, 4, 4, 12, 12,
				 13, 13, 13, 13, 13, 13, 13, 4, 4, 12, 12, 12, 12, 4, 17, 4, 18, 12, 12, 4];

var theConnect = [ 6, 16, 19, 19, 4, 4, 12, 4, 4, 4, 12, 12, 13, 4, 4, 1, 1, 1, 1, 1,
				   6, 16, 0, 0, 0, 0, 0, 0, 1, 1, 12, 13, 12, 4, 4, 14, 17, 14, 18, 1,
				   1, 4, 0, 0, 0, 0, 0, 0, 1, 1, 13, 12, 18, 0, 0, 0, 0, 0, 16, 1, 
				   1, 4, 0, 0, 14,  0, 0, 0, 4, 1, 12, 13, 17, 0, 0, 0, 0, 0, 17, 1, 
				   1, 13, 0, 0, 1,  0, 0, 0, 4, 1, 12, 13, 16, 0, 1, 0, 14, 0, 17, 1,
				   1, 12, 0, 0, 13, 0, 27, 0, 12, 15, 15, 4, 4, 0, 1, 0, 0, 0, 18, 1,
				   1, 13, 0, 0, 12, 0, 0, 0, 12, 26, 25, 4, 4, 0, 1, 0, 0, 0, 16, 1,
				   1, 13, 0, 0, 1,  0, 0, 0, 17, 26,25 , 6, 16, 0, 1, 0, 0, 0, 18, 1,
				   1, 4,  0, 0, 1,  27, 0, 27, 18, 0, 3, 0, 4, 0, 1, 27, 0, 28, 18, 1, 
				   1, 4,  0, 0, 4,  0, 0, 0, 16, 0, 27, 0, 4, 0, 1, 0, 0, 0, 18, 1, 
				   1, 18,  0, 0, 4,  0, 0, 0, 4, 0, 0, 0, 4, 0, 1, 0, 0, 0, 17, 1,
				   1, 4,  0, 0, 1,  0, 19, 0, 14, 0, 0, 0, 14, 0, 1, 0, 19, 0, 17, 1,
				   1, 16, 0, 0, 16,  0, 0, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 3, 16, 1,
				   1, 17, 0, 0, 1,  0, 0, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 16, 1, 
				   1, 1, 2, 5, 15,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 5, 2, 17, 18, 
				   ];

//list of levels to load in order
var levelList = [theGive, theActive, theLearn, theNotice, theConnect];

var levelNow = 0;
var trackGrid = [];

//Set each image as a number to be draw in array above

const TRACK_ROAD = 0;
const TRACK_HOUSE = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_GIFT = 5;
const TRACK_PICNIC = 6;
const TRACK_CHEER = 7;
const TRACK_FOOTBALL = 8;
const TRACK_TENNIS = 9;
const TRACK_RUN = 10;
const TRACK_HOCKEY = 11;
const TRACK_GREENTREE = 12;
const TRACK_MAPLETREE = 13;
const TRACK_STOP = 14;
const TRACK_SCHOOL = 15;
const TRACK_PURPLE = 16;
const TRACK_ORANGE = 17;
const TRACK_YELLOW = 18;
const TRACK_FB = 19;
const TRACK_HAT = 20;
const TRACK_OJCAKE = 21;
const TRACK_BLUECAKE = 22;
const TRACK_PINKCAKE = 23;
const TRACK_STUDY = 24;
const TRACK_COFFEE = 25;
const TRACK_DINER = 26;
const TRACK_TWIT = 27;
const TRACK_TUBE = 28;



function returnTileTypeAtColRow(col, row) {
	//Locate car, is it on the road or a wall
	if(col >= 0 && col < TRACK_COLS &&
		row >= 0 && row < TRACK_ROWS) {
		 var trackIndexUnderCoord = rowColToArrayIndex(col, row);
		 return trackGrid[trackIndexUnderCoord];
	} else {
		return TRACK_WALL;
	}
}

function carTrackHandling(whichCar) {
	//Check if car is hitting a wall or nah
	var carTrackCol = Math.floor(whichCar.x / TRACK_W);
	var carTrackRow = Math.floor(whichCar.y / TRACK_H);
	var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

	if(carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
		carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {
		var tileHere = returnTileTypeAtColRow( carTrackCol,carTrackRow );

		if(tileHere == TRACK_GOAL) {
			console.log(whichCar.name + " WINS!");
			nextLevel();
		} else if(tileHere != TRACK_ROAD) {
			//Bounce the car from wall
			whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
			whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;

			whichCar.speed *= -0.5;
		} // end of track found
	} // end of valid col and row
} // end of carTrackHandling func

function rowColToArrayIndex(col, row) {
	return col + TRACK_COLS * row;
}

function drawTracks() {
	//function to draw the track with the grid above

	var arrayIndex = 0;
	var drawTileX = 0;
	var drawTileY = 0;
	for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {

			var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
			var tileKindHere = trackGrid[arrayIndex];
			var useImg = trackPics[tileKindHere];

			canvasContext.drawImage(useImg,drawTileX,drawTileY);
			drawTileX += TRACK_W;
			arrayIndex++;
		} // end of for each col
		drawTileY += TRACK_H;
		drawTileX = 0;
	} // end of for each row

} // end of drawTracks func