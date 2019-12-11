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

exports.load = (req, res, next) => {
	const { movieId } = req.params;
	const movie = movies.find(movie => movie.id.toString() === movieId.toString());
	if (movie) {
		req.movie = movie;
		next();
	} else {
		res.status(404);
		res.send("Movie not found");
	}
}

exports.show = (req, res, next) => {
	res.send(req.movie);
}

exports.create = (req, res, next) => {
	const id = movies.length > 0 ? (movies[movies.length - 1].id + 1) : 1;
	const {title, year, runtume, genres, director, actors, plot, posterUrl} = req.body;
	const movie = {id, title, year, runtume, genres, director, actors, plot, posterUrl};
	movies.push(movie);
	res.send(movie);

} 

exports.edit = (req, res, next) => {
	const props = ["title", "year", "runtime", "genres", "director", "actors", "plot", "posterUrl"];
	for (let prop of props) {
		if (req.body[prop] !== undefined) {
			req.movie[prop] = req.body[prop];
		}
	}
	res.send(req.movie);
} 

exports.destroy = (req, res, next) => {
	const { movieId } = req.params;
	const movieIndex = movies.findIndex(movie => movie.id.toString() === movieId.toString());
	if (movieIndex !== -1) {
		movies.splice(movieIndex, 1);
		res.send("Movie deleted successfully");
	} else {
		res.status(404);
		res.send("Movie not found");
	}
}