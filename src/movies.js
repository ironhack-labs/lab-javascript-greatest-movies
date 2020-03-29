/* eslint no-restricted-globals: 'off' */

// Practice JavaScript advanced methods (map, reduce, filter and sort to manipulate arrays)

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
	// We use the ... operator to create a deep clone of a given array

	let newArr = [ ...movies ];

	newArr.sort((a, b) => {
		if (a.year === b.year) {
			return a.title.localeCompare(b.title);
		} else {
			return a.year - b.year;
		}
	});
	return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
	return movies.filter((movie) => movie.genre.includes('Drama') && movie.director.includes('Steven Spielberg'))
		.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
	return movies.map((movie) => movie.title).sort().splice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
	if (movies.length === 0) return 0;

	for (let i = 0; i < movies.length; i++) {
		if (movies[i].rate === '' || movies[i].rate === undefined) {
			movies[i].rate = 0;
		}
	}

	let averageRate = movies.map((movie) => movie.rate).reduce((a, b) => a + b, 0) / movies.length;

	return Number(averageRate.toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
	let dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));

	return (averageDramaRate = ratesAverage(dramaMovies));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
	let newArr = movies.map((movie) => {
		let newMovie = { ...movie };
		return newMovie;
	});

	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i].duration.indexOf(' ') >= 0) {
			let newTime = newArr[i].duration.split(' ');
			newArr[i].duration = parseInt(newTime[0]) * 60 + parseInt(newTime[1]);
		} else if (newArr[i].duration.indexOf('h') >= 0) {
			let newTime = newArr[i].duration.split('h');
			newArr[i].duration = parseInt(newTime[0]) * 60;
		} else {
			newArr[i].duration = parseInt(newArr[i].duration);
		}
	}
	return newArr;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
	if (movies.length === 0) {
		return null;
	} else if (movies.length === 1) {
		return `The best year was ${movies[0].year} with an average rate of ${movies[0].rate}`;
	}

	let newArray = [];

	movies.forEach(function(movie) {
		newArray.push({ year: movie.year, rate: [ movie.rate ] });
	});
}
