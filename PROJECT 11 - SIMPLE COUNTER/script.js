// Initialize counter value
let count = 0;

// Get the counter display element by its ID
const counter = document.getElementById("counter");

// Update the displayed counter value in the UI
function updateCounter() {
  counter.textContent = count;
}

// Increase the counter value by 1 and update the display
function increment() {
  count++;
  updateCounter();
}

// Decrease the counter value by 1 and update the display
function decrement() {
  count--;
  updateCounter();
}

// Reset the counter value to 0 and update the display
function resetCounter() {
  count = 0;
  updateCounter();
}
