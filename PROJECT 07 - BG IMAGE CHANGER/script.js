// Array of image file paths to be used as background images
const images = [
  "/JAVASCRIPT PROJECTS/PROJECT - BG IMAGE CHANGER/Assets/BG01.jpg",
  "/JAVASCRIPT PROJECTS/PROJECT - BG IMAGE CHANGER/Assets/BG02.jpg",
  "/JAVASCRIPT PROJECTS/PROJECT - BG IMAGE CHANGER/Assets/BG03.jpg",
  "/JAVASCRIPT PROJECTS/PROJECT - BG IMAGE CHANGER/Assets/BG04.jpg",
  "/JAVASCRIPT PROJECTS/PROJECT - BG IMAGE CHANGER/Assets/BG05.jpg",
];

// Select the div with id "images" where the background will change
const mainImg = document.getElementById("images");

// Initialize the index to track the current image
let index = 0;

// Set the initial background image when the page loads
mainImg.style.backgroundImage = `url('${images[index]}')`;

// Function to change the background image to the next one in the array
function changeBG() {
  index++; // Move to the next image index

  // If index goes beyond the last image, reset to 0 (loop back)
  if (index >= images.length) {
    index = 0;
  }

  // Update the background image to the new image URL
  mainImg.style.backgroundImage = `url('${images[index]}')`;
}
