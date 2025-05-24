// Array of image paths for the slider
const images = [
  "/JAVASCRIPT PROJECTS/PROJECT - SLIDER WITH BUTTON/Assets/BG01.jpg",
  "/JAVASCRIPT PROJECTS/PROJECT - SLIDER WITH BUTTON/Assets/BG02.jpg",
  "/JAVASCRIPT PROJECTS/PROJECT - SLIDER WITH BUTTON/Assets/BG03.jpg",
  "/JAVASCRIPT PROJECTS/PROJECT - SLIDER WITH BUTTON/Assets/BG04.jpg",
  "/JAVASCRIPT PROJECTS/PROJECT - SLIDER WITH BUTTON/Assets/BG05.jpg",
];

// Reference to the image container div
const mainImg = document.getElementById("images");

// Current index of the displayed image
let index = 0;

// Show the first image when the page loads
mainImg.style.backgroundImage = `url('${images[index]}')`;

// Function to handle right button click: moves to the next image
function rightBtn() {
  index++; // Increment index
  if (index >= images.length) {
    index = 0; // If at the end, loop back to first image
  }
  mainImg.style.backgroundImage = `url('${images[index]}')`;
}

// Function to handle left button click: moves to the previous image
function leftBtn() {
  index--; // Decrement index
  if (index < 0) {
    index = images.length - 1; // If at the beginning, loop to last image
  }
  mainImg.style.backgroundImage = `url('${images[index]}')`;
}
