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

function ratesAverage(movies) {
	var scores = movies.map(function(movies) {
		return movies.rate * 1;
	});
	var averageScore = (scores.reduce((prev, next) => prev + next, 0) / scores.length).toFixed(2);
	//return scores;

	return averageScore;
}
console.log(ratesAverage(movies));

// Get the average of Drama Movies
function dramaMoviesRate(movielist) {}
// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
	var counter = 0;

	var dramaMovies = movies.map(function(movies) {
		let result = movies.genre.find((genre) => genre === 'Drama');
		return result;
	});
	//console.log(dramaMovies);

	let searchSpielberg = movies.map(function(movies) {
		if (movies.director === 'Steven Spielberg' && dramaMovies != undefined) {
			counter++;
			return true;
		} else if (movies.director !== 'Steven Spielberg') {
			return 'Steven Spielberg directed 0 drama movies!';
		} else {
			counter;
		}
	});

	if (counter > 0) {
		return 'Steven Spielberg directed ' + counter + ' drama movies!';
	} else {
		return undefined;
	}
}

console.log(howManyMovies(movies));
// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
	var topTwenty = [];

	var orderedTitles = movies.map(function(movies) {
		return movies.title;
	});
	orderedTitles.sort();

	if (orderedTitles.length <= 20) {
		topTwenty = orderedTitles;
	} else {
		for (var i = 0; i < 20; i++) {
			topTwenty.push(orderedTitles[i]);
		}
		return topTwenty;
	}

	return orderedTitles;
}

console.log(orderAlphabetically(movies));
// Best yearly rate average
