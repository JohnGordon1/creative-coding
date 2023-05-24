function setup() {
  createCanvas(1200, 1200);
  noLoop();
}

function draw() {
  background(220);

  // push the grid out of the corner
  translate(100,100);

  for (let x = 0; x < 8; x += 1) {
    for (let y = 0; y < 8; y += 1){
      push();

      // move the drawing plane 
      // to add a new circle.
      translate(x * 120,y * 120);

      // line thickness
      strokeWeight( random(4,30) );

      // line color
      stroke(random(0,255),124,101);

      // fill color
      fill(251,random(0,255),180);

      // draw the circle.
      ellipse(0,0,100);

     pop();
    }
  }
}