var fixedrect,movingrect

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(800,200,100,50);
  fixedrect = createSprite(0,200,100,50);

  fixedrect.velocityX = 5;
  movingrect.velocityX = -2;

  movingrect.shapeColor = "green"
  fixedrect.shapeColor = "red"
}

function draw() {
  background(0);
 
  //movingrect.x = World.mouseX;
  //movingrect.y = World.mouseY;

bounceOff();

  drawSprites();
}