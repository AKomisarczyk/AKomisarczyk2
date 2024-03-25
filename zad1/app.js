const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Ustawienie katalogu dla widoków
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// Middleware dla serwowania statycznych plików
app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

app.get('/student', (req, res) => {
    res.render('student', { title: 'Student' });
});

// Nasłuchiwanie na porcie 3000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});