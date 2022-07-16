// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
	return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
	return moviesArray.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
	const avg =
		moviesArray.reduce((acc, movie) => {
			return acc + (movie.score || 0);
		}, 0) / moviesArray.length;
	return Math.round(avg * 100) / 100 || 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
	const dramaMovies = moviesArray.filter((movie) => {
		return movie.genre.includes('Drama');
	});
	const avg =
		dramaMovies.reduce((acc, movie) => {
			return acc + movie.score;
		}, 0) / dramaMovies.length;
	// round to two decimals
	return Math.round(avg * 100) / 100 || 0;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
	return [ ...moviesArray ].sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
	return moviesArray.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20).map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
	return moviesArray.map((movie) => {
		// regex to match hours and minutes
		const regex = /(\d+)h ?(\d+)?m?/;
		const match = regex.exec(movie.duration);
		if (match) {
			const hours = parseInt(match[1]) || 0;
			const minutes = parseInt(match[2]) || 0;
			movie.duration = hours * 60 + minutes;
		}
		return movie;
	});
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
	if (moviesArray.length === 0) return null;
	const years = moviesArray.reduce((acc, movie) => {
		if (acc[movie.year]) {
			acc[movie.year].push(movie);
		} else {
			acc[movie.year] = [ movie ];
		}
		return acc;
	}, {});
	const bestYear = Object.keys(years).reduce(
		(acc, year) => {
			const avg =
				years[year].reduce((acc, movie) => {
					return acc + movie.score;
				}, 0) / years[year].length;
			return avg > acc.avg ? { year, avg } : acc;
		},
		{ avg: 0 }
	);

	return `The best year was ${bestYear.year} with an average score of ${bestYear.avg}`;
}
