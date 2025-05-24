function changeBG() {
  // Select the container whose background will change
  let bg = document.getElementById("heroSection");
  // Select the button to update its text and style
  let btn = document.getElementById("btn");

  // Generate three random numbers between 0 and 254 for RGB color values
  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);

  // Change the button text after clicking to encourage retry
  btn.innerText = "Try Again!";

  // Set the background of the container to a linear gradient with random RGB colors
  bg.style.background = `linear-gradient(to right, rgb(${a},${b},${c}), rgb(${c},${b},${a}))`;
  // Set the button background to a different linear gradient using the same RGB values but in different order
  btn.style.background = `linear-gradient(to right, rgb(${b},${c},${a}), rgb(${c},${a},${b}))`;
}
