const express = require('express');
const app = express();

app.get('/home', (req, res) => {
  res.send('<title>HOME</title><body><p>HOME</p></body>');
});

app.get('/student', (req, res) => {
  res.send('<title>STUDENT</title><body><p>STUDENT</p></body>');
});

app.get('/add-student', (req, res) => {
  res.send('<title>ADD-STUDENT</title><body><p>ADD-STUDENT</p></body>');
});

app.listen(3000, () => {
  console.log('Serwer nasłuchuje na porcie 3000...');
});