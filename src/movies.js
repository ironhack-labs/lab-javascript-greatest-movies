/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
	let sortedMovies = [ ...arr ].sort((a, b) => {
		if (a.year < b.year) {
			return -1;
		}
		if (a.year > b.year) {
			return 1;
		} else {
			if (a.title < b.title) {
				return -1;
			}
			if (a.title > b.title) {
				return 1;
			}
			return 0;
		}
	});
	return sortedMovies;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = (arr) => {
	let dramaMovies = 0;

	dramaMovies = arr.filter((elm) => elm.director === 'Steven Spielberg' && elm.genre.includes('Drama'));

	return dramaMovies.length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
	let sortedMovies = [ ...arr ].sort((a, b) => {
		if (a.title < b.title) {
			return -1;
		}
		if (a.title > b.title) {
			return 1;
		}
		return 0;
	});
	let firstTwenty = sortedMovies.filter((elm, index) => {
		if (index < 20) {
			return true;
		}
		return false;
	});
	let firstTwentyTitles = firstTwenty.map((elm) => elm.title);
	return firstTwentyTitles;
};
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
	let rate = arr.reduce((acc, elm) => {
		if (!elm.rate) {
			return acc;
		}
		return acc + elm.rate;
	}, 0);

	if (rate === 0) {
		return rate;
	}
	let promedio = parseFloat((rate / arr.length).toFixed(2));
	return promedio;
};
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
	let dramaMovies = arr.filter((elm) => elm.genre.includes('Drama'));
	let rate = dramaMovies.reduce((acc, elm) => {
		if (!elm.rate) {
			return acc;
		}
		return acc + elm.rate;
	}, 0);

	if (rate === 0) {
		return rate;
	}

	let promedio = parseFloat((rate / dramaMovies.length).toFixed(2));
	return promedio;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (arr) => {
	let sortedMovies = arr.reduce((acc, elm) => {
		return acc + elm.duration;
	}, 0);

	let promedio = Number(sortedMovies / arr.length);

	return promedio;
};
// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = (arr) => {
	let sortedMovies = arr.filter((elm) => {
		elm.year && elm.rate;
	});
	if (arr.length === 0) {
		return null;
	}
	return sortedMovies;
};
