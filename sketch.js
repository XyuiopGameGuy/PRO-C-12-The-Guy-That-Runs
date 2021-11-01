var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg= loadImage ("path.png");
  boyImg= loadAnimation("Runner-1.png", "Runner-2.png");
 
}

function setup(){
  background("black");
  createCanvas(400,400);
  path= createSprite(200, 200, 400, 400);
  path.addImage(pathImg); 
  path.scale=1;

  boy= createSprite(200, 350, 74, 20);
  boy.addAnimation("correndo", boyImg);
  boy.scale=0.1;
  
leftBoundary=createSprite(400,400,100,800);
leftBoundary.visible=false;
boy.bounceOff(leftBoundary);

rightBoundary=createSprite(0,0,100,800);
rightBoundary.visible=false;
boy.bounceOff(rightBoundary);

}

function draw() {
  background(0);
  path.velocityY = 10;
  boy.x = World.mouseX;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  
  if(path.y > 400 ){
    path.y = height/16;
  }
  
  drawSprites();
}
