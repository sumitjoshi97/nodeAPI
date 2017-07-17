const express = require('express');

const routes = function () {
    const bookRouter = express.Router();
    const Book = require('../models/bookModel');

    bookRouter.get('/books', (req, res) => {

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

    bookRouter.post('/books', (req, res) => {
        const book = new Book(req.body);
        book.save();
        // console.log(book);
        res.status(201).send(book);
    })

    bookRouter.get('./books/:bookId', (req, res) => {
        Book.findById(req.params.bookId, (err, book) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(book);
            }
        });
    });
    return bookRouter;
}

module.exports = routes;