// You got this! 💫

// 💻 Work: 25 mins
// ☕️ Short break: 5 mins
// 🌯 Long break: 15 mins

const root = document.getElementById("time-display");
const workBtn = document.getElementById("work-btn");
const error = document.getElementById("c-con");

let sec = 0;
let min = 0;
let working = false;

function music() {
  const sndd = new Audio("relaxM.mp3"); // buffers automatically when created
  sndd.play();
}

function beep() {
  const snd = new Audio("beep.mp3"); // buffers automatically when created
  snd.play();
}

function work() {
  if (working == false) {
    working = true;
    min = 0;
    sec = 10;

    const timerWork = setInterval(() => {
      sec--;
      root.textContent = `${min}:${sec}`;

      if (sec == 0 && min == 0) {
        sec = 0;
        min = 0;
        working = false;
        beep();
        clearInterval(timerWork);
      }

      if (sec == 0) {
        min--;
        sec = 60;
      }
    }, 1000);
  } else {
    error.classList.add("show");
    error.classList.remove("hide");

    const snd = new Audio("es.mp3"); // buffers automatically when created
    snd.play();

    setTimeout(() => {
      error.classList.add("hide");
      error.classList.remove("show");
    }, 3500);
  }
}

function shortB() {
  if (working == false) {
    working = true;
    min = 0;
    sec = 5;

    const shortBreak = setInterval(() => {
      sec--;
      root.textContent = `${min}:${sec}`;

      if (sec == 0 && min == 0) {
        sec = 0;
        min = 0;
        working = false;
        beep();
        clearInterval(shortBreak);
      }

      if (sec == 0) {
        min--;
        sec = 60;
      }
    }, 1000);
  } else {
    error.classList.add("show");
    error.classList.remove("hide");

    const snd = new Audio("es.mp3"); // buffers automatically when created
    snd.play();

    setTimeout(() => {
      error.classList.add("hide");
      error.classList.remove("show");
    }, 3500);
  }
}

function bigB() {
  if (working == false) {
    working = true;
    min = 0;
    sec = 10;

    const bigBreak = setInterval(() => {
      sec--;
      root.textContent = `${min}:${sec}`;

      if (sec == 0 && min == 0) {
        sec = 0;
        min = 0;
        working = false;
        beep();
        clearInterval(bigBreak);
      }

      if (sec == 0) {
        min--;
        sec = 60;
      }
    }, 1000);
  } else {
    error.classList.add("show");
    error.classList.remove("hide");

    const snd = new Audio("es.mp3"); // buffers automatically when created
    snd.play();

    setTimeout(() => {
      error.classList.add("hide");
      error.classList.remove("show");
    }, 3500);
  }
}
