const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const bookRouter = express.Router();
bookRouter.get('/books', (req, res) => {
    let responseJSON = { hello: "api" };
    res.json(responseJSON);
});

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('API')
});


app.listen(port, () => {
    console.log('running at', port)
});