const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

const getRandomQuote = () => {
    const quotes = JSON.parse(fs.readFileSync('quotes.json'));
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};

app.get('/quote', (req, res) => {
    const quote = getRandomQuote();
    res.json({ quote });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
