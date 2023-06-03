function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  // Current time
  let hr = hour();
  let min = minute();
  let sec = second();
  
  // These angles are based on the actual time
  let hrAngle = map(hr, 0, 24, 0, 360);
  let minAngle = map(min, 0, 60, 0, 360);
  let secAngle = map(sec, 0, 60, 0, 360);
  
  // The clock elements
  drawClock(hrAngle, minAngle, secAngle);
}

function drawClock(hrAngle, minAngle, secAngle) {
  // Each shape represents either seonds, minutes, and hours
  
  // The hour shape
  noStroke();
  fill(255, 0, 0);
  push();
  translate(width / 2, height / 2);
  rotate(hrAngle);
  rect(-50, -150, 100, 300);
  pop();
  
  // The minute shape
  noStroke();
  fill(0, 255, 0);
  push();
  translate(width / 2, height / 2);
  rotate(minAngle);
  triangle(-75, 150, 75, 150, 0, -150);
  pop();
  
  // The second shape
  noStroke();
  fill(0, 0, 255);
  push();
  translate(width / 2, height / 2);
  rotate(secAngle);
  ellipse(0, 0, 200, 200);
  pop();

  // This project is a projection of time that is unconventioal. 
  // It follows the guidelines of being different in that the hands are 
  // not standard lines but rather unique shapes with different colors and sizes.
  // These shapes are each different and provide a special way of portraying time. 
}