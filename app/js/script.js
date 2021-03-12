const btnHamburger = document.querySelector(".btnHamburger");
const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__title");
const toggleMenu = document.querySelector(".header__menu");

///////////////////////
// Helper function
const addFadeOut = function (elem) {
  elem.classList.remove("fade-in");
  elem.classList.add("fade-out");
};

const addFadeIn = function (elem) {
  elem.classList.remove("fade-out");
  elem.classList.add("fade-in");
};

const openMenu = function () {
  header.classList.add("open");
  document.body.classList.add("noscroll");
  addFadeOut(headerMenu);
  addFadeIn(toggleMenu);
};

const closeMenu = function () {
  header.classList.remove("open");
  document.body.classList.remove("noscroll");
  addFadeOut(toggleMenu);
  addFadeIn(headerMenu);
};

///////////////////////
// Event Listener
btnHamburger.addEventListener("click", function () {
  if (!header.classList.contains("open")) {
    openMenu();
  } else {
    closeMenu();
  }
});
