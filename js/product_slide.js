const productPrevBtn = document.querySelector("#product .product_prev");
const productNextBtn = document.querySelector("#product .product_next");
const products = document.querySelector("#product .center .content");
const productList = document.querySelectorAll(".product_img");

let currentInx = 0;
let productWidth = 310;
const productCount = productList.length;

const CLONE = "clone";
const TRANSITION = "transition";

function makeClone() {
  for (let i = 0; i < productCount; i++) {
    const clonedList = productList[i].cloneNode(true);
    products.appendChild(clonedList);
    clonedList.classList.add(CLONE);
  }
  for (let i = productCount - 1; i >= 0; i--) {
    const clonedList = productList[i].cloneNode(true);
    products.prepend(clonedList);
    clonedList.classList.add(CLONE);
  }
  newConWidth();
  initialPos();
  setTimeout(() => {
    products.classList.add(TRANSITION);
  }, 100);
}

function newConWidth() {
  const newProductCount = document.querySelectorAll(".product_img").length;
  const newWidth = productWidth * newProductCount + "px";
  products.style.width = newWidth;
}

function initialPos() {
  const translateValue = -productCount * productWidth + "px";
  products.style.transform = `translateX(${translateValue})`;
}

makeClone();

function productSlide(num) {
  products.style.left = -num * productWidth + "px";
  currentInx = num;

  if (currentInx === productCount || -currentInx === productCount) {
    setTimeout(() => {
      products.style.left = "0px";
      currentInx = 0;
      products.classList.remove(TRANSITION);
    }, 500);
    setTimeout(() => {
      products.classList.add(TRANSITION);
    }, 550);
  }
}

setInterval(() => {
  productSlide(currentInx + 1);
}, 2200);

productPrevBtn.addEventListener("click", () => {
  productSlide(currentInx - 1);
});

productNextBtn.addEventListener("click", () => {
  productSlide(currentInx + 1);
});
