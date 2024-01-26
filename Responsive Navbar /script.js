const headerEl = document.querySelector(".main-header");
const navToggleEl = document.querySelector(".menu-btn");

navToggleEl.addEventListener("click", function () {
    headerEl.classList.toggle("open-nav");
});
