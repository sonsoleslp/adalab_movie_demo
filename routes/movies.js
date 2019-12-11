var express = require('express');
var router = express.Router();
var moviesController = require("../controllers/moviesController");
/* GET users listing. */
router.get('/', moviesController.index);

module.exports = router;
