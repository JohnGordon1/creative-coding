// A homage to "House of Dust" by Alison Knowles

// Array of words to construct the house
const words = ["dreams", "whispers", "fragments", "echoes", "shadows"];

// Randomly select words to build the house
const house = words.map(word => getRandomElement(words)).join(" ");

// Add a twist to the homage
const twist = "But amidst the " + house + ", a spark of imagination ignites.";

// Display the homage with a twist
console.log("A homage to 'House of Dust' by Alison Knowles:");
console.log(house);
console.log(twist);

// Function to get a random element from an array
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

