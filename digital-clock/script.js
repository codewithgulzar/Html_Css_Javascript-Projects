function updateTime() {
    //current date and time ko now variable me store kar leta hn
    const now = new Date();
    // console.log(now);

    //time
    //uske bad hum log hours minutes and seconds nikal lete hain
    let hr = String(now.getHours()).padStart(2, "0");
    let min = String(now.getMinutes()).padStart(2, "0");
    let sec = String(now.getSeconds()).padStart(2, "0");
    const timeElement = document.querySelector(".time");
    timeElement.textContent = `${hr}:${min}:${sec}`;

    //date
    //usse pehle hum log chalte hain console me

    //uske bad hum log 2 array bana lenge

    // Array for days of the week
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    // Array for months
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // Example of how to use these arrays
    const dayName = daysOfWeek[now.getDay()]; // Get the current day of the week
    const monthName = months[now.getMonth()]; // Get the current month

    const date = now.getDate();
    const year = now.getFullYear();

    // console.log(dayName, monthName, date, year);

    const dateElement = document.querySelector(".date");
    dateElement.textContent = `${dayName}, ${monthName} ${date}, ${year}`;
}

setInterval(() => {
    updateTime();
}, 1000);

updateTime();
