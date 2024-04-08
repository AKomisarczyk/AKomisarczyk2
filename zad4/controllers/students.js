let students = [];
let nextId = 1;

exports.getAddNewStudentPage = (req, res) => {
    res.render('Home', { title: 'Add new student' });
};

exports.postAddNewStudent = (req, res) => {
    const { fullName, code, fieldOfStudies } = req.body;

    const newStudent = {
        id: nextId++, 
        fullName: fullName,
        code: code,
        fieldOfStudies: fieldOfStudies
    };

    students.push(newStudent);

    res.redirect('/Success');
};

exports.getAddingNewStudentSuccessPage = (req, res) => {
    res.render('Success', { message: 'Student has been added with success!' });
};

exports.getStudentsListPage = (req, res) => {
    res.render('List', { students: students });
};