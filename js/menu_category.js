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
      doughnutsBox.classList.remove(HIDDEN);
      drinksBox.classList.add(HIDDEN);
      icecreamBox.classList.add(HIDDEN);
      break;
    case "커피 / 음료":
      drinksBox.classList.remove(HIDDEN);
      doughnutsBox.classList.add(HIDDEN);
      icecreamBox.classList.add(HIDDEN);
      break;
    case "아이스크림 / 프로즌":
      icecreamBox.classList.remove(HIDDEN);
      doughnutsBox.classList.add(HIDDEN);
      drinksBox.classList.add(HIDDEN);
      break;
  }
}

for (let i = 0; i < category.length; i++) {
  category[i].addEventListener("click", showMenu);
}
