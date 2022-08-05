const navMenu = document.querySelector(".nav-list");
const menuIcon = document.querySelector(".nav__menu-icon");
const closeIcon = document.getElementById("closeIcon");

menuIcon.addEventListener("click", function (e) {
	menuIcon.style.display = "none";
	navMenu.style.display = "flex";
});

closeIcon.addEventListener("click", function (evt) {
	navMenu.style.display = "none";
	menuIcon.style.display = "inline-block";
});

// window.onbeforeunload = function () {
// 	window.scrollTo(0, 0);
//   }
