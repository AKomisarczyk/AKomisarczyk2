const authors = [
    { id: 1, name: 'Author 1' },
    { id: 2, name: 'Author 2' }
];

exports.getAuthors = (req, res) => {
    res.render('authors', { authors });
};