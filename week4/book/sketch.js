let myBook = "";

function setup() {
	noCanvas();

	let content = createDiv()
	content.id("content");

	let bookTitle = createElement("h1","The Love of My Life");

	content.child(bookTitle);

	for (let w = 0; w < 50000; w++){
		myBook += random(["Alexandria ", "aLeXANdria ", "ALEXANDRIA ", "ALEXandriA "]);
		myBook += random(["", "", "", "", "",".",]);

		
	}

	let bookContent = createDiv(myBook);

	content.child(bookContent);
	
	Bindery.makeBook({
		content: '#content',
	})
}

