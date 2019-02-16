var lawnmover = {
  x: 0,
  y: 0,
  w: 400,
  h: 50,
}

var flower = {
  x: 0,
  y: 0,
  d: 0,
}


function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
  background(202, 40, 55);

}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  strokeWeight(1);
  line(x, height - 10, x + random(8, 23), height - 10 - random(h));
  noStroke();
  x = x + 10;

  //vertical lawn growing
  if (x > width) {
    x = random(10);
    h = h + 3;
  }
  //flower
  if (h > 30) {
    fill(4, 100, 74);
    ellipse(flower.x, flower.y, flower.d);
    flower.x = random(width);
    flower.y = (height - 10 - h);
    flower.d = random(10, 12);
  }
  //lawnmover
  if (h > 45) {
    fill(0, 80, 94);
    stroke(0);
    strokeWeight(0);
    rect(lawnmover.x, lawnmover.y, lawnmover.w, 30);
    lawnmover.y = lawnmover.y + 1
    if (lawnmover.y > height - 12 - h){
       flower.d = 0;
    }
    if (lawnmover.y > height - h) {
      lawnmover.y = 0;
      background(202, 40, 55);
      h = 10
    }
  }
  fill(40, 100, 60);
  rect(0, height - 10, width, 10);
}
