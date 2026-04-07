const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let items = [];

app.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.send('Item added successfully');
});

app.get('/items', (req, res) => {
    res.json(items);
});

app.delete('/items/:index', (req, res) => {
    const index = req.params.index;
    items.splice(index, 1);
    res.send('Item deleted successfully');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});