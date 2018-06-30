var carPic = document.createElement("img");
var otherCarPic = document.createElement("img");
var trackPics = [];

var picsToLoad = 0; // set automatically based on imageList in loadImages()

function countLoadedImagesAndLaunchIfReady() {
	//Jeffery Cen 20510562
	//Assignment Three for GBDA 301
	//Racing game with five ways of wellbeing theme	

	//If no image left to load, start the game
	picsToLoad--;
	if(picsToLoad == 0) {
		imageLoadingDoneSoStartGame();
	}
}

function beginLoadingImage(imgVar, fileName) {
	//Where to load images
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = "images/"+fileName;
}

function loadImageForTrackCode(trackCode, fileName) {
	//Load track images
	trackPics[trackCode] = document.createElement("img");
	beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages() {
	//List of images to load
	var imageList = [
		{varName: carPic, theFile: "player1car.png"},
		{varName: otherCarPic, theFile: "player2car.png"},

		{trackType: TRACK_ROAD, theFile: "track_road.png"},
		{trackType: TRACK_HOUSE, theFile: "DankerHouse.jpg"},
		{trackType: TRACK_GOAL, theFile: "track_goal.png"},
		{trackType: TRACK_TREE, theFile: "track_tree.png"},
		{trackType: TRACK_GIFT, theFile: "Gift.png"},
		{trackType: TRACK_PICNIC, theFile: "Picnic.png"},
		{trackType: TRACK_CHEER, theFile: "DankCheer.jpg"},
		{trackType: TRACK_FOOTBALL, theFile: "Football.png"},
		{trackType: TRACK_RUN, theFile: "Run.png"},
		{trackType: TRACK_TENNIS, theFile: "Tennis.png"},
		{trackType: TRACK_HOCKEY, theFile: "Hockey.png"},
		{trackType: TRACK_GREENTREE, theFile: "Greentree.png"},
		{trackType: TRACK_MAPLETREE, theFile: "Mapletree.png"},
		{trackType: TRACK_STOP, theFile: "Stop.png"},
		{trackType: TRACK_SCHOOL, theFile: "School.png"},
		{trackType: TRACK_PURPLE, theFile: "Purple.png"},
		{trackType: TRACK_YELLOW, theFile: "Yellowflower.png"},
		{trackType: TRACK_ORANGE, theFile: "orangeflower.png"},
		{trackType: TRACK_FB, theFile: "fb2.png"},
		{trackType: TRACK_HAT, theFile: "grad2.png"},
		{trackType: TRACK_OJCAKE, theFile: "ojcake2.png"},
		{trackType: TRACK_PINKCAKE, theFile: "pink2.png"},
		{trackType: TRACK_BLUECAKE, theFile: "bluecake2.png"},
		{trackType: TRACK_STUDY, theFile: "study2.png"},
		{trackType: TRACK_COFFEE, theFile: "coffee2.png"},
		{trackType: TRACK_DINER, theFile: "diner2.png"},
		{trackType: TRACK_TWIT, theFile: "twitter2.png"},
		{trackType: TRACK_TUBE, theFile: "tube2.png"},
		];

	//set value for picsToLoad as # of elements in list above	
	picsToLoad = imageList.length;

	//Load all the images
	for(var i = 0; i < imageList.length; i++) {
		if(imageList[i].varName != undefined) {
			beginLoadingImage(imageList[i].varName, imageList[i].theFile);
		} else {
			loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
		}
	}
}