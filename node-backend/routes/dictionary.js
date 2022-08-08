const express = require("express");
const getWordFromDictionary = require("../contorllers/dictionary");

const router = express.Router();

router.route("/").get(getWordFromDictionary);

module.exports = router;
