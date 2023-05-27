function setup() {
  createCanvas(400, 400);
  background(255);
  noLoop();
}

function draw() {
  const squareSize = 20;
  const spacing = 5;
  const rows = 14;
  const cols = 14;
  
  const startX = (width - (cols * squareSize + (cols - 1) * spacing)) / 2;
  const startY = (height - (rows * squareSize + (rows - 1) * spacing)) / 2;
  
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const xPos = startX + (x * (squareSize + spacing));
      const yPos = startY + (y * (squareSize + spacing));
      
      stroke(0);
      strokeWeight(1);
      noFill();
      
      if (x % 2 === 0 && y % 2 === 0) {
        rect(xPos, yPos, squareSize, squareSize);
      } else if (x % 2 === 1 && y % 2 === 1) {
        fill(0);
        rect(xPos, yPos, squareSize, squareSize);
      }
    }
  }
}


