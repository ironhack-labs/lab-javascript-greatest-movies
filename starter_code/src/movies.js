/* eslint no-restricted-globals: 'off' */
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (arr) => {
	const newArr = [...arr];
	newArr.sort((a, b) => {
		if (a.year === b.year) {
			if (a.title < b.title) {
				return -1;
			}
			if (a.title > b.title) {
				return 1;
			} else {
				return 0;
			}
		} else {
			return a.year - b.year;
		}
	});
	return newArr;
};

// console.log(orderByYear(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = (arr) => {
	let arrSpielberg = arr.filter(e => {
		return e.director === 'Steven Spielberg' && e.genre.includes('Drama');
	});
	return arrSpielberg;
};


// console.log(howManyMovies(movies));

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {
	const newArr2 = [...arr];
	newArr2.sort((a, b) => {
		if (a.title < b.title) {
			return -1;
		}
		if (a.title > b.title) {
			return 1;
		} else {
			return 0;
		}
	});
	return newArr2.slice(0, 20);
};

// console.log(orderAlphabetically(movies));


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (arr) => {
	const sum = arr.reduce((a, b) => {
		return a + b.rate;
	}, 0);
	const avg = sum / arr.length;
	return avg.toFixed(2);
};

// console.log(ratesAverage(movies));


// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
	const drama = arr.filter(e => {
		return e.genre.includes('Drama');
	});
	return ratesAverage(drama);
};

// console.log(dramaMoviesRate(movies));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (arr) => {
	const parsed = arr.map(e => {
		let [hours, min] = e.duration.split(' ');
		hours = +hours.replace('h', '');
		min = min ? +min.replace('min', '') : 0;
		e.duration = hours * 60 + min;
		return e;
	});
	return parsed;
};

// console.log(turnHoursToMinutes(movies));

// BONUS Iteration: Best yearly rate average - Best yearly rate average




