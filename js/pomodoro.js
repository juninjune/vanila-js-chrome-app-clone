const pomodoroFormContainer = document.querySelector(
  ".pomodoro-setting__container"
);
const pomodoroForm = document.querySelector(".pomodoro-setting");
const taskNameInput = document.querySelector(".pomodoro-setting__task-name");
const focusTimeInput = document.querySelector(
  ".pomodoro-setting__focus-minute"
);
const restTimeInput = document.querySelector(".pomodoro-setting__rest-minute");

const pomodoroPlayingContainer = document.querySelector(
  ".pomodoro-playing__container"
);
const pomodoroTitle = document.querySelector(".pomodoro-playing__task-name");
const pomodoroTime = document.querySelector(".pomodoro-playing__time");
const pomodoroPause = document.querySelector(".pomodoro-playing__pause");
const pomodoroPauseSpan = document.querySelector(
  ".pomodoro-playing__pause span i"
);

const alarmSound = new Audio("sounds/ding.mp3");

console.log(pomodoroForm);

function onPomodoroSubmit(event) {
  event.preventDefault();
  if (taskNameInput.value === "") {
    taskNameInput.value = "Task";
  }
  if (focusTimeInput.value === "") {
    focusTimeInput.value = 25;
  }
  if (restTimeInput.value === "") {
    restTimeInput.value = 5;
  }

  pomodoroTitle.innerText = taskNameInput.value;
  pomodoroTime.innerText = `${focusTimeInput.value
    .toString()
    .padStart(2, "0")}:00`;

  focusTime = focusTimeInput.value;
  restTime = restTimeInput.value;
  startPomodoro();

  pomodoroPlayingContainer.classList.remove("hidden");
  pomodoroFormContainer.classList.add("hidden");
}

function onPauseResumeClicked() {
  if (!isPaused) {
    pausePomodoro();
    isPaused = true;
  } else {
    resumePomodoro();
    isPaused = false;
  }
}

let focusTime;
let restTime;

let timer;
let remainFocusSeconds;
let remainRestSeconds;
let isFocusing;
let isPaused = false;

function startPomodoro() {
  remainFocusSeconds = focusTime * 60;
  remainRestSeconds = 0;
  isFocusing = true;
  paintTimer();
}

function pausePomodoro() {
  clearInterval(timer);
  pomodoroPauseSpan.classList.remove("fa-pause");
  pomodoroPauseSpan.classList.add("fa-play");
}

function resumePomodoro() {
  pomodoroPauseSpan.classList.remove("fa-play");
  pomodoroPauseSpan.classList.add("fa-pause");
  paintTimer();
}

function paintTimer() {
  timer = setInterval(() => {
    if (isFocusing) {
      remainFocusSeconds--;
      pomodoroTime.innerText = `${Math.floor(remainFocusSeconds / 60)
        .toString()
        .padStart(2, "0")}:${(remainFocusSeconds % 60)
        .toString()
        .padStart(2, "0")}`;
      if (remainFocusSeconds === 0) {
        remainRestSeconds = restTime * 60;
        pomodoroTitle.innerText = "휴식";
        alarmSound.play();
        isFocusing = false;
      }
    } else {
      remainRestSeconds--;
      pomodoroTime.innerText = `${Math.floor(remainRestSeconds / 60)
        .toString()
        .padStart(2, "0")}:${(remainRestSeconds % 60)
        .toString()
        .padStart(2, "0")}`;
      if (remainRestSeconds === 0) {
        remainFocusSeconds = focusTime * 60;
        pomodoroTitle.innerText = taskNameInput.value;
        alarmSound.play();
        isFocusing = true;
      }
    }
  }, 1000);
}

pomodoroForm.addEventListener("submit", onPomodoroSubmit);
pomodoroPause.addEventListener("click", onPauseResumeClicked);
