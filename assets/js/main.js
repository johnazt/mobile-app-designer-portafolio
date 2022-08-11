const navMenu = document.querySelector(".nav-list");
const menuIcon = document.querySelector(".nav__menu-icon");
const closeIcon = document.getElementById("closeIcon");

menuIcon.addEventListener("click", function (e) {
	menuIcon.classList.add("display-none");
	navMenu.classList.add("display-flex");
});

closeIcon.addEventListener("click", function (e) {
	navMenu.classList.remove("display-flex");
	menuIcon.classList.remove("display-none");
});
