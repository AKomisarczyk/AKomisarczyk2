const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));

let students = [];

app.use((req, res, next) => {
    console.log(`Request ${req.method} on path ${req.url} ${new Date()}`);
    next();
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/student', (req, res) => {
    res.sendFile(__dirname + '/views/student.html');
});

app.get('/add-student', (req, res) => {
    res.sendFile(__dirname + '/views/add-student.html');
});

app.get('/users', (req, res) => {
    let usersList = students.map(student => `<p>${student.firstName} ${student.lastName} - ${student.major}</p>`).join('');
    res.send(`<h1>Users</h1>${usersList}`);
});

app.post('/add-student', (req, res) => {
    const { firstName, lastName, studentId, major } = req.body;
    const newStudent = { firstName, lastName, studentId, major };
    students.push(newStudent);
    res.redirect('/users');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});