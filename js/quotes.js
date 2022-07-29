const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quoteContainer = document.querySelector("#quote");
const fullQuoteContainer = document.querySelector("#full-quote__container");
const fullQuote = document.querySelector("#full-quote span:first-child");
const fullAuthor = document.querySelector("#full-quote span:last-child");

fetch("https://api.qwer.pw/request/helpful_text?apikey=guest")
  .then((response) => response.json())
  .then((json) => {
    quote.innerText = json[1].respond;
    const text = json[1].respond.split(/[–-]/);

    fullQuote.innerText = text[0];
    fullAuthor.innerText = `-${text[1]}`;

    if (text[0].length > 20) {
      quote.innerText = `${text[0].substr(0, 20)}...`;
    } else {
      quote.innerText = text[0];
    }
    author.innerText = `-${text[1]}`;
  })
  .catch((err) => console.error(err));

function toggleFullQuote() {
  fullQuoteContainer.classList.toggle("hidden");
}

quoteContainer.addEventListener("click", toggleFullQuote);
fullQuoteContainer.addEventListener("click", toggleFullQuote);
