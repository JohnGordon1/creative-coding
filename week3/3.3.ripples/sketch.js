let ripples = [];

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  // Draw ripples
  for (let i = 0; i < ripples.length; i++) {
    let ripple = ripples[i];
    ripple.update();
    ripple.display();
  }
}

function mousePressed() {
  // Create a new ripple object at the mouse position
  let newRipple = new Ripple(mouseX, mouseY);
  ripples.push(newRipple);
}

class Ripple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.opacity = 255;
    this.speed = 2;
  }

  update() {
    // Increase the radius and decrease the opacity over time
    this.radius += this.speed;
    this.opacity -= 2;

    // Remove the ripple object once it becomes invisible
    if (this.opacity <= 0) {
      ripples.splice(ripples.indexOf(this), 1);
    }
  }

  display() {
    // Set the fill and stroke colors with transparency
    fill(0, 100, 200, this.opacity);
    stroke(0, 100, 200, this.opacity);

    // Draw the circle at the ripple's position
    ellipse(this.x, this.y, this.radius);
  }
}

