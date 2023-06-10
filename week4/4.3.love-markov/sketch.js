
//create markov model
let rm= RiTa.markov(2);

//find some data
let data = document.getElementById("source").innerText;

//train the model
rm.addText(data);



function setup() {

 //generate some sentences
  let lines = rm.generate(6);

//find the letter DIV
let letter = select("#letter");

//add salutation
letter.child(  createP("Dear Catherine,") );

for (let l = 0; l < lines.length; l++){
  letter.child(
      createP( lines[l] )
    );
}

// add closing
letter.child( createP("Yours Truly,<br>Andrey Markov") );
}

function mousePressed(){
  letter.remove();
  letter = createDiv();
  letter.id("letter");
  setup();


}





