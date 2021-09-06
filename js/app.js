// navbar scrolling animation

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (innerWidth > 920) {
    const headerTop = header.getBoundingClientRect().top;
    if (headerTop <= 0) {
      header.classList.add("headerScroll");
    } else {
      header.classList.remove("headerScroll");
    }
  }
});

// offcanvas menu

const res_menu = document.querySelector("#res_menu");
const menubar = document.querySelector("#menubar");
const whole = document.querySelector(".whole");

menubar.addEventListener("click", (e) => {
  whole.classList.remove("d-none");
  res_menu.classList.remove("lefted");
});
whole.addEventListener("click", () => {
  res_menu.classList.add("lefted");
  whole.classList.add("d-none");
});

//home_hero img change

const heroImg = document.querySelectorAll("#home_hero .carousel-inner img");

function imgChange() {
  if (innerWidth < 500) {
    heroImg[0].src = "img/home_hero1_mini_too.jpg";
    heroImg[1].src = "img/home_hero2_mini_too.jpg";
    heroImg[2].src = "img/home_hero3_mini_too.jpg";
  } else if (innerWidth < 750) {
    heroImg[0].src = "img/home_hero1_mini.jpg";
    heroImg[1].src = "img/home_hero2_mini.jpg";
    heroImg[2].src = "img/home_hero3_mini.jpg";
  } else {
    heroImg[0].src = "img/home_hero1.jpg";
    heroImg[1].src = "img/home_hero2.jpg";
    heroImg[2].src = "img/home_hero3.jpg";
  }
}
imgChange();
window.addEventListener("resize", imgChange);

//goTop div logic

const goTop = document.querySelector(".goTop");

goTop.addEventListener("click", () => {
  scrollTo(0, 0);
});

//search station div logic

const searchBtn = document.getElementById("search");
const searchStation = document.querySelector(".search_station");
const goBackFromSearch = document.querySelector(".search_station > img");

searchBtn.addEventListener("click", () => {
  searchStation.classList.remove("d-none");
});
goBackFromSearch.addEventListener("click", () => {
  searchStation.classList.add("d-none");
});
