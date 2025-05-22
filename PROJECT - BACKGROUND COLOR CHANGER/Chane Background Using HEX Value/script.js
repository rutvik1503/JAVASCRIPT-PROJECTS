function getHex() {
    const hexChars = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexChars[Math.floor(Math.random() * hexChars.length)];
    }
    return color;
  }

  function changeBG() {
    let a = Math.floor(Math.random() * 360);

    const bg = document.getElementById("heroSection");
    const btn = document.getElementById("btn");

    btn.innerText = "Try again!";

    bg.style.background = `linear-gradient(${a}deg, ${getHex()}, ${getHex()})`;
    btn.style.background = `linear-gradient(to right, ${getHex()}, ${getHex()})`;
  }