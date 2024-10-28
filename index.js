const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Membaca file JSON
app.get('/random-quote', (req, res) => {
  fs.readFile('quotes.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file.');
      return;
    }
    
    const quotes = JSON.parse(data).quotes;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    res.json({ quote: randomQuote });
  });
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
