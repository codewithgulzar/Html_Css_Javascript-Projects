const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", function (e) {
    console.log(e);
    modalOverlay.classList.add("open-modal");
});

closeBtn.addEventListener("click", function (e) {
    console.log(e);
    modalOverlay.classList.remove("open-modal");
});

modalOverlay.addEventListener("click", function (e) {
    if (e.target == modalOverlay) {
        modalOverlay.classList.remove("open-modal");
    }
});
