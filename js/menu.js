const doughnuts = [
  {
    img: "menu(1).png",
    ko: "딸기 블라썸",
    en: "Strawberry Blossom",
  },
  {
    img: "menu(2).png",
    ko: "딸기 티라미수 크림",
    en: "Strawberry Tiramisu Cream",
  },
  {
    img: "menu(3).png",
    ko: "딸기 에끌레어",
    en: "Strawberry Eclair",
  },
  {
    img: "menu(4).png",
    ko: "딸기 초코케익",
    en: "Strawberry Chococake",
  },
  {
    img: "menu(5).png",
    ko: "딸기 브라운 치즈",
    en: "Strawberry Brown Cheese",
  },
  {
    img: "menu(6).png",
    ko: "딸기 우유크림 듬뿍 도넛",
    en: null,
  },
  {
    img: "menu(7).png",
    ko: "우유크림 듬뿍 도넛",
    en: null,
  },
  {
    img: "menu(8).png",
    ko: "프리미엄 스트로베리 필드",
    en: "Premium Strawberry Field",
  },
  {
    img: "menu(9).png",
    ko: "오리지널 우유크림 필드",
    en: "Original Milk Cream Field",
  },
  {
    img: "menu(10).png",
    ko: "초콜릿 필드",
    en: "Chocolate Field",
  },
  {
    img: "menu(11).png",
    ko: "로투스 비스코프 도넛",
    en: "Lotus Biscoff Doughnut",
  },
  {
    img: "menu(12).png",
    ko: "미니 오리지널 글레이즈드",
    en: "Mini Original Glazed",
  },
  {
    img: "menu(13).png",
    ko: "초코홀릭",
    en: "Chocoholic",
  },
  {
    img: "menu(14).png",
    ko: "초콜릿 아이스드 글레이즈드",
    en: "Chocolate Iced Glazed",
  },
  {
    img: "menu(15).png",
    ko: "초코와플넛",
    en: "Choco Wafflenut",
  },
  {
    img: "menu(16).png",
    ko: "딸기와플넛",
    en: "Strawberry Wafflenut",
  },
  {
    img: "menu(17).png",
    ko: "오리지널 글레이즈드",
    en: "Original Glazed",
  },
  {
    img: "menu(18).png",
    ko: "카라멜 아이스드",
    en: "Caramel Iced",
  },
  {
    img: "menu(19).png",
    ko: "슈거 코티드",
    en: "Sugar",
  },
  {
    img: "menu(20).png",
    ko: "뉴욕 치즈케익",
    en: "NewYork Cheese Cake",
  },
  {
    img: "menu(21).png",
    ko: "글레이즈드 사워 크림",
    en: "Glazed Sour Cream",
  },
  {
    img: "menu(22).png",
    ko: "글레이즈드 초콜릿 케익",
    en: "Glazed Chocolate Cake",
  },
  {
    img: "menu(23).png",
    ko: "오리지널 바이츠",
    en: "Original Bites",
  },
  {
    img: "menu(24).png",
    ko: "오리지널 글레이즈드 더즌",
    en: "Original Glazed Dozen",
  },
  {
    img: "menu(25).png",
    ko: "어소티드 1더즌",
    en: "Assorted 1Dozen",
  },
  {
    img: "menu(26).png",
    ko: "더블 더즌 딜",
    en: "Double Dozen Deal",
  },
];

