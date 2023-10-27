const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.getElementById("quote-text");
const author = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

// async function getNewQuote() {
//     try {
//         const response = await fetch("https://api.quotable.io/random");
//         if (!response.ok) {
//             throw new Error("Failed to fetch a new quote.");
//         }
//         const data = await response.json();
//         quoteText.textContent = data.content;
//         author.textContent = `- ${data.author}`;
//     } catch (error) {
//         console.error(error);
//         quoteText.textContent = "An error occurred while fetching the quote.";
//         author.textContent = "";
//     }
// }

const loader = document.getElementById("loader");

async function getNewQuote() {
    try {
        // Show the loader while fetching the quote
        loader.style.display = "block";

        // Disable the "New Quote" button while fetching the quote
        newQuoteButton.disabled = true;

        newQuoteButton.textContent = "LOADING...";

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
    } finally {
        // Hide the loader after the quote is loaded or an error occurs
        loader.style.display = "none";
        // Enable the "New Quote" button after the quote is loaded or an error occurs
        newQuoteButton.disabled = false;

        newQuoteButton.textContent = "New Quote";
    }
}

// Initial load of a quote
getNewQuote();

// Event listener for the "New Quote" button
newQuoteButton.addEventListener("click", getNewQuote);
