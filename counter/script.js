const countElement = document.getElementById("value");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

let count = 0;

function updateCounter() {
    countElement.textContent = count;

    if (count > 0) {
        countElement.style.color = "green";
    } else if (count < 0) {
        countElement.style.color = "red";
    } else {
        countElement.style.color = "black";
    }
}

incrementButton.addEventListener("click", () => {
    count++;
    updateCounter();
});

decrementButton.addEventListener("click", () => {
    count--;
    updateCounter();
});

resetButton.addEventListener("click", () => {
    count = 0;
    updateCounter();
});
