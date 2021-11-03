var box;

function setup() {
  createCanvas(600, 600);
  box= createSprite(200,200,70,90)
}

function draw() {
  background(220);

  if(keyIsDown(RIGHT_ARROW)){
    box.x=box.x+5
  }

  if(keyDown("left")){
    box.x=box.x-5
  }
  drawSprites()
}