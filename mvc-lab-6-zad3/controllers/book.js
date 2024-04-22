const Book = require('../models/Book');


exports.getBooksList = (req, res) => {
    const userid = req.session.userId; 
    res.render('books', { title: 'Books', userid }); 
};