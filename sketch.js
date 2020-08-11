var fixedRect, movingRect;
var left, right;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  right=createSprite(1200,300,30,30);
  left=createSprite(0,300,30,30);
  left.debug=true;
  right.debug=true;
  
  left.velocityX=3;
  right.velocityX=-3; 
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  
  drawSprites();
  bouncing(movingRect,fixedRect);
  bouncing(left, right);
}

function bouncing(superman, batman){

  if (superman.x - batman.x < batman.width/2 + superman.width/2
    && batman.x - superman.x < batman.width/2 + superman.width/2) {
  superman.velocityX = superman.velocityX * (-1);
  batman.velocityX = batman.velocityX * (-1);
}
if (superman.y - batman.y < batman.height/2 + superman.height/2
  && batman.y - superman.y < batman.height/2 + superman.height/2){
  superman.velocityY = superman.velocityY * (-1);
  batman.velocityY = batman.velocityY * (-1);
}
}






























