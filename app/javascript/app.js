const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const tabItems = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab");
const accordionButtons = document.querySelectorAll(".accordion-question");
//const accordionContent = document.querySelectorAll(".accordion-content");

// *Navbar
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

// *Tab Section
tabItems.forEach((item) => {
  return item.addEventListener("click", selectItem);
});

function selectItem() {
  removeBorder();
  hideTabs();

  this.classList.add("active-border");
  const tabContentItem = document.querySelector(`.${this.id}-content`);
  console.log(tabContentItem);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove("active-border");
  });
}

function hideTabs() {
  tabContent.forEach((tab) => {
    tab.classList.remove("show");
    tab.classList.add("hide");
  });
}

// *Accordion
accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.classList.contains("open")) {
      button.classList.add("open");
      button.nextElementSibling.classList = "accordion-collapse collapsing";

      setTimeout(() => {
        button.nextElementSibling.classList = "accordion-collapse open";
      }, 100);
    } else {
      button.classList.remove("open");
      button.nextElementSibling.classList = "accordion-collapse collapsing ";
      setTimeout(() => {
        button.nextElementSibling.classList = "accordion-collapse collapse";
      }, 100);
    }
  });
});
