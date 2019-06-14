/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
	return movies.map((movie) => {
		let newMovieTime = { ...movie };
		let hours = 0;
		let minutes = 0;
		if (movie.duration.indexOf('h') !== -1) {
			hours = movie.duration.split('h')[0];
		}
		if (movie.duration.indexOf('min') !== -1) {
			if (movie.duration.indexOf(' ') !== -1) {
				minutes = movie.duration.split(' ')[1].split('min')[0];
			} else {
				minutes = movie.duration.split('min')[0];
			}
		}
		newMovieTime.duration = parseInt(hours * 60) + parseInt(minutes);
		return newMovieTime;
	});
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
	return (
		movies.reduce((sumRates, movie) => {
			if (movie.rate !== '') {
				return sumRates + Number(movie.rate);
			}
			return sumRates;
		}, 0) / movies.length
	);
}

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
	let dramaMovies = movies.filter((movie) => {
		if (movie.genre.indexOf('Drama') !== -1) {
			return true;
		}
		return false;
	});
	if (dramaMovies.length === 0) {
		return undefined;
	}
	return Math.round(ratesAverage(dramaMovies) * 100) / 100;
}

// Order by time duration, in growing order

function orderByDuration(movies) {
	return movies.sort((movie1, movie2) => {
		if (movie1.duration < movie2.duration) {
			return -1;
		}
		if (movie1.duration > movie2.duration) {
			return 1;
		}
		if (movie1.duration === movie2.duration) {
			return -1;
		}
		return 0;
	});
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
	let movieCount = movies.filter((movie) => {
		if (
			movie.genre.indexOf('Drama') !== -1 &&
			movie.director === 'Steven Spielberg'
		) {
			return true;
		}
		return false;
	}).length;

	if (movies.length === 0) {
		return undefined;
	}
	return `Steven Spielberg directed ${movieCount} drama movies!`;
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
	let titles = movies.map((movie) => {
		return movie.title;
	});
	titles.sort();
	return titles.splice(0, 20);
}

// Best yearly rate average
function bestYearAvg(movies) {
	let years = [
		...new Set(
			movies.map((movie) => {
				return movie.year;
			}),
		),
	];

	let best = { year: 0, avg: 0 };
	years.forEach((year) => {
		let moviesByYear = movies.filter((movie) => {
			return movie.year === year;
		});
		if (ratesAverage(moviesByYear) >= best.avg) {
			best.year = year;
			best.avg = ratesAverage(moviesByYear);
		}
	});
	if (movies.length === 0) {
		return undefined;
	}
	return `The best year was ${best.year} with an average rate of ${(best.avg *
		100) /
	100}`;
}