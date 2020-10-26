function setup() {
  createCanvas(800,400);
 
  Rect2 =  createSprite(100, 200, 50, 50);
  Rect1 =  createSprite(700, 200, 50, 50);
Rect1.velocityX=-4
Rect2.velocityX=4
Rect1.shapeColor="red"
Rect2.shapeColor="green"
Rect1.debug=true
Rect2.debug=true
}

function draw() {
  if (Rect1.x-Rect2.x<=Rect1.width/2+Rect2.width/2&&Rect2.x-Rect1.x<=Rect1.width/2+Rect2.width/2){
      Rect1.velocityX*=-1
      Rect2.velocityX*=-1

    }
  background(255,255,255);  
  drawSprites();
}