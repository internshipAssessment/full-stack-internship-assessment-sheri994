const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/sum', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: "Invalid input" });
  }
  res.json({ sum: a + b });
});

module.exports = app;
