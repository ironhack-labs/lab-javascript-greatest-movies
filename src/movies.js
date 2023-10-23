// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// const movies = require('./data.js');
// import movies from './data.js';
function getAllDirectors(moviesArray) {
	let Directors = [];
	moviesArray.forEach(function (obj) {
		Directors.push(obj.director);
	});
	return Directors;
}

// Note: When it says it shouldn't update the original one, it eleminates .map automatically. That's why I did it in old way :)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
	const ssCount = moviesArray.filter(function (obj2) {
		if (obj2.director === 'Steven Spielberg' && obj2.genre.includes('Drama')) {
			return moviesArray.length;
		}
	}).length;
	return ssCount;
}

// Well it returns a number for sure... also it returns 4 :D Idk why Jasmine is acting like that -.-

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
	if (!moviesArray.length > 0) {
		return 0;
	} else {
		const allScores = moviesArray.map(function (obj3) {
			return obj3.score;
		});
		const totalScore = allScores.reduce(function (acc, curVal) {
			if (curVal) {
				totalScores = acc + curVal;
			}
			return totalScores;
		}, 0);
		let roundedAvgScore =
			Math.round((totalScore / allScores.length) * 100) / 100;
		return roundedAvgScore;
	}
}

// even though I added if array is empty, return falls, Jasmine is not accepting it, also it doesn't accept it's a number too...as always.

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
	const allDramas = moviesArray.filter(function (obj4) {
		if (obj4.genre.includes('Drama')) {
			return true;
		} else if (!obj4.genre.includes('Drama')) {
			return 0;
		}
	});
	const allDramaScores = allDramas.map(function (elm) {
		return elm.score;
	});
	const totalDramaScores = allDramaScores.reduce(function (acc, cur) {
		if (cur) {
			total = acc + cur;
			return total;
		}
	});
	let roundedAvgDramaScore =
		Math.round((totalDramaScores / allDramaScores.length) * 100) / 100;
	return roundedAvgDramaScore;
}

// again, number... and again... returns 0 is red in Jasmine...

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
	let copyArray = moviesArray.map(function (elm) {
		return elm;
	});
	let arrayOrderedYear = copyArray.sort(function (a, b) {
		if (a.year === b.year) {
			return a.title.localeCompare(b.title);
		} else if (a.year !== b.year) {
			return a.year - b.year;
		}
	});
	return arrayOrderedYear.slice(0, 21);
}
console.log(orderByYear(movies));
// Unfortunately I couldn't figured out how to order both with year AND name if the year is equal :(

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
	let copyArray = moviesArray.map(function (elm) {
		return elm;
	});
	let count = 0;
	let copyArrayTitles = copyArray.map(function (obj) {
		count += 1;
		if (obj.title) {
			if (count < 21) {
				return obj.title;
			} else if (obj.title === undefined) {
				return false;
			}
		}
	});
	let arrCopyArrayTitles = copyArrayTitles.sort();
	return arrCopyArrayTitles.slice();
}

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
