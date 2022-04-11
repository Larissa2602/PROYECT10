var mar, marabierto;
var barco, barcomoviéndose;
function preload(){
marabierto=loadImage("sea.png")
barcomoviéndose=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  //Crear sprite del mar
  mar=createSprite(200,200,40,40)
  mar.addImage(marabierto)
  mar.scale=0.25
  //crear sprite del barco
  barco=createSprite(90,230,30,30);
  barco.addAnimation("moviéndose",barcomoviéndose);
  barco.scale=0.2;
  
}

function draw() {
  background("blue");
 drawSprites();
 if (mar.x<0){
  mar.x=mar.width/2
}
}