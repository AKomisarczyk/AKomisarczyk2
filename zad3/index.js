const express = require('express');
const router = express.Router();

router.get('/', handleHome);

router.get('/student', handleStudent);
router.post('/student', handleStudentPost);

function handleHome(req, res) {
    res.render('home', { title: 'Home' });
}

function handleStudent(req, res) {
    res.render('student', { title: 'Student' });
}

function handleStudentPost(req, res) {
    res.redirect('/student');
}

module.exports = router;