exports.getAddNewStudentPage = (req, res) => {
    res.render('Home', { title: 'Add new student' });
};

exports.postAddNewStudent = (req, res) => {
    // Pobranie danych z formularza
    const { fullName, code, fieldOfStudies } = req.body;
    const newStudent = {
        fullName: fullName,
        code: code,
        fieldOfStudies: fieldOfStudies
    };

    studentsList.push(newStudent);

    res.redirect('/List');
};