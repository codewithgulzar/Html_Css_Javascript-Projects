document.addEventListener("DOMContentLoaded", function () {
    // Timer Mode
    const timerMinutesInput = document.getElementById("timer-minutes-input");
    const timerSecondsInput = document.getElementById("timer-seconds-input");
    const startTimerButton = document.getElementById("start-timer-button");
    const resetTimerButton = document.getElementById("reset-timer-button");
    const timerDisplay = document.getElementById("timer-display");
    let timerCountdownInterval;
    let timerRunning = false;

    startTimerButton.addEventListener("click", function () {
        if (timerRunning) {
            clearInterval(timerCountdownInterval);
            startTimerButton.textContent = "Start";
            timerRunning = false;
        } else {
            const timerMinutes = parseInt(timerMinutesInput.value) || 0;
            const timerSeconds = parseInt(timerSecondsInput.value) || 0;
            let totalSeconds = timerMinutes * 60 + timerSeconds;

            if (totalSeconds > 0) {
                startTimerButton.textContent = "Pause";
                timerRunning = true;

                timerCountdownInterval = setInterval(function () {
                    if (totalSeconds <= 0) {
                        clearInterval(timerCountdownInterval);
                        timerDisplay.textContent = "00:00";
                        // Add code to trigger sound notification or action here when the timer reaches zero.
                    } else {
                        const displayMinutes = Math.floor(totalSeconds / 60);
                        const displaySeconds = totalSeconds % 60;
                        timerDisplay.textContent = `${displayMinutes
                            .toString()
                            .padStart(2, "0")}:${displaySeconds
                            .toString()
                            .padStart(2, "0")}`;
                        totalSeconds--;
                    }
                }, 1000);
            }
        }
    });

    resetTimerButton.addEventListener("click", function () {
        clearInterval(timerCountdownInterval);
        timerDisplay.textContent = "00:00";
        startTimerButton.textContent = "Start";
        timerRunning = false;
        timerMinutesInput.value = "";
        timerSecondsInput.value = "";
    });

    // Stopwatch Mode
    const startStopButton = document.getElementById("start-stop-button");
    const resetStopwatchButton = document.getElementById(
        "reset-stopwatch-button"
    );
    const stopwatchDisplay = document.getElementById("stopwatch-display");
    const lapButton = document.getElementById("lap-button");
    const lapTimesList = document.getElementById("lap-times-list");
    let stopwatchInterval;
    let stopwatchRunning = false;
    let elapsedSeconds = 0;

    startStopButton.addEventListener("click", function () {
        if (stopwatchRunning) {
            clearInterval(stopwatchInterval);
            startStopButton.textContent = "Start";
            stopwatchRunning = false;
        } else {
            startStopButton.textContent = "Stop";
            stopwatchRunning = true;

            stopwatchInterval = setInterval(function () {
                elapsedSeconds++;
                const displayMinutes = Math.floor(elapsedSeconds / 60);
                const displaySeconds = elapsedSeconds % 60;
                stopwatchDisplay.textContent = `${displayMinutes
                    .toString()
                    .padStart(2, "0")}:${displaySeconds
                    .toString()
                    .padStart(2, "0")}`;
            }, 1000);
        }
    });

    resetStopwatchButton.addEventListener("click", function () {
        clearInterval(stopwatchInterval);
        stopwatchDisplay.textContent = "00:00";
        startStopButton.textContent = "Start";
        stopwatchRunning = false;
        elapsedSeconds = 0;
        lapTimesList.innerHTML = "";
    });

    lapButton.addEventListener("click", function () {
        if (stopwatchRunning) {
            const lapTime = stopwatchDisplay.textContent;
            const lapItem = document.createElement("li");
            lapItem.textContent = lapTime;
            lapTimesList.appendChild(lapItem);
        }
    });
});
