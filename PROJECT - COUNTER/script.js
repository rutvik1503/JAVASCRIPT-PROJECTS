const counter = document.getElementById("counter");
const input = document.getElementById("input");
const intervalInput = document.getElementById("intervalInput");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

function startCounting() {
  const target = parseInt(input.value);
  const intervalTime = parseInt(intervalInput.value);

  startBtn.disabled = true;
  stopBtn.disabled = false;
  input.disabled = true;
  intervalInput.disabled = true;

  let count = 0;
  counter.innerText = count;

  increment = setInterval(() => {
    count++;
    counter.innerText = count;

    if (count >= target) {
      clearInterval(increment);

      startBtn.disabled = false;
      stopBtn.disabled = true;
      input.disabled = false;
      intervalInput.disabled = false;
    }
  }, intervalTime);
}

function stopCounting() {
  if (increment !== null) {
    clearInterval(increment);
  }

  startBtn.disabled = false;
  stopBtn.disabled = true;
  input.disabled = false;
  intervalInput.disabled = false;
}
