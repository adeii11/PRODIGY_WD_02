let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapCount = 1;

function startStopwatch() {
  if (!timer) {
    timer = setInterval(runStopwatch, 10);
  }
}

function runStopwatch() {
  milliseconds++;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
  }
  displayTime();
}

function displayTime() {
  let display = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
  document.getElementById("display").innerText = display;
}

function padTime(value) {
  return value < 10 ? '0' + value : value;
}

function pauseStopwatch() {
  clearInterval(timer);
  timer = false;
}

function stopStopwatch() {
  clearInterval(timer);
  timer = false;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  displayTime();
  lapCount = 1;
  clearLapTimes();
}

function resetStopwatch() {
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  displayTime();
  lapCount = 1;
  clearLapTimes();
}

function recordLap() {
  let lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
  let lapItem = document.createElement("li");
  lapItem.innerText = `Lap ${lapCount}: ${lapTime}`;
  document.getElementById("lapTimes").appendChild(lapItem);
  lapCount++;
}

function clearLapTimes() {
  let lapTimes = document.getElementById("lapTimes");
  while (lapTimes.firstChild) {
    lapTimes.removeChild(lapTimes.firstChild);
  }
}