const drinks = [
  {
    img: "drink_menu(1).png",
    ko: "생딸기 주스",
    en: "Strawberry Juice",
  },
  {
    img: "drink_menu(2).png",
    ko: "베리베리 라떼",
    en: "Strawberry Latte",
  },
  {
    img: "drink_menu(3).png",
    ko: "살구자두 스무디",
    en: "Strawberry Juice",
  },
  {
    img: "drink_menu(4).png",
    ko: "망고 스무디",
    en: "Mango Smoothies",
  },
  {
    img: "drink_menu(5).png",
    ko: "메론 스무디",
    en: "Strawberry Juice",
  },
  {
    img: "drink_menu(6).png",
    ko: "스트로베리 스무디",
    en: "Strawberry Smoothies",
  },
  {
    img: "drink_menu(7).png",
    ko: "밀크티",
    en: "Milk Tea",
  },
  {
    img: "drink_menu(8).png",
    ko: "다크 핫 초콜릿",
    en: "Dark Hot Chocolate",
  },
  {
    img: "drink_menu(9).png",
    ko: "아메리카노",
    en: "Americano",
  },
  {
    img: "drink_menu(10).png",
    ko: "라떼",
    en: "Latte",
  },
  {
    img: "drink_menu(11).png",
    ko: "바닐라 라떼",
    en: "Vanilla Latte",
  },
  {
    img: "drink_menu(12).png",
    ko: "카푸치노",
    en: "Cappuccino",
  },
  {
    img: "drink_menu(13).png",
    ko: "모카",
    en: "Mocha",
  },
  {
    img: "drink_menu(14).png",
    ko: "카라멜 마끼아또",
    en: "Caramel Macchiato",
  },
  {
    img: "drink_menu(15).png",
    ko: "우유",
    en: "Milk",
  },
];

const icecream = [
  {
    img: "ice_menu(1).png",
    ko: "아이스크림 프리미엄 스트로베리 필드",
    en: "Icecream Premium Strawberry Field",
  },
  {
    img: "ice_menu(2).png",
    ko: "아이스크림 인사이드 뉴욕치즈 케익",
    en: "Icecream Inside NewYork Cheese Cake",
  },
  {
    img: "ice_menu(3).png",
    ko: "아이스크림 인사이드 로투스 비스코프",
    en: "Icecream Inside Lotus Biscoff",
  },
  {
    img: "ice_menu(4).png",
    ko: "초코쿠키 밀크쉐이크",
    en: "Choco Cookie Milk Shake",
  },
  {
    img: "ice_menu(5).png",
    ko: "카라멜 쿠키 밀크 쉐이크",
    en: "Caramel Cookie Milk Shake",
  },
  {
    img: "ice_menu(6).png",
    ko: "순수우유 딸기 쉐이크",
    en: "Pure Milk Strawberry Shake",
  },
  {
    img: "ice_menu(7).png",
    ko: "순수우유 쉐이크",
    en: "Pure Milk Shake",
  },
  {
    img: "ice_menu(8).png",
    ko: "스트로베리 쉐이크",
    en: "Strawberry Shake",
  },
  {
    img: "ice_menu(9).png",
    ko: "밀크 쉐이크",
    en: "Milk Shake",
  },
  {
    img: "ice_menu(10).png",
    ko: "순수우유 소프트콘",
    en: "Pure Milk Soft Corn",
  },
  {
    img: "ice_menu(11).png",
    ko: "크리스피 아이스크림 콘",
    en: "Crispy Icecream Corn",
  },
];

const doughnutBox = document.querySelector(".menu_box .doughnuts");
const drinkBox = document.querySelector(".menu_box .drink");
const iceBox = document.querySelector(".menu_box .ice");

function createMenu(sort, array, i) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  ul.className = "menu_name";
  const ko = document.createElement("li");
  const en = document.createElement("li");

  sort.appendChild(li);
  div.appendChild(img);
  li.appendChild(div);
  li.appendChild(ul);
  ul.appendChild(ko);
  ul.appendChild(en);

  img.src = `images/${array[i].img}`;
  ko.innerHTML = array[i].ko;
  en.innerHTML = array[i].en;
}

for (let i = 0; i < doughnuts.length; i++) {
  createMenu(doughnutBox, doughnuts, i);
}

for (let i = 0; i < drinks.length; i++) {
  createMenu(drinkBox, drinks, i);
}

for (let i = 0; i < icecream.length; i++) {
  createMenu(iceBox, icecream, i);
}
