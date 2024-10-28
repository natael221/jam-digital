const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/quote', (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
