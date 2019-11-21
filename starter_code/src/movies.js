/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
	return [ ...arr ].sort((a, b) => {
		return a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year;
	});
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
	return arr.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
	return [ ...arr ]
		.sort((a, b) => {
			return a.title.localeCompare(b.title);
		})
		.slice(0, 20)
		.map(movie => movie.title);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
	return arr.length === 0
		? 0
		: Number(
				(arr
					.filter(movie => {
						return 'rate' in movie && movie.rate !== '';
					})
					.reduce((acc, el) => {
						return acc + el.rate;
					}, 0) / arr.length).toFixed(2)
			);
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
	let movieDramas = arr.filter(movie => movie.genre.includes('Drama'));
	return ratesAverage(movieDramas);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
	return arr.map(movie => {
		let hour = movie.duration.match(/[0-9]+(?=h)/);
		let min = movie.duration.match(/[0-9]+(?=m)/);
		hour === null ? (hour = 0) : (hour = parseFloat(hour[0]));
		min === null ? (min = 0) : (min = parseFloat(min[0]));
		let timeFormatted = hour * 60 + min;
		let newMovie = Object.assign({}, movie);
		newMovie.duration = timeFormatted;
		return newMovie;
	});
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {
	if (arr.length === 0) return null;
	let greatestAvg = 0;
	let bestYear;
	let sortedObj = arr.reduce((acc, obj) => {
		if (!acc[obj.year]) {
			acc[obj.year] = [];
		}
		acc[obj.year].push(obj);
		return acc;
	}, {});
	for (let key in sortedObj) {
		let currentAvg = ratesAverage(sortedObj[key]);
		currentAvg > greatestAvg
			? ((greatestAvg = currentAvg), (bestYear = key))
			: ((greatestAvg = greatestAvg), (bestYear = bestYear));
	}
	return `The best year was ${bestYear} with an average rate of ${greatestAvg}`;
}
