let timerInterval; // Variable to store the interval ID so we can clear it later

// Function to start the countdown timer
function timer() {
  // Get user input in minutes
  let minutes = document.getElementById("input").value;
  let showTimer = document.getElementById("showTimer");

  // Convert total minutes to days, hours, minutes, and seconds
  let days = Math.floor(minutes / 1440); // 1440 minutes in a day
  let hours = Math.floor(minutes / 60) % 24; // Get hours left after accounting for days
  let secondRange = ((minutes * 60) % 60) - 1; // Get seconds, start from one second less to compensate for first tick
  minutes = Math.floor(minutes % 60); // Remaining minutes after full hours

  clearInterval(timerInterval); // Clear any existing timer to avoid duplicates

  // Start the countdown with 1-second intervals
  timerInterval = setInterval(() => {
    // Check if time is still left
    if (days >= 0) {
      if (hours >= 0) {
        if (minutes >= 0) {
          if (secondRange >= 0) {
            // Format each time component to 2 digits (e.g., 01 instead of 1)
            let showDays = `${String(days).padStart(2, "0")}`;
            let showHour = `${String(hours).padStart(2, "0")}`;
            let showMinute = `${String(minutes).padStart(2, "0")}`;
            let showSecond = `${String(secondRange).padStart(2, "0")}`;

            // Display the formatted time
            showTimer.innerText = `${showDays}:${showHour}:${showMinute}:${showSecond}`;
            secondRange--; // Decrease seconds
          } else {
            // If seconds run out, reset to 59 and decrease minutes
            secondRange = 59;
            minutes--;
          }
        } else {
          // If minutes run out, reset to 59 and decrease hours
          minutes = 59;
          hours--;
        }
      } else {
        // If hours run out, reset to 23 and decrease days
        hours = 23;
        days--;
      }
    } else {
      // When the timer finishes, clear the interval and reset display
      clearInterval(timerInterval);
      showTimer.innerText = "00:00:00:00";
    }
  }, 1000); // 1000ms = 1 second
}

// Function to pause the timer
function pause() {
  clearInterval(timerInterval); // Stop the timer without resetting values
}
