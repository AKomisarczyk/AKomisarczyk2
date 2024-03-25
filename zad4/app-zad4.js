const express = require('express');
const path = require('path');
const fs = require('fs');
const routes = require('./routes/index');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); 

app.use('/', routes);

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.post('/student', (req, res) => {
    const { code, name, lastname, gender, age, studyField } = req.body;

    const fileName = `${code}.txt`;
    const fileContent = `Numer albumu: ${code}\nImię: ${name}\nNazwisko: ${lastname}\nPłeć: ${gender}\nWiek: ${age}\nKierunek: ${studyField}`;
    fs.writeFile(fileName, fileContent, (err) => {
        if (err) throw err;
        console.log(`Dane zostały zapisane do pliku ${fileName}`);
    });

    res.render('student', { title: 'Student profile', code, name, lastname, gender, age, studyField });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});