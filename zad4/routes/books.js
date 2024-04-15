const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/list', booksController.getBooks);

router.post('/add', booksController.addBook);

router.delete('/delete/:id', booksController.deleteBook);

router.get('/:id', booksController.getBook);

module.exports = router;