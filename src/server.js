const fs = require('fs');
const express = require('express');
const indexTemplate = fs.readFileSync('public/index.template.html', 'utf8');

const PORT = 80;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send(indexTemplate);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
