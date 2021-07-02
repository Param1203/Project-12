var garden,rabbit;
var gardenImg,rabbitImg;
var apples, applesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createApples();
  drawSprites();
}

function createApples()
{
  if(frameCount % 60 === 0){
    apples = createSprite(random(50,350),40,10,10);
    apples.addImage(applesImg);
    apples.scale = 0.1;
    apples.velocityY = 5;
  }

}