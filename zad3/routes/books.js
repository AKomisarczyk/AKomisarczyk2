const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

// Routing dla ścieżki '/book/list'
router.get('/list', booksController.getBooks);

// Routing dla ścieżki '/book/add'
router.post('/add', booksController.addBook);

// Routing dla ścieżki '/book/delete/:id'
router.delete('/delete/:id', booksController.deleteBook);

module.exports = router;