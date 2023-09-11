var path,pathImg
var boy,boyImg;
var leftBoundary,rightBoundary;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  createCanvas(400,400);

  path=createSprite(200,200);
  path.addImage(pathImg);
  path.y = path.width /2;
  path.velocityY= -4;
  path.scale=1.2;

  boy= createSprite (400,400,20,50);
  boy.addAnimation("running",boyImg);
  boy.scale=0.5;
 

 leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible=false;

 rightBoundary=createSprite(410,0,100,800);
 rightBoundary.visible=false;
}

function draw() {
  background("blue");
  boy.x = World.mouseX;

  path.velocityY = 4;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  if(path.y > 400 ){
    path.y = height/2;
  }

 drawSprites(); 
}
