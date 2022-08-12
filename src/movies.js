// METHODS
// MAP - FILTER - FOR EACH - SORT - REDUCE - REVERSE

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
	return moviesArray.map(function (movie) {
		return movie.director;
	});
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
	if (moviesArray.length === 0) {
		return 0;
	}
	return moviesArray.filter(function (movie) {
		return (
			movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
		);
	}).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
	if (moviesArray.length === 0) {
		return 0;
	}
	return +(
		moviesArray.reduce(function (acc, movie) {
			if (movie.score === undefined) {
				return acc;
			}
			return acc + movie.score;
		}, 0) / moviesArray.length
	).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
	const drama = moviesArray.filter(function (movie) {
		return movie.genre.includes('Drama');
	});

	if (drama.length === 0) return 0;

	return +(
		drama.reduce(function (acc, movie) {
			if (movie.score === undefined) {
				return acc;
			}
			return acc + movie.score;
		}, 0) / drama.length
	).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
	const newArr = [...moviesArray];

	return newArr.sort(function (a, b) {
		if (a.year === b.year) {
			return a.title.localeCompare(b.title);
		}
		return a.year - b.year;
	});
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
	const newArr = [...moviesArray];

	const newArrSorted = newArr.sort(function (a, b) {
		if (a.year === b.year) {
			return a.title.localeCompare(b.title);
		}
		return a.year - b.year;
	});
	const finalArr = [];
	let numbIt = newArrSorted.length;
	if (newArrSorted.length > 20) {
		numbIt = 20;
	}
	for (let i = 0; i < numbIt; i++) {
		let title = newArrSorted[i].title;
		finalArr.push(title);
	}
	return finalArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
	const newArr = [...moviesArray];
	return newArr.map(function (movie) {
		let dur = movie.duration;
		let hours = 0;
		let mins = 0;
		if (dur.includes('h')) {
			hours = +dur.split('h')[0];
		}
		if (dur.includes('min')) {
			mins = +dur.slice(dur.indexOf('min') - 2, dur.indexOf('min'));
		}

		let time = hours * 60 + mins;

		return { ...movie, duration: time };
	});
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
	if (moviesArray.length === 0) {
		return null;
	}
	const newArr = [...moviesArray];
	const years = [];
	newArr.forEach(function (movie) {
		if (!years.includes(movie.year)) {
			years.push(movie.year);
		}
	});
	let scoresByYear = [];
	years.forEach(function (year) {
		scoresByYear.push({ year: year, scores: [], avg: 0 });
	});

	newArr.forEach(function (movie) {
		let year = movie.year;
		for (let i = 0; i < years.length; i++) {
			if (year === scoresByYear[i].year) {
				scoresByYear[i].scores.push(movie.score);
				scoresByYear[i].avg =
					scoresByYear[i].scores.reduce(function (acc, val) {
						return acc + val;
					}, 0) / scoresByYear[i].scores.length;
			}
		}
	});
	let greatYear = 0;
	let greatAvg = 0;
	scoresByYear.sort(function (a, b) {
		return a.year - b.year;
	});

	for (let year of scoresByYear) {
		if (year.avg > greatAvg) {
			greatYear = year.year;
			greatAvg = year.avg;
		}
	}

	return `The best year was ${greatYear} with an average score of ${greatAvg}`;
}
