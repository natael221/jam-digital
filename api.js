const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const getRandomQuote = () => {
    try {
        // Gunakan path.join untuk memastikan path yang benar
        const filePath = path.join(__dirname, 'quotes.json');
        const quotes = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    } catch (error) {
        console.error('Error reading quotes.json:', error);
        return 'Failed to load quotes.';
    }
};

app.get('/quote', (req, res) => {
    const quote = getRandomQuote();
    res.json({ quote });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
