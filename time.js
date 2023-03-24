let startTime;
let stopwatchInterval;

function startStopwatch() {
  startTime = Date.now();
  stopwatchInterval = setInterval(updateStopwatch, 10);
}

function updateStopwatch() {
  const elapsedTime = Date.now() - startTime;
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime - minutes * 60000) / 1000);
  const milliseconds = elapsedTime - minutes * 60000 - seconds * 1000;

  const minutesString = String(minutes).padStart(2, "0");
  const secondsString = String(seconds).padStart(2, "0");
  const millisecondsString = String(milliseconds).padStart(3, "0");

  document.getElementById(
    "stopwatch"
  ).textContent = `${minutesString}:${secondsString}:${millisecondsString}`;
}
