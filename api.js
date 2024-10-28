const express = require('express');
const fs = require('fs/promises');
const app = express();
const PORT = process.env.PORT || 3000;

const getRandomQuote = async () => {
    try {
        const data = await fs.readFile('quotes.json', 'utf8');
        const quotes = JSON.parse(data);
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    } catch (error) {
        console.error('Error reading quotes.json:', error);
        return 'Peler.';
    }
};

app.get('/quote', async (req, res) => {
    const quote = await getRandomQuote();
    res.json({ quote });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
