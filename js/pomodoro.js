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

  startPomodoro(focusTimeInput.value, restTimeInput.value);

  pomodoroPlayingContainer.classList.remove("hidden");
  pomodoroFormContainer.classList.add("hidden");
}

let timer;
let remainFocusTime;
let remainRestTime;

function startPomodoro(focusTime, restTime) {
  remainFocusTime = focusTime;
  timer = setInterval(() => {}, 1000);
}

pomodoroForm.addEventListener("submit", onPomodoroSubmit);
