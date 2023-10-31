const menuSwitches = document.querySelectorAll(".menu-switch");
const menu = document.querySelector(".menu");
document.addEventListener("click", (ev) => {
  if (ev.target.matches(".menu-switch, .menu-switch *, .menu__item")) {
    [...menuSwitches, menu].forEach((el) => el.classList.toggle("hidden"));
  }
});
