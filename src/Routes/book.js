const express = require ('express');
const book = require ('../Controllers/book');

const router = express.Router ();

// router.get ('/callback', book.getAllBook);
router.get ('/', book.getAllBookPromise);
router.get ('/title/:title', book.getBookByTitle);
router.get ('/id/:id', book.getBookById);
router.post ('/', book.postBook);

module.exports = router;
