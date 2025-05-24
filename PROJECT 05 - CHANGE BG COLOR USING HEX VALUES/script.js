// Function to generate a random HEX color string
function getHex() {
  // Array containing all possible hex characters
  const hexChars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let color = "#"; // Start the hex color string with '#'

  // Loop 6 times to generate 6 hex characters
  for (let i = 0; i < 6; i++) {
    // Pick a random character from hexChars and append to color
    color += hexChars[Math.floor(Math.random() * hexChars.length)];
  }

  return color; // Return the full hex color string (e.g., "#3FA7B2")
}

// Function to change the background colors of the page and button
function changeBG() {
  // Generate a random degree between 0 and 359 for the gradient angle
  let a = Math.floor(Math.random() * 360);

  // Select the hero section div where the background will change
  const bg = document.getElementById("heroSection");
  // Select the button to update text and style
  const btn = document.getElementById("btn");

  // Change the button text to encourage user to try again
  btn.innerText = "Try again!";

  // Set the background of heroSection to a linear gradient with random hex colors and random angle
  bg.style.background = `linear-gradient(${a}deg, ${getHex()}, ${getHex()})`;

  // Set the button background to a horizontal gradient with two new random hex colors
  btn.style.background = `linear-gradient(to right, ${getHex()}, ${getHex()})`;
}
