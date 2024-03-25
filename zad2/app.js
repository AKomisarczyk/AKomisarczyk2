const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

let students = [];

app.get('/home', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <h1>Home</h1>
      </body>
    </html>
  `);
});

app.get('/student', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Student</title>
      </head>
      <body>
        <h1>Student</h1>
      </body>
    </html>
  `);
});

app.get('/add-student', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Add Student</title>
      </head>
      <body>
        <h1>Add Student</h1>
        <form action="/student" method="POST">
          <label for="firstName">First Name:</label><br>
          <input type="text" id="firstName" name="firstName"><br>
          <label for="lastName">Last Name:</label><br>
          <input type="text" id="lastName" name="lastName"><br>
          <label for="direction">Kierunek:</label><br> <!-- Zmiana etykiety 'DIRECTION' na 'Kierunek' -->
          <input type="text" id="direction" name="direction"><br><br>
          <input type="submit" value="Submit">
        </form>
      </body>
    </html>
  `);
});

app.post('/student', (req, res) => {
  const { firstName, lastName, direction } = req.body;
  students.push({ firstName, lastName, direction });
  res.send(`
    <html>
      <head>
        <title>Student Added</title>
      </head>
      <body>
        <h1>Student Added</h1>
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Kierunek: ${direction}</p> <!-- Zmiana wyświetlanej nazwy etykiety -->
      </body>
    </html>
  `);
});

app.get('/users', (req, res) => {
  const userList = students.map(student => `<p>${student.firstName} ${student.lastName} - ${student.direction}</p>`).join('');
  res.send(`
    <html>
      <head>
        <title>Users</title>
      </head>
      <body>
        <h1>Users</h1>
        ${userList}
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Serwer nasłuchuje na porcie 3000...');
});