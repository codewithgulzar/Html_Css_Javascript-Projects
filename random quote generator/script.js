const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.getElementById("quote-text");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote-btn");

async function getNewQuote() {
    try {
        newQuoteBtn.disabled = true;
        newQuoteBtn.textContent = "LOADING...";
        const URL = "https://api.quotable.io/random";
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error("Failed to fetch a new Quote");
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        quoteText.textContent = data.content;
        author.textContent = `- ${data.author}`;
    } catch (error) {
        console.log(error);
        quoteText.textContent = "An error occurred while fetching the quote";
    } finally {
        newQuoteBtn.disabled = false;
        newQuoteBtn.textContent = "New Quote";
    }
}

getNewQuote();

newQuoteBtn.addEventListener("click", getNewQuote);
