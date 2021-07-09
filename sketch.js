var player,playerImage;
function preload(){
  playerImage=loadImage("micky.png");
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  player=createSprite(width/2,height/2);
  player.addImage(playerImage);
  player.scale=0.2
}
function draw(){
  background("lightblue");
  if(keyDown("a")){
    player.x=player.x-2
   // player.velocityX=-2
  }
  if(keyDown("s")){
    player.y=player.y+2
   // player.velocityX=-2
  }
  if(keyDown("d")){
    player.x=player.x+2
   // player.velocityX=-2
  }
  if(keyDown("w")){
    player.y=player.y-2
   // player.velocityX=-2
  }
  drawSprites();
}