const fromAmountEl = document.getElementById("from-amount");
const fromCurrencyEl = document.getElementById("from-currency");
const toAmountEl = document.getElementById("to-amount");
const toCurrencyEl = document.getElementById("to-currency");
const swapButtonEl = document.querySelector(".swap");
const rateContainerEl = document.querySelector(".rate-container");

async function calculate() {
    // console.log("hello");
    let fromCurr = fromCurrencyEl.value;
    let toCurr = toCurrencyEl.value;
    // console.log(fromCurr, toCurr);

    const response = await fetch(
        `https://open.exchangerate-api.com/v6/latest/${fromCurr}`
    );
    const data = await response.json();
    // console.log(data);

    const rate = data.rates[toCurr];
    // console.log(rate);
    toAmountEl.value = (fromAmountEl.value * rate).toFixed(2);

    rateContainerEl.innerHTML = `
    <p>1 ${fromCurr} = ${rate.toFixed(5)} ${toCurr}</p>
    <p>1 ${toCurr} = ${(1 / rate).toFixed(5)} ${fromCurr}</p>
    <h2>${fromAmountEl.value} ${fromCurr} = ${toAmountEl.value} ${toCurr}</h2>
    `;
}

function swapCurrencies() {
    const tempValue = fromCurrencyEl.value;
    fromCurrencyEl.value = toCurrencyEl.value;
    toCurrencyEl.value = tempValue;
    calculate();
}

fromAmountEl.addEventListener("input", calculate);
fromCurrencyEl.addEventListener("change", calculate);
toAmountEl.addEventListener("input", calculate);
toCurrencyEl.addEventListener("change", calculate);

swapButtonEl.addEventListener("click", swapCurrencies);

calculate();
