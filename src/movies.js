// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
	return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
	if (!moviesArray || moviesArray.length === 0) return 0;
	return moviesArray.filter(
		movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
	).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
	if (!moviesArray || moviesArray.length === 0) return 0;
	const total = moviesArray.reduce((sum, movie) => {
		if (typeof movie.score === 'number') {
			return sum + movie.score;
		}
		return sum;
	}, 0);
	const count = moviesArray.filter(movie => typeof movie.score === 'number').length;
	if (count === 0) return 0;
	return Number((total / count).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
	if (!moviesArray || moviesArray.length === 0) return 0;
	const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
	if (dramaMovies.length === 0) return 0;
	const total = dramaMovies.reduce((sum, movie) => {
		if (typeof movie.score === 'number') {
			return sum + movie.score;
		}
		return sum;
	}, 0);
	const count = dramaMovies.filter(movie => typeof movie.score === 'number').length;
	if (count === 0) return 0;
	return Number((total / count).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
	if (!moviesArray || moviesArray.length === 0) return [];
	const moviesCopy = moviesArray.slice();
	moviesCopy.sort((a, b) => {
		if (a.year !== b.year) {
			return a.year - b.year;
		} else {
			return a.title.localeCompare(b.title);
		}
	});
	return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
	if (!moviesArray || moviesArray.length === 0) return [];
	const titles = moviesArray.map(movie => movie.title);
	titles.sort((a, b) => a.localeCompare(b));
	return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
	if (!moviesArray || moviesArray.length === 0) return [];
	return moviesArray.map(movie => {
		const newMovie = { ...movie };
		if (typeof newMovie.duration === 'string') {
			let totalMinutes = 0;
			const hourMatch = newMovie.duration.match(/(\d+)h/);
			const minMatch = newMovie.duration.match(/(\d+)min/);
			if (hourMatch) totalMinutes += parseInt(hourMatch[1], 10) * 60;
			if (minMatch) totalMinutes += parseInt(minMatch[1], 10);
			newMovie.duration = totalMinutes;
		}
		return newMovie;
	});
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
	if (!moviesArray || moviesArray.length === 0) return null;
	const yearScores = {};
	moviesArray.forEach(movie => {
		if (typeof movie.score === 'number') {
			if (!yearScores[movie.year]) {
				yearScores[movie.year] = [];
			}
			yearScores[movie.year].push(movie.score);
		}
	});
	let bestYear = null;
	let bestAvg = 0;
	for (const year in yearScores) {
		const scores = yearScores[year];
		const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
		if (
			avg > bestAvg ||
			(avg === bestAvg && (bestYear === null || Number(year) < Number(bestYear)))
		) {
			bestAvg = avg;
			bestYear = year;
		}
	}
	return `The best year was ${bestYear} with an average score of ${bestAvg.toFixed(1)}`;
}
