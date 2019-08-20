const db = require ('../Configs/dbConnect');
module.exports = {
//   getAllBook: callback => {
//     db.query ('SELECT * FROM books', (error, response) => {
//       if (error) console.log (error);
//       callback (error, response);
//     });
//   },
  getAllBookPromise: () => {
    return new Promise ((resolve, reject) => {
      db.query ('SELECT * FROM books', (error, response) => {
        if (!error) {
          resolve (response);
        } else {
          reject (error);
        }
      });
    });
  },
  getBookByTitle: title => {
    return new Promise ((resolve, reject) => {
      db.query (
        'SELECT * FROM books WHERE title=?',
        [title],
        (error, response) => {
          if (!error) {
            resolve (response);
          } else {
            reject (error);
          }
        }
      );
    });
  },
  getBookById: id => {
    return new Promise ((resolve, reject) => {
      db.query ('SELECT * FROM books WHERE id=?', [id], (error, response) => {
        if (!error) {
          resolve (response);
        } else {
          reject (error);
        }
      });
    });
  },
  postBook: body => {
    return new Promise ((resolve, reject) => {
      db.query (
        'INSERT INTO books SET title=?, author=?',
        [body.title, body.author],
        (error, response) => {
          if (!error) {
            resolve (response);
          } else {
            reject (error);
          }
        }
      );
    });
  },
};
