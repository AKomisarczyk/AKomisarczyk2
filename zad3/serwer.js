const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

const studentsController = require('./controllers/students');
const errorController = require('./controllers/error');

app.get('/', studentsController.getAddNewStudentPage);
app.post('/add-student', studentsController.postAddNewStudent);
app.get('/success', (req, res) => {
    res.render('Success');
});
app.get('/List', (req, res) => {
    res.render('List');
});
app.get('*', errorController.getNotFoundPage);

app.listen(PORT, () => {
    console.log(`Serwer jest uruchomiony na porcie ${PORT}`);
});