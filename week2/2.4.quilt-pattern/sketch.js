  // this is a sketch intended 
// to simulate a specific quilt pattern
// --> https://www.internationalquiltmuseum.org/exhibition/amish-quilts 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);



function setup() {
  createCanvas(1200, 1200);
  noLoop();
}

function draw() {
  background(220);

translate(100,100);
rect(0,0,1000,1000);
angleMode(87);

 for (let x = 0; x < 10; x++){
    for (let y = 0; y < 10; y++){ 

      if ((y + x) % 2 == 0){
        push();
        translate(x * 100, y * 100);
        fill("salmon");
        rect(0,0,100,100);

        translate(x * 100, y * 100);
        fill("yellow");
        rect(0,0,100,100);
        pop();

      }else{ 

        push();
        translate(x * 100, y * 100);
        fill("blue"); 
        rect(0,0,100,100);

        translate(x * 100, y * 100);
        fill("brown");
        rect(0,0,100,100);

        pop();

      }
    }
  }
}
  


 
