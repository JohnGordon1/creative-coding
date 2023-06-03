let player;
let objects = [];
let score = 0;

function setup() {
  createCanvas(800, 800);
  
  // This is the first player that has been created 
  player = new Player(width / 2, height / 2);
  
  // These are the thing sdisplayed within the game
  for (let i = 0; i < 10; i++) {
    objects.push(new GameObject());
  }
}

function draw() {
  background(220);
  
  // This is the player 
  player.update();
  player.display();
  
  // Display of the game pieces
  for (let i = 0; i < objects.length; i++) {
    objects[i].update();
    objects[i].display();
    
    
    if (player.intersects(objects[i])) {
      score++;
      objects.splice(i, 1); 
      objects.push(new GameObject()); 
    }
  }
  
  // This is the scoreboard 
  textSize(24);
  fill(0);
  text("Score: " + score, 20, 40);
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.speed = 5;
  }
  
  update() {
    // The player has to get the squares
    let dx = mouseX - this.x;
    let dy = mouseY - this.y;
    let distance = dist(mouseX, mouseY, this.x, this.y);
    if (distance > 0) {
      let vx = (dx / distance) * this.speed;
      let vy = (dy / distance) * this.speed;
      this.x += vx;
      this.y += vy;
    }
  }
  
  display() {
    // This is the "player"
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size);
  }
  
  intersects(object) {
    
    let distance = dist(this.x, this.y, object.x, object.y);
    return distance < this.size / 2 + object.size / 2;
  }
}

class GameObject {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = 20;
    this.speed = random(1, 3);
  }
  
  update() {
    // The player only follows the mouse
    let vx = random(-this.speed, this.speed);
    let vy = random(-this.speed, this.speed);
    this.x += vx;
    this.y += vy;
  }
  
  display() {
    // These are the objects the player is trying to reach
    // in order to increase its score. 
    fill(0, 0, 255);
    rect(this.x, this.y, this.size, this.size);

    //I couldn't figure out how to get the mouse to be 
    // a picture instead of a circle. 
  }
}


