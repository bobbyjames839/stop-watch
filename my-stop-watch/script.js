/*let startButton = document.getElementsByClassName('start')[0];
let stopButton = document.getElementsByClassName('stop')[0];
let resetButton = document.getElementsByClassName('reset')[0];

let minute = 00;
let second = 00;
let millisecond = 00;
let timer = false;


startButton.addEventListener('click', function () {
  timer = true;
  stopWatch();
  startButton.style.display = "none";
  stopButton.style.display = "flex";
});

stopButton.addEventListener('click', function () {
  timer = false;
  startButton.style.display = "flex";
  stopButton.style.display = "none";
});

resetButton.addEventListener('click', function () {
  timer = false;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementsByClassName('millisecond')[0].innerHTML = "00";
  document.getElementsByClassName('second')[0].innerHTML = "00";
  document.getElementsByClassName('minute')[0].innerHTML = "00";
  startButton.style.display = "flex";
  stopButton.style.display = "none";
});


function stopWatch() {
  if (timer) {
      millisecond++;

      if (millisecond === 100) {
          second++;
          millisecond = 0;
      }

      if (second === 60) {
          minute++;
          second = 0;
      }

      let minString = minute.toString().padStart(2, '0');
      let secString = second.toString().padStart(2, '0');
      let millisecondString = millisecond.toString().padStart(2, '0');

      document.getElementsByClassName('minute')[0].innerHTML = minString;
      document.getElementsByClassName('second')[0].innerHTML = secString;
      document.getElementsByClassName('millisecond')[0].innerHTML = millisecondString;
      setTimeout(stopWatch, 10);
  }
}
*/

let startButton = document.getElementsByClassName('start')[0];
let stopButton = document.getElementsByClassName('stop')[0];
let resetButton = document.getElementsByClassName('reset')[0];

let startTime;
let timerId;

startButton.addEventListener('click', function () {
  if (!startTime) {
    startTime = new Date().getTime();
    stopButton.style.display = "flex";
    startButton.style.display = "none";
    timerId = setInterval(updateTime, 10);
  }
});

stopButton.addEventListener('click', function () {
  if (startTime) {
    clearInterval(timerId);
    startTime = null;
    stopButton.style.display = "none";
    startButton.style.display = "flex";
  }
});

resetButton.addEventListener('click', function () {
  clearInterval(timerId);
  startTime = null;
  updateDisplay(0, 0, 0);
  stopButton.style.display = "none";
  startButton.style.display = "flex";
});

function updateTime() {
  let currentTime = new Date().getTime();
  let elapsedTime = currentTime - startTime;
  let milliseconds = Math.floor(elapsedTime % 1000 / 10);
  let seconds = Math.floor(elapsedTime / 1000) % 60;
  let minutes = Math.floor(elapsedTime / 1000 / 60);

  updateDisplay(minutes, seconds, milliseconds);
}

function updateDisplay(minutes, seconds, milliseconds) {
  document.getElementsByClassName('minute')[0].innerHTML = minutes.toString().padStart(2, '0');
  document.getElementsByClassName('second')[0].innerHTML = seconds.toString().padStart(2, '0');
  document.getElementsByClassName('millisecond')[0].innerHTML = milliseconds.toString().padStart(2, '0');
}
