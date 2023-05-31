// Variables
ballX = 200;
ballY = 50;
ballDX = 6;
ballDY = 3;
GRAVITY = 0.1;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background("purple");

// Move the ball
  ballDY += GRAVITY;
  ballY += ballDY;
  ballX += ballDX;

  // Bounce
  if(ballY>290) {
    ballDY *= -1;
  }

  if(ballX>390) {
    ballDX *= -1;
  }

  if(ballX<10) {
    ballDX *= -1;
  }

  // Draw ball
  fill("turquoise");
  circle(ballX, ballY, 55);

}
