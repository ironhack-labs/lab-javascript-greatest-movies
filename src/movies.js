// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(allMoviesArray) {
	//console.log(moviesArray.length); // 250

	const directorsArray = allMoviesArray.map(function(movie) {
		return movie.director;
	});

	// solo directores sin repetir nombre
	let uniqueDirectorsArray = directorsArray.filter(function(item, pos) {
		return directorsArray.indexOf(item) == pos;
	});

	return uniqueDirectorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(allMoviesArray) {
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
	let isSpielbergDrama = allMoviesArray.filter(
		(item) => item.genre.includes('Drama') && item.director === 'Steven Spielberg'
	);

	return isSpielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(allMoviesArray) {
	if (allMoviesArray.length === 0) {
		return 0;
	} else {
		const getScores = allMoviesArray.map(function(movie) {
			if (!movie.score) {
				return 0;
			} else {
				return movie.score;
			}
		});

		const getAverage =
			getScores.reduce(function(accumulator, currentValue) {
				return accumulator + currentValue;
			}) / getScores.length;

		return Number(getAverage.toFixed(2));
	}
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(allMoviesArray) {
	// Get Drama movies
	let dramaMovies = allMoviesArray.filter((item) => item.genre.includes('Drama'));

	// Get Score of Drama Movies
	if (dramaMovies.length === 0) {
		return 0;
	} else {
		const getScoreDramaMovies = dramaMovies.map(function(movie) {
			if (!movie.score) {
				return 0;
			} else {
				return movie.score;
			}
		});

		// DO the AVG score of Drama movies
		const getAverageDrama =
			getScoreDramaMovies.reduce(function(accumulator, currentValue) {
				return accumulator + currentValue;
			}) / getScoreDramaMovies.length;

		return Number(getAverageDrama.toFixed(2));
	}
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesByYear) {
	return moviesByYear.map((movie) => movie).sort((movie1, movie2) => (movie1.year > movie2.year ? 1 : -1));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesByTitle) {
	//No puede mutar
	return moviesByTitle
		.map((movie) => movie.title)
		.sort((movie1, movie2) => movie1.localeCompare(movie2))
		.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
	module.exports = {
		getAllDirectors,
		howManyMovies,
		scoresAverage,
		dramaMoviesScore,
		orderByYear,
		orderAlphabetically,
		turnHoursToMinutes,
		bestYearAvg
	};
}
