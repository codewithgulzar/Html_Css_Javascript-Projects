const countElement = document.getElementById("value");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

// Retrieve count from local storage on page load
let count = localStorage.getItem("count") || 0;

// Update the UI with the initial count
countElement.textContent = count;

incrementButton.addEventListener("click", () => {
    count++;
    updateCount();
});

decrementButton.addEventListener("click", () => {
    count--;
    updateCount();
});

resetButton.addEventListener("click", () => {
    count = 0;
    updateCount();
});

// Function to update the count and save it to local storage
function updateCount() {
    countElement.textContent = count;
    localStorage.setItem("count", count);
}
