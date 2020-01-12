/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
console.clear();

function orderByYear(movies) {
	const sortedMovies = movies.slice().sort(function(a, b) {
		if (a.year === b.year) {
			return a.title.localeCompare(b.tile);
		}

		return a.year - b.year;
	});

	return sortedMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
	const numberOfMovies = movies.filter(function(movies) {
		if (movies.director === "Steven Spielberg" && movies.genre.includes("Drama")) return true;
	}, 0);

	return numberOfMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
	let alphabeticalOrder = movies.map(function(movies) {
		return movies.title;
	}, 0);

	return alphabeticalOrder.sort().slice(0, 20);
}

orderAlphabetically(movies);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
	if (movies != "") {
		var averages = movies.reduce(function(averages, movie) {
			if (movie.rate) {
				return averages + movie.rate;
			} else {
				return averages + 0;
			}
		}, 0);

		return parseFloat((averages / movies.length).toFixed(2));
	} else return 0;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
	let averageDrama = movies.reduce(function(averageDrama, movie) {
		//	console.log(averageDrama);
		if (movie.rate && movie.genre.includes("Drama")) {
			console.log("hi " + movie.rate);
			return averageDrama + movie.rate;
		} else {
			return averageDrama + 0;
		}
	}, 0);

	//	console.log(averageDrama);

	return parseFloat((averageDrama / movies.length).toFixed(2));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
	const moviesInMinutes = movies.map(function(value) {
		let minutes = value.duration.split(" ");
		let result;

		if (minutes.length === 1 && minutes[0].indexOf("m") != -1) {
			result = parseInt(minutes[0]);
		} else if (minutes.length === 1 && minutes[0].indexOf("h") != -1) {
			result = parseInt(minutes[0]) * 60;
		} else if (minutes.length > 1) {
			result = parseInt(minutes[0]) * 60 + parseInt(minutes[1]);
		} else return 0;

		return {
			...value,
			duration: result
		};
	});

	return moviesInMinutes;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
