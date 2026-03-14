const navbar = document.querySelector("#navbar");
const darkToggle = document.querySelector("#dark-toggle");
const menuLinks = document.querySelectorAll(".menu-link");


const modeTersimpan = localStorage.getItem("darkMode");

if (modeTersimpan === "aktif") {
document.body.classList.add("dark-mode");
}


darkToggle.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

const aktif = document.body.classList.contains("dark-mode");

localStorage.setItem("darkMode", aktif ? "aktif" : "nonaktif");

});


window.addEventListener("scroll", () => {

if (window.scrollY > 80) {
navbar.classList.add("navbar-scroll");
} else {
navbar.classList.remove("navbar-scroll");
}

});


menuLinks.forEach((link) => {

link.addEventListener("click", (event) => {

event.preventDefault();

const targetId = link.getAttribute("href");

const targetEl = document.querySelector(targetId);

if (targetEl) {
targetEl.scrollIntoView({
behavior: "smooth"
});
}

});

});
