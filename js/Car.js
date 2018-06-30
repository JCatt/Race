const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.06;
const MIN_SPEED_TO_TURN = 0.5;

function carClass() {
	//Jeffery Cen 20510562
	//Assignment Three for GBDA 301
	//Racing game with five ways of wellbeing theme	
	this.x = 75;
	this.y = 75;
	this.ang = 0;
	this.speed = 0;
	this.myCarPic; // which picture to use
	this.name = "Untitled Car";

	//What is the car doing? Forward, back or rotating
	this.keyHeld_Gas = false;
	this.keyHeld_Reverse = false;
	this.keyHeld_TurnLeft = false;
	this.keyHeld_TurnRight = false;

	this.controlKeyUp;
	this.controlKeyRight;
	this.controlKeyDown;
	this.controlKeyLeft;

	//Set arrow key 
	this.setupInput = function(upKey, rightKey, downKey, leftKey) {
		this.controlKeyUp = upKey;
		this.controlKeyRight = rightKey;
		this.controlKeyDown = downKey;
		this.controlKeyLeft = leftKey;
	}

	//Set speed as zero
	this.reset = function(whichImage, carName) {
		this.name = carName;
		this.myCarPic = whichImage;
		this.speed = 0;

		for(var eachRow = 0; eachRow < TRACK_ROWS; eachRow++) {
			for(var eachCol = 0; eachCol < TRACK_COLS; eachCol++) {
				var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
				if(trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
					trackGrid[arrayIndex] = TRACK_ROAD;
					this.ang = -Math.PI / 2;
					this.x = eachCol * TRACK_W + TRACK_W/2;
					this.y = eachRow * TRACK_H + TRACK_H/2;
					return;
				} // end of player start if
			} // end of col for
		} // end of row for
		//NO CAR LOSER
		console.log("NO PLAYER START FOUND!");
	} // end of carReset func

	this.move = function() {
		//Setting the speed for car if forward or backward
		this.speed *= GROUNDSPEED_DECAY_MULT;

		if(this.keyHeld_Gas) {
			this.speed += DRIVE_POWER;
		}
		if(this.keyHeld_Reverse) {
			this.speed -= REVERSE_POWER;
		}
		if(Math.abs(this.speed) > MIN_SPEED_TO_TURN) {
			if(this.keyHeld_TurnLeft) {
				this.ang -= TURN_RATE;
			}
			if(this.keyHeld_TurnRight) {
				this.ang += TURN_RATE;
			}
		}

		this.x += Math.cos(this.ang) * this.speed;
		this.y += Math.sin(this.ang) * this.speed;

		carTrackHandling(this);
	}

	this.draw = function() {
		drawBitmapCenteredWithRotation(this.myCarPic, this.x,this.y, this.ang);
	}
}