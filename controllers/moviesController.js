var { movies } = require("../models");

exports.index = (req, res, next) => {
	const { genre, yearBefore, yearAfter, director } = req.query;
	let results = movies.filter(movie => {
		if (genre && movie.genres.indexOf(genre) === -1) {
			return false;
		} 

		if (yearBefore && movie.year >= yearBefore) {
			return false;
		}

		if (yearAfter && movie.year <= yearAfter) {
			return false;
		}

		if (director && !movie.director.match(director.trim())) {
			return false;
		}
		
		return true;
	});

	res.send(results);
}
