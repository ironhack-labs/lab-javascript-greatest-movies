/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (arrayMovies) => {
	let newArray = [ ...arrayMovies ].sort((a, b) => {
		if (a.year !== b.year) {
			return a.year - b.year;
		} else {
			return a.title.localeCompare(b.title);
		}
	});
	return newArray;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = (dramaMovies) => {
	return dramaMovies.filter((movie) => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg').length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (titleMovies) => {
	return [ ...titleMovies ].sort((a, b) => a.title.localeCompare(b.title)).map((movie) => movie.title).slice(0, 20);
};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (rateMovies) => {
	if (rateMovies.length === 0) return 0;
	return +(rateMovies.reduce((result, movie) => {
		if (movie.rate && typeof movie.rate === 'number') {
			return (result += movie.rate);
		} else {
			return result;
		}
	}, 0) / rateMovies.length).toFixed(2);
};

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (rateDramaMovies) => {
	if (rateDramaMovies.length === 0) return 0;
	let rateDramaMoviesFilter = rateDramaMovies.filter((movie) => movie.genre.includes('Drama'));
	if (rateDramaMoviesFilter.length === 0) return 0;
	return +(rateDramaMoviesFilter.reduce((result, movie) => {
		if (movie.rate && typeof movie.rate === 'number') {
			return (result += movie.rate);
		} else {
			return result;
		}
	}, 0) / rateDramaMoviesFilter.length).toFixed(2);
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const h = (movie) => {
	let { duration } = movie;

	if (duration.split('').includes('h') && duration.split('').includes('m')) {
		let hours = duration.split('h')[0] * 60;
		let minutes = duration.split('h')[1].slice(0, duration.split('h')[1].length - 3);
		let sum = hours + parseInt(minutes);
		movie.duration = sum;
		return movie;
	} else if (duration.split('').includes('h')) {
		let hours = duration.split('h')[0] * 60;
		movie.duration = parseInt(hours);
		return movie;
	} else if (duration.split('').includes('m')) {
		let minutes = duration.slice(0, -3);
		movie.duration = +minutes;
		return movie;
	} else {
		movie.duration = 0;
		return movie;
	}
};

const turnHoursToMinutes = (hoursIntoMinutesMovies) => {
	arrayOfMovies = JSON.parse(JSON.stringify(hoursIntoMinutesMovies));
	return arrayOfMovies.map(h);
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average
