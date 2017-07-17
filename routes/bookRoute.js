const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');

router.get('/', (req, res) => {

    const query = {};

    if (req.query.genre) {
        query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(books);
        }
    });
    // res.json(responseJSON);
});

router.post('/', (req, res) => {
    const book = new Book(req.body);
    book.save();
    // console.log(book);
    res.status(201).send(book);
})

router.get('/:bookId', (req, res) => {
    Book.findById(req.params.bookId, (err, book) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(book);
        }
    });
});

router.put('/:bookId', (req,res)=> {
    Book.findById(req.params.bookId, (err, book) => {
        if (err) {
            res.status(500).send(err);
        } else {
            book.title = req.body.title;
            book.author = req.body.author;
            book.genre = req.body.genre;
            book.read = req.body.read;
            book.save();

            res.json(book);
        }
    });
})

router.patch()


module.exports = router;