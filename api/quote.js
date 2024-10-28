const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/quote', (req, res) => {
  // Ganti dengan path yang sesuai dengan lokasi quotes.json
  fs.readFile('api/quotes.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading quotes file.');
    }
    try {
      const quotes = JSON.parse(data).quotes;
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      res.json({ quote: randomQuote });
    } catch (parseError) {
      return res.status(500).send('Error parsing quotes data.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
