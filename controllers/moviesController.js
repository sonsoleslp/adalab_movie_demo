var { movies } = require("../models");

exports.index = (req, res, next) => {
	const { genre } = req.query;
	let results = movies.filter(movie => {
		return genre ? movie.genres.indexOf(genre) !== -1 : true;
	});

	res.send(results);
}
