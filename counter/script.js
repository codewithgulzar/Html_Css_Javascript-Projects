const countElement = document.getElementById("value");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");
const decrementBtn = document.getElementById("decrement");

let count = 0;

incrementBtn.addEventListener("click", function () {
    count++;
    console.log(count);
    countElement.textContent = count;
});

decrementBtn.addEventListener("click", function () {
    count--;
    countElement.textContent = count;
});

resetBtn.addEventListener("click", function () {
    count = 0;
    countElement.textContent = count;
});
