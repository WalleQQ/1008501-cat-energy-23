const navMain = document.querySelector(".main-nav");
const openMenu = document.querySelector(".main-nav__toggle");
const closeMenu = document.querySelector(".main-nav__toggle-item");
const menu = document.querySelector(".main-nav__menu");

navMain.classList.remove("main-nav--nojs");

openMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("main-nav__menu--show-menu");
  closeMenu.classList.toggle("main-nav__toggle-item--close-menu");
});
