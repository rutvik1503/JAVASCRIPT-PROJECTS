// Select all elements with the class "box"
const counter = document.querySelectorAll(".box");

// Loop through each selected element
counter.forEach((element) => {
  let startValue = 0; // Initial counter value
  let targetValue = +element.dataset.count; // Target value from data-count attribute (converted to number)
  let speed = targetValue / 100; // Determines how fast the number increases

  // Set an interval to update the counter every 10 milliseconds
  setInterval(() => {
    if (startValue < targetValue) {
      startValue += speed; // Increment the current value by speed
      element.innerHTML = Math.floor(startValue); // Display the current value (rounded down)
    }
  }, 10); // Interval time in milliseconds
});
