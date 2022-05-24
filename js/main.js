// home slide
const homePrevBtn = document.getElementById("home_prev");
const homeNextBtn = document.getElementById("home_next");
const homeSlide = document.querySelector("#home .slide_wrap");
const homeSlideList = homeSlide.querySelectorAll(".slide");

let currentSlide = 0;
const slideCount = homeSlideList.length;

function slide(num) {
  currentSlide = num;

  if (currentSlide === -(slideCount - 1) || currentSlide === slideCount - 1) {
    homeSlide.prepend(homeSlide.lastElementChild);
    currentSlide = 0;
  }
}

setInterval(() => {
  slide(currentSlide - 1);
}, 6000);

homePrevBtn.addEventListener("click", () => {
  slide(currentSlide + 1);
});

homeNextBtn.addEventListener("click", () => {
  slide(currentSlide - 1);
});

// wheel event
const section = document.querySelectorAll("section");
const footer = document.querySelector("footer");
const fonts = document.querySelectorAll(".nav ul li a");
const homeserviceList = document.querySelectorAll("#homeservice .content li");
const homeserviceImg = document.querySelector(".homeservice_bottom img");
const headerLogo = document.querySelector("#logo img:nth-child(2)");
const progressNum = document.querySelector("#progress .num:first-child");

const BLACK = "black";
const MOVE = "move";

window.addEventListener("wheel", scrollPage, { passive: false });
document.documentElement.scrollTo(0, 0);

function animate(distance, sectionArr) {
  if (distance === sectionArr[4]) {
    homeserviceList.forEach((li) => {
      li.classList.add(MOVE);
      homeserviceImg.classList.add(MOVE);
    });
  } else {
    homeserviceList.forEach((li) => {
      li.classList.remove(MOVE);
      homeserviceImg.classList.remove(MOVE);
    });
  }
}

function scrollPage(e) {
  e.preventDefault();
  let currentScroll = document.body.scrollTop
    ? document.body.scrlollTop
    : document.documentElement.scrollTop;

  const pageHeight = document.body.offsetHeight;
  const sectionHeight = section[0].offsetHeight;
  const footerHeight = footer.offsetHeight;
  let lastScroll = pageHeight - sectionHeight - footerHeight;
  let distance = 0;

  let sectionArr = [];
  for (let i = 0; i < section.length; i++) {
    sectionScrollTop = section[i].offsetTop;
    sectionArr.push(sectionScrollTop);
  }
  console.log(sectionArr);
  if (e.deltaY > 0) {
    // scroll down
    if (currentScroll >= pageHeight - sectionHeight) return;

    distance = currentScroll + sectionHeight;
    let over = currentScroll % sectionHeight;
    distance -= over;
    document.documentElement.scrollTo(0, distance);

    console.log(currentScroll + sectionHeight, distance);

    fonts.forEach((font) => {
      if (
        (distance >= sectionArr[1] && distance < sectionArr[2]) ||
        distance >= sectionArr[3]
      ) {
        font.classList.add(BLACK);
        headerLogo.src = "images/header_logo_2_green.png";
      } else {
        font.classList.remove(BLACK);
        headerLogo.src = "images/header_logo_2.png";
      }
    });
    animate(distance, sectionArr);
  } else if (e.deltaY < 0) {
    // scroll up
    if (currentScroll === 0) return;

    if (currentScroll > lastScroll) {
      distance = currentScroll - footerHeight;
      document.documentElement.scrollTo(0, distance);
    } else {
      distance = currentScroll - sectionHeight;
      over = distance % sectionHeight;
      distance += over;
      document.documentElement.scrollTo(0, distance);

      fonts.forEach((font) => {
        if (distance === sectionArr[0] || distance === sectionArr[2]) {
          font.classList.remove("black");
          headerLogo.src = "images/header_logo_2.png";
        } else {
          font.classList.add("black");
          headerLogo.src = "images/header_logo_2_green.png";
        }
      });
      animate(distance, sectionArr);
    }
  }
}
