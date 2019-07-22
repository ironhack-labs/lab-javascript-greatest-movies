/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(array) {
	const sumLength = array.reduce((total, item) => {
		total += item.rate;
		return total;
	}, 0);
	return (array.length === 0) ? undefined : sumLength / array.length;
}


// Iteration 2: Drama movies - Get the average of Drama Movies

function countDec(number) {
	if (Math.floor(number) !== number)
		return number.toString().split(".")[1].length || 0;
	return 0;
}

function format(number) {
	return (countDec(number) <= 2) ? Number(number) : Number(number.toFixed(2));
}

function hasGenre(array, name) {
	for (let i = 0; i < array.length; i++) {
		if (name.toLowerCase() === array[i].toLowerCase()) {
			return true;
		}
	}
	return false;
}

function dramaMoviesRate(array) {
	let itens = 0;
	const sumLength = array.reduce((total, item) => {
		if (hasGenre(item.genre, 'Drama')) {
			total += Number(item.rate);
			itens++;
		}
		return total;
	}, 0);

	let average = (sumLength / itens);
	return (itens == 0) ? 0 : format(average);
}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const compare = (a, b) => {
	let first = convertToMinutes(a.duration);
	let second = convertToMinutes(b.duration);
	if (first < second) return -1;
	else if (first > second) return 1;
	else return a.title.localeCompare(b.title);
}


function convertToMinutes(value) {
	if (typeof(value) === "number") {
		return value;
	} else {
		let time = value.split(" ");
		let hasHour = value.includes("h");
		let hasMin = value.includes("min");
		if (hasHour && hasMin) {
			return Number(time[1].split("min")[0]) + Number(time[0].split("h")[0]) * 60;
		} else if (hasHour) {
			return Number(time[0].split("h")[0]) * 60;
		} else if (hasMin) {
			return Number(time[0].split("min")[0]);
		}
	}
}

function orderByDuration(array) {
	return array.sort(compare);
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
	const howManyMovies = array.reduce((total, item) => {
		if (hasGenre(item.genre, 'Drama') && item.director === "Steven Spielberg") {
			total += 1;
			console.log(item.director);
		}
		return total;
	}, 0);

	return (howManyMovies.length == 0) ? 0 : howManyMovies;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

const compareTitles = (a, b) => {
	return a.title.localeCompare(b.title);
}

function orderAlphabetically(array) {
	let size = array.length;
	let sortedArray = array.sort(compareTitles);
	let newArray = sortedArray.reduce((result, item) => {
		result.push(item.title);
		return result;
	}, []);
	return (size < 20) ? newArray : newArray.slice(0, 20);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
	let resultArray = array.map(function(elem) {
		return Object.assign({}, elem, {
			duration: convertToMinutes(elem.duration)
		});
	});
	return resultArray;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
	let bestYear = 0;
	let bestAvg = 0;
	if (array.length === 0) {
		return null;
	}

	let newObj = array.reduce((result, elem) => {
		if (!result[elem.year]) {
			result[elem.year] = [Number(elem.rate)];
		} else {
			result[elem.year].push(Number(elem.rate));
		}
		return result;
	}, {});
	let movieYears = Object.keys(newObj);
	for (let i = 0; i < movieYears.length; i++) {
		let itens = newObj[movieYears[i]];
		let result = itens.reduce((amount, item) => {
			amount += item;
			return amount;
		}, 0);
		let average = result / itens.length;
		if (average > bestAvg) {
			bestYear = movieYears[i];
			bestAvg = average;
		}
	}
	return `The best year was ${bestYear} with an average rate of ${bestAvg}`;
}