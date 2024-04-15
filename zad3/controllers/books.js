const books = [
    { id: 1, title: 'Book 1', publishingYear: 2022, authorId: 1 },
    { id: 2, title: 'Book 2', publishingYear: 2020, authorId: 2 }
];

exports.getBooks = (req, res) => {
    res.render('books', { books });
};