
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  if(keyIsDown(DOWN_ARROW)){
    background("red");
  }
  if(keyIsDown(UP_ARROW)){
    background("white");
  }
  if(keyIsDown(LEFT_ARROW)){
    background("purple");
  }
  if(keyIsDown(RIGHT_ARROW)){
    background("lightBlue");
  }
  drawSprites();
}




