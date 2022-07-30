const leftArrow = document.querySelector(".apps__left-arrow");
const rightArrow = document.querySelector(".apps__right-arrow");

const apps = document.getElementsByClassName("app");

let currentAppIndex = 2;

function handleLeftClick() {
  console.log(currentAppIndex);
  let nextAppIndex;
  if (currentAppIndex === 0) {
    nextAppIndex = apps.length - 1;
  } else {
    nextAppIndex = currentAppIndex - 1;
  }
  leftArrow.removeEventListener("click", handleLeftClick);
  rightArrow.removeEventListener("click", handleRightClick);

  apps[currentAppIndex].classList.add("disappear");
  apps[nextAppIndex].classList.add("disappear");
  setTimeout(() => {
    apps[currentAppIndex].classList.add("hidden");
    apps[currentAppIndex].classList.remove("disappear");
    apps[nextAppIndex].classList.remove("hidden");
  }, 500);
  setTimeout(() => {
    apps[nextAppIndex].classList.remove("disappear");
    leftArrow.addEventListener("click", handleLeftClick);
    rightArrow.addEventListener("click", handleRightClick);
    currentAppIndex = nextAppIndex;
  }, 600);
}
function handleRightClick() {
  let nextAppIndex;
  if (currentAppIndex === apps.length - 1) {
    nextAppIndex = 0;
  } else {
    nextAppIndex = currentAppIndex + 1;
  }
  leftArrow.removeEventListener("click", handleLeftClick);
  rightArrow.removeEventListener("click", handleRightClick);

  apps[nextAppIndex].classList.add("disappear");
  apps[currentAppIndex].classList.add("disappear");
  setTimeout(() => {
    apps[currentAppIndex].classList.add("hidden");
    apps[currentAppIndex].classList.remove("disappear");
    apps[nextAppIndex].classList.remove("hidden");
  }, 500);
  setTimeout(() => {
    apps[nextAppIndex].classList.remove("disappear");
    leftArrow.addEventListener("click", handleLeftClick);
    rightArrow.addEventListener("click", handleRightClick);
    currentAppIndex = nextAppIndex;
  }, 600);
}

leftArrow.addEventListener("click", handleLeftClick);
rightArrow.addEventListener("click", handleRightClick);
