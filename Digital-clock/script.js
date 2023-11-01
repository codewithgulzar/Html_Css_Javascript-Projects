let isTwelveHourFormat = true;

function toggleTimeFormat() {
    isTwelveHourFormat = !isTwelveHourFormat;
    // if it is true, then it will be false. If it is false, then it will be true.
    updateTime();
}

const formatSwitchButton = document.getElementById("switch-format");

formatSwitchButton.addEventListener("click", toggleTimeFormat);

function updateTime() {
    const now = new Date();
    // console.log(now);

    // Get elements
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");

    // const hours = now.getHours();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    let formattedHours; // Create a new variable to hold the formatted hours

    if (isTwelveHourFormat) {
        const period = hours >= 12 ? "PM" : "AM";
        formattedHours = (hours % 12 || 12).toString().padStart(2, "0"); // Use formattedHours instead of reassigning hours
        const formattedTime = `${formattedHours}:${minutes}:${seconds} ${period}`;
        timeElement.textContent = formattedTime;
        formatSwitchButton.textContent = "Switch to 24 Hours Format";
    } else {
        formattedHours = hours.toString().padStart(2, "0"); // Use formattedHours instead of reassigning hours
        const formattedTime = `${formattedHours}:${minutes}:${seconds}`;
        timeElement.textContent = formattedTime;
        formatSwitchButton.textContent = "Switch to 12 Hours Format";
    }

    //display date

    const year = String(now.getFullYear());
    const monthsName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "september",
        "October",
        "November",
        "December",
    ];
    const month = monthsName[now.getMonth()];
    const date = String(now.getDate()).padStart(2, "0");

    const daysName = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const day = daysName[now.getDay()];

    const formattedDate = `${day}, ${month} ${date}, ${year}`;
    dateElement.textContent = formattedDate;
}

setInterval(updateTime, 1000); // Update time every second

updateTime(); // Initial update
