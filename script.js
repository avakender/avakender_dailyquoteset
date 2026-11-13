// 1. Our list of five quotes. Each one is an "object" with text and an author.
const quotes = [
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis"
  },
  {
    text: "Happiness depends upon ourselves.",
    author: "Aristotle"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  }
];

// 2. Grab the parts of the page we want to change (using their ids from the HTML)
const quoteBox = document.querySelector(".quote-box");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const button = document.getElementById("new-quote-btn");

// Remember which quote is showing, so we don't repeat it twice in a row
let currentIndex = 0;

// 3. A function that picks a random quote and shows it
function showNewQuote() {
  let newIndex;

  // Keep picking until we get a different quote than the current one
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === currentIndex);

  currentIndex = newIndex;

  // Fade the old quote out...
  quoteBox.classList.add("fade");

  // ...wait 300ms, swap the text, then fade back in
  setTimeout(function () {
    quoteText.textContent = quotes[newIndex].text;
    quoteAuthor.textContent = quotes[newIndex].author;
    quoteBox.classList.remove("fade");
  }, 300);
}

// 4. When the button is clicked, run showNewQuote
button.addEventListener("click", showNewQuote);
