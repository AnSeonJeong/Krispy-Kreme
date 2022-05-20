const historyPrevBtn = document.querySelector(".history_btn .prev");
const historyNextBtn = document.querySelector(".history_btn .next");
const history = document.querySelector(".history_slide");
const historyList = document.querySelectorAll(".history_wrap");
const timeline = document.querySelector(".history_box img");

let currentInx = 0;
let historyHeight = 650;
const historyCount = historyList.length;

let CLONE = "clone";
let TRANSITION = "transition";

function makeClone() {
  for (let i = 0; i < historyCount; i++) {
    const clonedHistory = historyList[i].cloneNode(true);
    history.appendChild(clonedHistory);
    clonedHistory.classList.add(CLONE);
  }
  for (let i = historyCount - 1; i >= 0; i--) {
    const clonedHistory = historyList[i].cloneNode(true);
    history.prepend(clonedHistory);
    clonedHistory.classList.add(CLONE);
  }
  newConHeight();
  initialPos();
  setTimeout(() => {
    history.classList.add(TRANSITION);
    timeline.classList.add(TRANSITION);
  }, 500);
}

function newConHeight() {
  const newHistoryCount = document.querySelectorAll(".history_wrap").length;
  const newHistoryHeight = historyHeight * newHistoryCount + "px";
  history.style.height = newHistoryHeight;
}

function initialPos() {
  const HistoryTranslateValue = -historyCount * historyHeight + "px";
  history.style.transform = `translateY(${HistoryTranslateValue})`;
}

makeClone();

function historySlide(num) {
  history.style.top = -num * historyHeight + "px";
  currentInx = num;

  if (currentInx === historyCount || -currentInx === historyCount) {
    setTimeout(() => {
      history.style.top = "0px";
      currentInx = 0;
      history.classList.remove(TRANSITION);
    }, 500);
    setTimeout(() => {
      history.classList.add(TRANSITION);
    }, 550);
  }
}

let i = 0;
function rotateTimeline(num) {
  timeline.style.transform = `rotate(${num * 60}deg)`;
  i = num;
}

historyPrevBtn.addEventListener("click", () => {
  historySlide(currentInx - 1);
  rotateTimeline(i - 1);
});

historyNextBtn.addEventListener("click", () => {
  historySlide(currentInx + 1);
  rotateTimeline(i + 1);
});
