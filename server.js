const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = mongoose.connect('mongodb://localhost/bookAPI');
// const Book = require('./models/bookModel');

const bookRouter = require('./routes/bookRoute');
const authorRouter = require('./routes/authorRoute');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/books', bookRouter);
app.use('/api/authors', authorRouter);

app.get('/', (req, res) => {
    res.send('API')
});


app.listen(port, () => {
    console.log('running at', port)
});