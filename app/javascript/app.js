const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const tabItems = document.querySelectorAll(".tab-item");

menuIcon.addEventListener("click", changeMenuState);
function changeMenuState() {
  if (menuIcon.src.includes("/images/icon-hamburger.svg")) {
    menuIcon.src = "./images/icon-close.svg";
    navLinks.classList.add("show-menu");
    navLinks.classList.remove("hide-menu");
  } else {
    navLinks.classList.remove("show-menu");
    navLinks.classList.add("hide-menu");
    menuIcon.src = "./images/icon-hamburger.svg";
  }
  navLinks.classList.remove("hide-menu");
}

tabItems.forEach((item) => {
  return item.addEventListener("click", selectItem);
});

function selectItem() {
  removeBorder();

  this.classList.add("active-border");
}

function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove("active-border");
  });
}
