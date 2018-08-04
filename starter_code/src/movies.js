/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

var turnHoursToMinutes = movies.map(function(movies) {
	movies.duration = movies.duration.match(/\d+/g);
	var hours = movies.duration[0] * 60;
	var minutes = movies.duration[1] * 1;

	movies.duration = hours + minutes;
});
console.log(movies);
// Get the average of all rates with 2 decimals
var ratesAverage = movies.map(function(movie) {
	var moviescores = parseFloat(movie.rate);

	var movierates = [ 9.3, 9.2, 9 ];
	var rates = movierates.reduce(function(sum, score) {
		return sum + score;
	}, 0);
	return rates;
});
console.log(ratesAverage);
// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
