// Array di frasi motivazionali
const quotes = [
  "Believe in yourself and all that you are!",
  "Every day is a new opportunity to shine!",
  "Dream big, work hard, and stay positive!",
  "You are capable of amazing things!",
  "Never give up on your dreams!"
];

// Seleziona il box della frase
const quoteBox = document.getElementById("quote");

// Genera una frase casuale
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quoteBox.textContent = randomQuote;
