const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Fungsi untuk mengambil quotes secara acak
function getRandomQuote() {
    const quotesPath = path.join(__dirname, 'quotes.json');
    const quotes = JSON.parse(fs.readFileSync(quotesPath, 'utf8'));
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Endpoint untuk mendapatkan quote secara acak
app.get('/quote', (req, res) => {
    const quote = getRandomQuote();
    res.json({ quote });
});

module.exports = app; // Ekspor aplikasi untuk Vercel
