const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/ping', (req, res) => res.json({ status: 'ok' }));

app.post('/api/sum', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'invalid input' });
  }
  return res.json({ result: a + b });
});

module.exports = app;
