// variables for images
var stoneImg, sky, zemoImg , zeminoImg , mountain, heartImg, coinImg, cloud, logo , track  ;
var bgImg;
var database;
var player;
var form;
var gameState , playerCount;
var zemo , zemino;
var characters = [];
var allPlayers;
var heart , coin , obstacle1Image , obstacle2Image;
var obstacle;

function preload()
{
//loading images
   obstacle1Image= loadImage("Images/Stone.png");
   sky= loadImage("Images/Sky.png");
   zemoImg = loadImage("Images/Zemo.png");
   zeminoImg = loadImage("Images/Zemino.png");
   mountain= loadImage("Images/Mountain.png");
   heartImg= loadImage("Images/Heart.png");
   coinImg= loadImage("Images/Coin.png");
   cloud= loadImage("Images/Cloud.png");
   logo= loadImage("Images/logo.png");
   bgImg= loadImage("Images/BrickBackground.png");
   track= loadImage("Images/Track.png");
   obstacle2Image = loadImage("Images/fence_brown.png");


   

}


function setup()
{
     createCanvas(windowWidth, windowHeight);

     database = firebase.database();
     game= new Game();
     game.getState();
     game.start();

     
     

}

function draw()
{
   background(bgImg);

   if(playerCount === 2)
   {
      game.update(1);
   }

   if(gameState ===1)
   {
      game.play();
     
   }
   
   

  
}   

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}

