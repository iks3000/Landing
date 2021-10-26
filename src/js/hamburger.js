const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navList");
const navLink = document.querySelectorAll(".navLink");

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

navLink.forEach((nav) => nav.addEventListener("click", closeMenu));
