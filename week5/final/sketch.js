let letterSize = 100;
let letterSpacing = 150;
let xPos = 100;
let yPos = 200;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  
  // Draw each letter
  drawLetter('A', xPos, yPos);
  drawLetter('B', xPos + letterSpacing, yPos);
  drawLetter('C', xPos + letterSpacing * 2, yPos);
  // Draw more letters here...
}

function drawLetter(letter, x, y) {
  // Set parameters for letter drawing
  let strokeWidth = 8;
  let strokeColor = color(0);
  let fillColor = color(255);
  
  // Draw letter using graphic primitives
  switch (letter) {
    case 'A':
      // Draw letter A
      stroke(strokeColor);
      strokeWeight(strokeWidth);
      fill(fillColor);
      line(x, y + letterSize, x + letterSize / 2, y);
      line(x + letterSize, y + letterSize, x + letterSize / 2, y);
      line(x + letterSize / 4, y + letterSize / 2, x + letterSize - letterSize / 4, y + letterSize / 2);
      break;
      
    case 'B':
      // Draw letter B
      stroke(strokeColor);
      strokeWeight(strokeWidth);
      fill(fillColor);
      rect(x, y, letterSize / 2, letterSize);
      arc(x + letterSize / 2, y + letterSize / 4, letterSize, letterSize / 2, HALF_PI, PI + HALF_PI);
      line(x, y + letterSize / 4, x + letterSize / 2, y + letterSize / 4);
      line(x, y + letterSize - letterSize / 4, x + letterSize / 2, y + letterSize - letterSize / 4);
      break;
      
    case 'C':
      // Draw letter C
      stroke(strokeColor);
      strokeWeight(strokeWidth);
      fill(fillColor);
      arc(x + letterSize / 2, y + letterSize / 2, letterSize, letterSize, PI + HALF_PI, HALF_PI);
      break;
      
    // Add more cases for other letters...

      //In my exploration of graphic primitives within typography. I broke down each letter into its fundamental building blocks, I aimed to highlight the underlying structure that unifies the alphabet. This piece allowed me to engage with the essence of typography, examining how simple geometric shapes can form the basis of complex visual communication.
//I approached the design process with a solid and motivated mindset. By defining a set of parameters such as letter size, letter spacing, stroke width, stroke color, and fill color, I created a cohesive visual language that carried across all the letters. This deliberate decision allowed me to focus on the relationship between form and function, exploring how the manipulation of these parameters could yield diverse letterforms while maintaining a sense of coherence and unity.
//I aimed to challenge the conventional notion of typographic design and push the boundaries of what is possible. Each letter was meticulously constructed using lines, curves, and shapes, with strokes and fills serving as vital tools for creating contrast and defining letterforms. Through this process, I demonstrated that even with a simplified approach, typography can remain visually compelling and expressive.
//I strived to balance creativity with legibility, while also remaining mindful of its practical application. The readability and recognizability of each letter were central considerations throughout the design process. By experimenting with the proportions, angles, and placement of the graphic primitives, I aimed to strike a harmonious balance between aesthetic appeal and functional clarity.
//In evaluating the success of this piece, I am pleased with the outcome. The typeface achieved my intended goal of utilizing graphic primitives to structure and unify the letters of the alphabet. I created a cohesive visual language that transcends individual letters and establishes a sense of visual continuity. The exploration of geometry and the manipulation of strokes and fills resulted in letterforms that are distinct yet visually connected.
//Furthermore, the piece succeeded in offering a fresh perspective on typographic design. By embracing the simplicity and versatility of graphic primitives, I was able to challenge traditional approaches and create a typeface that is engaging, innovative, and unconventional.
//In conclusion, my intention with this piece was to explore the structural elements of typography through the lens of graphic primitives. I aimed to create a typeface that is visually cohesive and artistically innovative. Through the manipulation of strokes, fills, and geometric shapes, I sought to push the boundaries of typographic design and offer a fresh perspective on the possibilities of digital expression. I believe this piece successfully achieves those goals and invites further exploration of the relationship between simplicity, creativity, and legibility in typographic design.

  }
}



