// Get references to DOM elements
const counter = document.getElementById("counter");
const input = document.getElementById("input");
const intervalInput = document.getElementById("intervalInput");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let increment = null; // To store the interval ID

// Function to start the counting
function startCounting() {
  // Get the target number and interval time from user input
  const target = parseInt(input.value);
  const intervalTime = parseInt(intervalInput.value);

  // Disable start button and inputs to prevent changes during counting
  startBtn.disabled = true;
  stopBtn.disabled = false;
  input.disabled = true;
  intervalInput.disabled = true;

  let count = 0; // Initialize count
  counter.innerText = count; // Display initial count

  // Start interval to increment the counter
  increment = setInterval(() => {
    count++; // Increase count
    counter.innerText = count; // Update display

    // Stop the interval once target is reached
    if (count >= target) {
      clearInterval(increment); // Stop the counter

      // Re-enable buttons and inputs
      startBtn.disabled = false;
      stopBtn.disabled = true;
      input.disabled = false;
      intervalInput.disabled = false;
    }
  }, intervalTime); // Interval time defined by user input
}

// Function to stop the counting manually
function stopCounting() {
  // Clear the interval if it exists
  if (increment !== null) {
    clearInterval(increment);
  }

  // Re-enable controls
  startBtn.disabled = false;
  stopBtn.disabled = true;
  input.disabled = false;
  intervalInput.disabled = false;
}
