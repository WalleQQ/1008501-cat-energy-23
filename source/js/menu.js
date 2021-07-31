const openMenu = document.querySelector(".main-nav__toggle");
const menu = document.querySelector(".main-nav__menu");

openMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("show-menu");
  openMenu.classList.toggle("close-menu");
});
