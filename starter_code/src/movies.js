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
function ratesAverage(arr) {
	var rate = arr.reduce(function(sum, word) {
		return sum + parseInt(word.rate);
	}, 0);

	return Math.round(rate / arr.length * 100) / 100;
}

// Get the average of Drama Movies
function dramaMoviesRate(arr) {
	var drama = arr.filter(function(e) {
		return e.genre.indexOf('Drama') != -1;
	});
	return ratesAverage(drama);
}

// Order by time duration, in growing order
function orderByDuration(arr) {
	var duration = arr.sort(function(a, b) {
		return a.duration - b.duration;
	});
	return duration;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies (arr){
  var spielbergDrama = arr.filter(function(e) {
    return (e.director === "Steven Spielberg") && (e.genre.indexOf("Drama") >= 0);
  });
  return spielbergDrama;
}


// Order by title and print the first 20 titles
function orderAlphabetically (arr){

}

// Best yearly rate average


