const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/student', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'student.html'));
});

app.get('/add-student', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'add-student.html'));
});

app.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'users.html'));
});

app.listen(3000, () => {
  console.log('Serwer nasłuchuje na porcie 3000...');
});