
let img;
let sampleX = 170;
let sampleY = 170;

function preload(){
  img = loadImage('https://johngordon1.github.io/creative-coding/week2/pixels/flower_image.jpg');
}

function setup() {
  createCanvas(900, 900);
  img.loadPixels();
}

function draw() {
  background(220);
  noStroke();
  translate(1, 1);
  //image(img, 0, 0);

  for (let x = 0; x <= img.width; x += sampleX){
  for (let y = 0; y <= img.height; y += sampleY){
    var index = (x + y * img.width) * 4;
    var r = img.pixels[index + 0]; 
    var g = img.pixels[index + 1]; 
    var b = img.pixels[index + 2]; 
  
    fill(r,g,b);
    circle(x,y,sampleX,sampleY);

  }
 }


}