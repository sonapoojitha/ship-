var ship,ship_running,edges;
var waterImage;
var water;
function preload(){



waterImage=loadImage("sea.png")
ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(1350,540);
  
    edges = createEdgeSprites();
  water=createSprite(10,180,50,50)
  water.addImage("water",waterImage)
water.velocityX=-4
ship=createSprite(220,210,50,50)
ship.addAnimation("ship",ship_running)
ship.scale=0.4
}

function draw() {
  background("white")
if(water.x<0){
  water.x=water.width/2

}

 drawSprites();
}