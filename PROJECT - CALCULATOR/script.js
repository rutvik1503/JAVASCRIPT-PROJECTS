const result = document.getElementById("result");

function addValue(val) {
  result.value += val;
}

function clearDisplay() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, result.value.length - 1);
}

function calculate() {
  if (result.value == "") {
    alert("PLEASE, NOT BE EMPTY !");
  } else {
    result.value = eval(result.value);
  }
}
