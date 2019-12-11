var express = require('express');
var router = express.Router();
var moviesController = require("../controllers/moviesController");
/* GET users listing. */
router.get('/', moviesController.index);
router.get('/:movieId', moviesController.load, moviesController.show);
router.post('/', moviesController.create);
router.put('/:movieId', moviesController.load, moviesController.edit);
router.delete('/:movieId', moviesController.destroy);

module.exports = router;
