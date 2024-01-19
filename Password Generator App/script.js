const generateButtonEl = document.querySelector(".generate-button");
const uppercaseCheckboxEl = document.querySelector(".uppercase-checkbox");
const lowercaseCheckboxEl = document.querySelector(".lowercase-checkbox");
const numbersCheckboxEl = document.querySelector(".numbers-checkbox");
const symbolsCheckboxEl = document.querySelector(".symbols-checkbox");
const passwordDisplayEl = document.querySelector(".password-display");
const passwordLengthInputEl = document.querySelector(".input-length");
const copyButtonEl = document.querySelector(".copy-button");

const symbols = "!@#$%^&*()_-+=<>?/:;{}[]";
let password = "";

function getRandomInteger(min, max) {
    // return Math.floor(Math.random());
    // return Math.floor(Math.random() * 5);
    return Math.floor(Math.random() * (max - min)) + min;
}

// console.log(getRandomInteger(10, 20));

// random uppercase letter A - Z, A-65, Z-90
function getRandomUppercase() {
    return String.fromCharCode(getRandomInteger(65, 91));
}
function getRandomLowercase() {
    return String.fromCharCode(getRandomInteger(97, 123));
}

function getRandomNumber() {
    return String(getRandomInteger(0, 10));
}

function getRandomSymbol() {
    const index = getRandomInteger(0, symbols.length);
    return symbols.charAt(index);
}

// console.log(getRandomUppercase());
// console.log(getRandomLowercase());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());

generateButtonEl.addEventListener("click", function () {
    password = "";
    let passwordLength = passwordLengthInputEl.value;

    const funcArray = [];
    if (uppercaseCheckboxEl.checked) {
        password = password + getRandomUppercase();
        funcArray.push(getRandomUppercase);
    }
    if (lowercaseCheckboxEl.checked) {
        password = password + getRandomLowercase();
        funcArray.push(getRandomLowercase);
    }
    if (numbersCheckboxEl.checked) {
        password = password + getRandomNumber();
        funcArray.push(getRandomNumber);
    }
    if (symbolsCheckboxEl.checked) {
        password = password + getRandomSymbol();
        funcArray.push(getRandomSymbol);
    }

    for (let i = 0; i < passwordLength - funcArray.length; i++) {
        const index = getRandomInteger(0, funcArray.length);
        password = password + funcArray[index]();
    }
    console.log(funcArray);

    console.log(password);
    passwordDisplayEl.value = password;
});

copyButtonEl.addEventListener("click", copyPasswordToClipboard);

async function copyPasswordToClipboard() {
    try {
        await navigator.clipboard.writeText(password);
        alert("Password Copied to clipboard");
    } catch (error) {
        console.error("failed to copy password to clipboard", error);
    }
}
