// Get reference to the input element where results are displayed
const result = document.getElementById("result");

/**
 * Appends a value to the current display
 * @param {string} val - The value to append (number/operator)
 */
function addValue(val) {
  result.value += val;
}

/**
 * Clears the entire display
 */
function clearDisplay() {
  result.value = "";
}

/**
 * Removes the last character from the display (acts like a backspace)
 */
function backspace() {
  result.value = result.value.slice(0, result.value.length - 1);
}

/**
 * Evaluates the mathematical expression in the display
 * and updates the result field with the output
 */
function calculate() {
  // If the display is empty, alert the user
  if (result.value == "") {
    alert("PLEASE, NOT BE EMPTY !");
  } else {
    // Use eval() to calculate the result (NOTE: eval can be unsafe for untrusted input)
    result.value = eval(result.value);
  }
}
