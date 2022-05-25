const menuBtn = document.querySelector(".menu button");
const menuBox = document.querySelector(".menu .menu_box");
const category = document.querySelectorAll(".menu .category li");
const doughnutsBox = menuBox.querySelector(".doughnuts");
const drinksBox = menuBox.querySelector(".drink");
const icecreamBox = menuBox.querySelector(".ice");

const HIDDEN = "hidden";
function hiddenBtn() {
  menuBox.style.height = "auto";
  menuBox.style.overflow = "visible";
  menuBtn.classList.add(HIDDEN);
}

function setClass(box1, box2, box3) {
  box1.classList.remove(HIDDEN);
  box2.classList.add(HIDDEN);
  box3.classList.add(HIDDEN);
}

menuBtn.addEventListener("click", hiddenBtn);

function showMenu(e) {
  hiddenBtn();
  switch (e.target.innerText) {
    case "전체":
      doughnutsBox.classList.remove(HIDDEN);
      drinksBox.classList.remove(HIDDEN);
      icecreamBox.classList.remove(HIDDEN);
      break;
    case "도넛":
      setClass(doughnutsBox, drinksBox, icecreamBox);
      break;
    case "커피 / 음료":
      setClass(drinksBox, doughnutsBox, icecreamBox);
      break;
    case "아이스크림 / 프로즌":
      setClass(icecreamBox, doughnutsBox, drinksBox);
      break;
  }
}

for (let i = 0; i < category.length; i++) {
  category[i].addEventListener("click", showMenu);
}
