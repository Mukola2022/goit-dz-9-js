const startBtn = document.querySelector('button[data-start]');


const stopBtn = document.querySelector('button[data-stop]');

let intervalId = null;
let isActive = false;

function start() {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    console.log(getRandomHexColor());
  }, 1000);
}

function stop() {
  clearInterval(intervalId);
  isActive = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);

