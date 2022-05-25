// home slide
const homePrevBtn = document.getElementById("home_prev");
const homeNextBtn = document.getElementById("home_next");
const homeSlide = document.querySelector("#home .slide_wrap");
const homeSlideList = homeSlide.querySelectorAll(".slide");

let currentSlide = 0;
const slideCount = homeSlideList.length;
let toggle = false;

function slide(num) {
  currentSlide = num;

  if (currentSlide === -(slideCount - 1) || currentSlide === slideCount - 1) {
    homeSlide.prepend(homeSlide.lastElementChild);
    currentSlide = 0;
  }
}

let timerId = setInterval(() => {
  slide(currentSlide - 1);
}, 6000);

function timer(btn, id) {
  homeNextBtn.addEventListener("mouseenter", () => {
    clearInterval(id);
  });
  homePrevBtn.addEventListener("mouseenter", () => {
    clearInterval(id);
  });
  btn.addEventListener("mouseleave", () => {
    id = setInterval(() => {
      slide(currentSlide - 1);
    }, 6000);
  });
}

timer(homePrevBtn, timerId);
timer(homeNextBtn, timerId);

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
const progressNum = document.querySelectorAll("#progress .num");
const progressBar = document.querySelector("#progress .bar div");

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

let currentPage = 1;
function progress(p, num) {
  progressBar.style.height = `${p * num}%`;
  progressNum[0].innerText = `0${num}`;
  currentPage = num;
}

function removeClass() {
  progressBar.classList.remove(BLACK);
  progressNum.forEach((num) => {
    num.classList.remove(BLACK);
  });
}

function addClass() {
  progressBar.classList.add(BLACK);
  progressNum.forEach((num) => {
    num.classList.add(BLACK);
  });
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
  const percent = (sectionHeight / (pageHeight - footerHeight)) * 100;
  let distance = 0;

  let sectionArr = [];
  for (let i = 0; i < section.length; i++) {
    sectionScrollTop = section[i].offsetTop;
    sectionArr.push(sectionScrollTop);
  }

  if (e.deltaY > 0) {
    // scroll down
    if (currentScroll >= pageHeight - sectionHeight) return;

    distance = currentScroll + sectionHeight;
    let over = currentScroll % sectionHeight;
    distance -= over;
    document.documentElement.scrollTo(0, distance);

    fonts.forEach((font) => {
      if (
        (distance >= sectionArr[1] && distance < sectionArr[2]) ||
        distance >= sectionArr[3]
      ) {
        font.classList.add(BLACK);
        headerLogo.src = "images/header_logo_2_green.png";
        addClass();
      } else {
        font.classList.remove(BLACK);
        headerLogo.src = "images/header_logo_2.png";
        removeClass();
      }
    });

    animate(distance, sectionArr);

    if (currentScroll + sectionHeight === distance) {
      if (currentScroll !== lastScroll) {
        progress(percent, currentPage + 1);
      }
    }
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
          removeClass();
        } else {
          font.classList.add("black");
          headerLogo.src = "images/header_logo_2_green.png";
          addClass();
        }
      });

      if (currentScroll - sectionHeight === distance) {
        progress(percent, currentPage - 1);
      }

      animate(distance, sectionArr);
    }
  }
}
