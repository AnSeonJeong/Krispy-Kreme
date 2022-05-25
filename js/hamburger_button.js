const ham = document.getElementById("ham");
const hamBar = document.querySelector("#ham .ham_bar");
const hamMenu = document.querySelector(".ham_menu");

const ACTIVE = "active";
let active = false;

function hamBtn() {
  if (!active) {
    hamBar.classList.add(ACTIVE);
    hamMenu.classList.add(ACTIVE);
    hamMenu.style.transition = "0.4s";
    active = true;
  } else {
    hamBar.classList.remove(ACTIVE);
    hamMenu.classList.remove(ACTIVE);
    active = false;
  }
}
ham.addEventListener("click", hamBtn);
