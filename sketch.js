var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;
var xPosition = 0;
var database;

var form, player, game;

var ships, spaceship,spaceship2,alien, aliens, laser, laser2,ground,text1;
var alien1Image, alien2Image, alien3Image, shipImage, laserImage, background;

function preload(){
  alien1=loadImage("images/alien1.png");
  alien2=loadImage("images/alien2.png");
  alien3=loadImage("images/alien3.png");
  shipImage=loadImage("images/spaceship.png");
  ship2Image=loadImage("images/spaceship2.png");
  laserImage=loadImage("images/laser.png");
  
  background=loadImage("images/background.png");
}



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getGameState();  
  game.start();
  
}


function draw(){
  
  if(playerCount === 2){
    game.updateGameState(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    //camera.position.x = displayWidth/2;
    //camera.position.y = ships.y;
    //distance = distance + Math.round(getFrameRate()/60);
  }

  
  
}

