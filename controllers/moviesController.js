var movies = require("../models/index");

exports.index = (req, res, next) => {
	res.send(movies);
}
