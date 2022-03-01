var sec = 0;
var min = 0;
var hr = 0;

var interval;

var isRunning = false;

const twoDigits = (digit) => {
  if (digit < 10) {
    return "0" + digit;
  } else {
    return digit;
  }
};

const start = () => {
  if (!isRunning) {
    watch();
    interval = setInterval(watch, 10);
  }

  isRunning = true;
}

const pause = () => {
  clearInterval(interval);
  isRunning = false;
}

const stop = () => {
  clearInterval(interval);
  sec = 0;
  min = 0;
  window.alert("You've stopped at: " + document.getElementById("watch").innerText);
  document.getElementById("watch").innerText = "00:00:00";
  isRunning = false;
}

const watch = () => {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
    if (min == 60) {
      min = 0;
      hr++;
    }
  }
  document.getElementById("watch").innerText =
    twoDigits(hr) + ":" + twoDigits(min) + ":" + twoDigits(sec);
}
