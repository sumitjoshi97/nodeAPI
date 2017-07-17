const express = require('express');
const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/bookAPI');
const Book = require('./models/bookModel');
const app = express();
const port = process.env.PORT || 3000;

const bookRouter = express.Router();
bookRouter.get('/books', (req, res) => {
    
    const query = {};

    if(req.query.genre) {
        query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.json(books);
        }
    });
    // res.json(responseJSON);
});

bookRouter.get('./books/:bookId', (req,res) => {
    Book.findById(req.params.bookId, (err, book) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.json(book);
        }
    });
});

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('API')
});


app.listen(port, () => {
    console.log('running at', port)
});