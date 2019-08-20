const express = require ('express');
const book = require ('../Routes/book');

const router = express.Router ();

router.use ('/book', book);

module.exports = router;
