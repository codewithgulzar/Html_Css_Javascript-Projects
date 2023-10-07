//get elements
const countElement = document.getElementById("count");
const increaseElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");
const resetElement = document.getElementById("reset");

//set initial count value
let count = 0;

increaseElement.addEventListener("click", () => {
    count++;
    // countElement.textContent = count;
    // // console.log(count);
    updateCounter();
});

decrementElement.addEventListener("click", () => {
    count--;
    updateCounter();
});

resetElement.addEventListener("click", () => {
    count = 0;
    updateCounter();
});

function updateCounter() {
    countElement.textContent = count;
    // Set color based on the count value
    if (count < 0) {
        countElement.style.color = "red";
    } else if (count > 0) {
        countElement.style.color = "green";
    } else {
        countElement.style.color = "black";
    }
}
