const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const dropdown = document.querySelector(".dropdown");
const dropdownLink = dropdown ? dropdown.querySelector(".dropdown-link") : null;

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );

  // When reopening the menu, start with Services submenu collapsed
  if (!isOpen && dropdown) {
    dropdown.classList.remove("open");
  }
});

navLinks.addEventListener("click", (e) => {
  const target = e.target;

  // Toggle Services dropdown on mobile when its label is tapped
  if (dropdownLink && target.closest(".dropdown-link")) {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle("open");
    return;
  }

  // If a link inside the dropdown menu is clicked, close everything
  if (target.closest(".dropdown-menu a")) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
    if (dropdown) dropdown.classList.remove("open");
    return;
  }

  // Any other link inside the nav closes the mobile menu
  if (target.closest("a")) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
    if (dropdown) dropdown.classList.remove("open");
  }
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__signature", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".tour__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const banner = document.querySelector(".banner__wrapper");
const bannerImages = Array.from(banner.children);

bannerImages.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});
