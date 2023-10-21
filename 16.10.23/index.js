const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/kontakt', (req, res) => {
  res.sendFile(path.join(__dirname, 'kontakt.html'));
});

app.listen(port, () => {
    console.log(`Aplikacja działa na porcie ${port}`);
  });