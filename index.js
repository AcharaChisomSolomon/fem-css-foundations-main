const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const body = document.querySelector('.body')

menu.addEventListener("click", () => {
  nav.classList.add("nav__visible");
  menu.classList.add("menu__hide");
  close.classList.add("close__show");
  body.classList.add('body__no-scroll')
});

close.addEventListener("click", () => {
  nav.classList.remove("nav__visible");
  menu.classList.remove("menu__hide");
  close.classList.remove("close__show");
  body.classList.remove("body__no-scroll");
});
