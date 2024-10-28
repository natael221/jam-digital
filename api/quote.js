const express = require('express');
const fs = require('fs');

const app = express();

app.get('/api/quote', (req, res) => {
  fs.readFile('quotes.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading quotes file.');
    }
    const quotes = JSON.parse(data).quotes;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.json({ quote: randomQuote });
  });
});

module.exports = app; // Ekspor app untuk digunakan oleh Vercel
