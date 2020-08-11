var mr, fr

function setup() {
  createCanvas(1200,650);
  mr = createSprite(400, 200, 50, 50);
  mr.shapeColor = "yellow";
  fr = createSprite(400, 200, 50, 50);
  fr.shapeColor = "yellow";
  mr.debug = true;
  fr.debug = true;
}


function draw() {
  background(0); 
  mr.x = mouseX;
  mr.y = mouseY;

 if ((((mr.x - fr.x < mr.width/2 + fr.width/2) 
   && (fr.x-mr.x < fr.width/2 + mr.width/2)
   && (mr.y - fr.y < mr.height/2 + fr.height/2)
   && (fr.y - mr.y < fr.width/2 + mr.width/2)))){
   mr.shapeColor = "pink";
   fr.shapeColor = "pink";
 }
 else {
   mr.shapeColor = "yellow";
   fr.shapeColor = "yellow";
 }
  drawSprites();
}