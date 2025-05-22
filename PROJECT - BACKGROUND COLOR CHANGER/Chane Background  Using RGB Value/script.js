function changeBG() {
  let bg = document.getElementById("heroSection");
  let btn = document.getElementById("btn");

  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);

  btn.innerText = "Try Again!";

  bg.style.background = `linear-gradient(to right, rgb(${a},${b},${c}), rgb(${c},${b},${a}))`;
  btn.style.background = `linear-gradient(to right, rgb(${b},${c},${a}), rgb(${c},${a},${b}))`;
}