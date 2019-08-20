const modelBook = require ('../Models/book');
const formResponse = require ('../Helpers/formResponse');
module.exports = {
  // getAllBook: (req, res) => {
  //   modelBook.getAllBook ((error, response) => {
  //     const formResponse = {
  //       status: 200,
  //       data: response,
  //     };
  //     if (error) {
  //       console.log (error);
  //     } else {
  //       res.json (formResponse);
  //     }
  //   });
  // },
  getAllBookPromise: (req, res) => {
    modelBook
      .getAllBookPromise ()
      .then (response => {
        formResponse.success (res, 200, response);
      }) //resolve
      .catch (error => console.log (error)); //reject
  },
  getBookByTitle: (req, res) => {
    const title = req.params.title;
    modelBook
      .getBookByTitle (title)
      .then (response => {
        formResponse.success (res, 200, response);
      })
      .catch (error => console.log (error));
  },
  getBookById: (req, res) => {
    const id = req.params.id;
    modelBook
      .getBookById (id)
      .then (response => {
        formResponse.success (res, 200, response);
      })
      .catch (error => console.log (error));
  },
  postBook: (req, res) => {
    const reqBody = {
      title: req.body.title,
      author: req.body.author,
    };
    modelBook
      .postBook (reqBody)
      .then (response => {
        formResponse.success (res, 200, response);
      })
      .catch (error => console.log (error));
  },
};
