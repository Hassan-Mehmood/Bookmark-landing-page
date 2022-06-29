const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", changeMenuState);

function changeMenuState() {
  if (menuIcon.src.includes("/images/icon-hamburger.svg")) {
    menuIcon.src = "./images/icon-close.svg";
    navLinks.classList.toggle("show-menu");
    navLinks.classList.toggle("hide-menu");
  } else {
    navLinks.classList.toggle("show-menu");
    navLinks.classList.toggle("hide-menu");
    menuIcon.src = "./images/icon-hamburger.svg";
  }
}
