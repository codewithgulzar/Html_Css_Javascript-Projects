// document.addEventListener("DOMContentLoaded", function () {
//     const timeInput = document.querySelector(".time-input");
//     const timerDisplay = document.querySelector(".timer");
//     const startButton = document.querySelector(".start");
//     const doneButton = document.querySelector(".done");
//     const hrInput = document.querySelector("#hr");
//     const minInput = document.querySelector("#min");
//     const secInput = document.querySelector("#sec");
//     const timerEndSound = document.getElementById("timerEndSound"); // Reference to the audio element

//     let countdownInterval;
//     let totalTime = 0;
//     let isRunning = false;
//     // timerEndSound.volume = 0.5;

//     startButton.addEventListener("click", function () {
//         if (!isRunning) {
//             const hours = parseInt(hrInput.value) || 0;
//             const minutes = parseInt(minInput.value) || 0;
//             const seconds = parseInt(secInput.value) || 0;
//             if (totalTime === 0) {
//                 totalTime = hours * 3600 + minutes * 60 + seconds;
//             }
//             startButton.textContent = "Pause";
//             timeInput.classList.add("hidden");
//             timerDisplay.classList.remove("timer-hidden");
//             countdownInterval = setInterval(updateTimer, 1000);
//             isRunning = true;
//         } else {
//             clearInterval(countdownInterval);
//             startButton.textContent = "Resume";
//             isRunning = false;
//         }
//     });

//     doneButton.addEventListener("click", function () {
//         clearInterval(countdownInterval);
//         isRunning = false;
//         totalTime = 0;
//         timeInput.classList.remove("hidden");
//         timerDisplay.classList.add("timer-hidden");
//         startButton.textContent = "Start";
//     });

//     function updateTimer() {
//         if (totalTime <= 0) {
//             doneButton.click();
//             playTimerEndSound(); // Play the timer end sound
//             return;
//         }

//         const hours = Math.floor(totalTime / 3600);
//         const minutes = Math.floor((totalTime % 3600) / 60);
//         const seconds = totalTime % 60;

//         timerDisplay.textContent = `${String(hours).padStart(2, "0")}:${String(
//             minutes
//         ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
//         totalTime--;
//     }

//     function playTimerEndSound() {
//         if (timerEndSound) {
//             timerEndSound.play(); // Play the sound
//         }
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const timeInput = document.querySelector(".time-input");
    const timerDisplay = document.querySelector(".timer");
    const startButton = document.querySelector(".start");
    const doneButton = document.querySelector(".done");
    const hrInput = document.querySelector("#hr");
    const minInput = document.querySelector("#min");
    const secInput = document.querySelector("#sec");
    const timerEndSound = document.getElementById("timerEndSound"); // Reference to the audio element

    let countdownInterval;
    let totalTime = 0;
    let isRunning = false;

    startButton.addEventListener("click", function () {
        if (!isRunning) {
            const hours = parseInt(hrInput.value) || 0;
            const minutes = parseInt(minInput.value) || 0;
            const seconds = parseInt(secInput.value) || 0;
            if (totalTime === 0) {
                totalTime = hours * 3600 + minutes * 60 + seconds;
            }
            startButton.textContent = "Pause";
            timeInput.classList.add("hidden");
            timerDisplay.classList.remove("timer-hidden");
            countdownInterval = setInterval(updateTimer, 1000);
            isRunning = true;
        } else {
            clearInterval(countdownInterval);
            startButton.textContent = "Resume";
            isRunning = false;
        }
    });

    doneButton.addEventListener("click", function () {
        clearInterval(countdownInterval);
        isRunning = false;
        totalTime = 0;
        timeInput.classList.remove("hidden");
        timerDisplay.classList.add("timer-hidden");
        startButton.textContent = "Start";
    });

    function updateTimer() {
        if (totalTime <= 0) {
            doneButton.click();
            playTimerEndSound(); // Play the timer end sound
            setTimeout(stopTimerEndSound, 6000); // Stop the sound after 6 seconds
            return;
        }

        const hours = Math.floor(totalTime / 3600);
        const minutes = Math.floor((totalTime % 3600) / 60);
        const seconds = totalTime % 60;

        timerDisplay.textContent = `${String(hours).padStart(2, "0")}:${String(
            minutes
        ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        totalTime--;
    }

    function playTimerEndSound() {
        if (timerEndSound) {
            timerEndSound.play(); // Play the sound
        }
    }

    function stopTimerEndSound() {
        if (timerEndSound) {
            timerEndSound.pause(); // Stop the sound
        }
    }
});
