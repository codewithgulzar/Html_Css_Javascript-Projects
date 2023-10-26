const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", () => {
    modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open-modal");
});

// modalOverlay.addEventListener("click", () => {
//     modal.classList.remove("open-modal");
// });

modalOverlay.addEventListener("click", (event) => {
    console.log(event);
    if (event.target === modalOverlay) {
        modal.classList.remove("open-modal");
    }
});
