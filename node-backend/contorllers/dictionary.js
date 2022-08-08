const connectDB = require("../db");

const getWordFromDictionary = (req, res, next) => {
  const connection = connectDB();
  const word = req.query.word;
  connection.connect((err) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, data: null, messaage: "Something went wrong" });
    }
    const query = `SELECT * FROM ${process.env.DB_NAME} WHERE word = '${word}'`;
    connection.query(query, function (err, results) {
      if (err) {
        return res
          .status(404)
          .json({ success: false, data: [], message: "Word not found" });
      }
      console.log("Results: ", results);
      res
        .status(200)
        .json({ success: true, data: [], message: "Successfully found" });
    });
  });
};

module.exports = getWordFromDictionary;
