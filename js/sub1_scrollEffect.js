const storyCon = document.querySelectorAll(".story_box .story_content");
const storyWrap = document.querySelectorAll(".story_box .story_wrap");
const storyDesc = document.querySelectorAll(".story_box .story_desc");
const shareTheLove = document.getElementById("share_the_love");
const shareTheLoveList = shareTheLove.querySelectorAll("ul li");

const ODD = "odd";
const EVEN = "even";

let storyPosArr = [];
for (let i = 0; i < storyCon.length; i++) {
  const storyPos = storyCon[i].offsetTop - 700;
  storyPosArr.push(storyPos);
}
const storyConWidth = storyCon[0].getBoundingClientRect().width + 230;
const STLHeight = shareTheLoveList[0].getBoundingClientRect().height + 170;
const STLPos = shareTheLove.offsetTop - 500;

function hideStory() {
  storyCon[0].style.transform = `translateX(-${storyConWidth}px)`;
  storyCon[1].style.transform = `translateX(${storyConWidth}px)`;
  storyCon[2].style.transform = `translateX(-${storyConWidth}px)`;
  storyCon[3].style.transform = `translateX(${storyConWidth}px)`;

  storyCon.forEach((con) => {
    setTimeout(() => {
      con.classList.remove(TRANSITION);
    }, 0);
    setTimeout(() => {
      con.classList.add(TRANSITION);
    }, 810);
  });
}

function hideSTL() {
  for (let i = 0; i < shareTheLoveList.length; i++) {
    shareTheLoveList[i].style.transform = `translateY(${STLHeight}px)`;
  }
}

hideStory();
hideSTL();

window.addEventListener("scroll", () => {
  const currentScroll = document.body.scrollTop
    ? document.body.scrlollTop
    : document.documentElement.scrollTop;

  function originalPos(num, name, i) {
    if (currentScroll > storyPosArr[num]) {
      storyCon[num].style.transform = `translateX(0px)`;
      storyCon[num].classList.add(name);
      storyDesc[num].style.opacity = 1;
    } else {
      storyCon[num].classList.remove(name);
      storyCon[num].style.transform = `translateX(${i * storyConWidth}px)`;
      storyDesc[num].style.opacity = 0;
    }
  }

  originalPos(0, ODD, -1);
  originalPos(1, EVEN, 1);
  originalPos(2, ODD, -1);
  originalPos(3, EVEN, 1);

  if (currentScroll > STLPos) {
    for (let i = 0; i < shareTheLoveList.length; i++) {
      shareTheLoveList[i].style.transform = `translateY(0px)`;
    }
    shareTheLoveList[0].style.transition = "0.5s";
    shareTheLoveList[1].style.transition = "0.8s";
    shareTheLoveList[2].style.transition = "0.9s";
    shareTheLoveList[3].style.transition = "1s";
  } else {
    hideSTL();
  }
});
