const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.getElementById("quote-text");
const author = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

async function getNewQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        if (!response.ok) {
            throw new Error("Failed to fetch a new quote.");
        }
        const data = await response.json();
        quoteText.textContent = data.content;
        author.textContent = `- ${data.author}`;
    } catch (error) {
        console.error(error);
        quoteText.textContent = "An error occurred while fetching the quote.";
        author.textContent = "";
    }
}

// Initial load of a quote
getNewQuote();

// Event listener for the "New Quote" button
newQuoteButton.addEventListener("click", getNewQuote);
