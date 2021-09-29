const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidenav");
const navLink = document.querySelectorAll(".iconLinks");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    sidebar.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    sidebar.classList.remove("active");
}