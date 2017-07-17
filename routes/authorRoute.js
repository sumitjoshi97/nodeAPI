const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('author');
})





module.exports = router;