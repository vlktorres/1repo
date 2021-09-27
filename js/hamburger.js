const hamburger = document.querySelector(".hamburger");
const sidenav = document.querySelector(".sidenav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    sidenav.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    sidenav.classList.remove("active");
}