var ground;
var path;
var gameState = 0;


function preload(){
backgroundImg = loadImage("ersa1.jpg")
}

function setup() {
  createCanvas(1350,650);
  createSprite(400, 200, 50, 50);
  
  path=createSprite(400,100,500,650); 
  path.addImage(backgroundImg); 
  path.scale = 10;
  //path.velocityX = -5;


}




function draw() {
  background(0);
  
  drawSprites();
  
if(gameState===0){
  fill("white")
  //stroke("white")
  textSize(25);
  text("Welcome to 'Lost in Space'!!!", 500,50)
  fill("blue")
  text("", 50,80)

}


if (keyDown("space")){
  gameState = 1;
}


if (gameState===1){
  path.velocityX = -5;

  if (path.x<0){
    path.x = width/2
  }

}
  
  




}