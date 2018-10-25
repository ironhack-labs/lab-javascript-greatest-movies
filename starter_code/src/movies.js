/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
	return moviesArray.map(function(elem) {
		var hours = 0;
		var minutes = 0;
		if (elem.duration.indexOf('h') !== -1) {
			hours = parseInt(elem.duration[0], 10) * 60;
		}
		if (elem.duration.indexOf('min') !== -1) {
			minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
		}
		return Object.assign({}, elem, { duration: hours + minutes });
	});
}
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals
function ratesAverage(moviesArray) {
	var rateReducer = function(acc, elem) {
		var toDigit = parseFloat(elem.rate);

		return (acc += toDigit);
	};

	var ratingVariable = moviesArray.reduce(rateReducer, 0);

	ratingVariable /= moviesArray.length;
	ratingVariable = ratingVariable.toFixed(2);
	ratingVariable = parseFloat(ratingVariable);

	return ratingVariable;
}
ratesAverage(movies);

// Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
	var filterDrama = moviesArray.filter(function(movie) {
		return movie.genre.includes('Drama') == true;
	});
	var rateReducer = function(acc, elem) {
		var toDigit = parseFloat(elem.rate);

		return (acc += toDigit);
	};

	var ratingVariable = filterDrama.reduce(rateReducer, 0);

	ratingVariable /= filterDrama.length;
	ratingVariable = ratingVariable.toFixed(2);
	ratingVariable = parseFloat(ratingVariable);

	return ratingVariable;
}

dramaMoviesRate(movies);

// Order by time duration, in growing order 


// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
