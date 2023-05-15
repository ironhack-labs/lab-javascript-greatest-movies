// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
	return moviesArray.map((movieObj) => {
		return movieObj.director;
	});
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
	let spielbergDramas = moviesArray.filter((movieObj) => {
		return (
			movieObj.genre.includes("Drama") &&
			movieObj.director === "Steven Spielberg"
		);
	});

	return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
	if (moviesArray.length === 0) {
		return 0;
	} else {
		let scoreSum =
			moviesArray.reduce((acc, curr) => {
				if (typeof curr.score !== "number") {
					curr.score = 0;
					return acc + curr.score;
				} else {
					return acc + curr.score;
				}
			}, 0) / moviesArray.length;
		return Math.round(scoreSum * 100) / 100;
	}
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
	let dramasArray = moviesArray.filter((movieObj) => {
		return movieObj.genre.includes("Drama");
	});

	if (dramasArray.length === 0) {
		return 0;
	} else {
		let scoreSum =
			dramasArray.reduce((acc, curr) => {
				return acc + curr.score;
			}, 0) / dramasArray.length;

		return Math.round(scoreSum * 100) / 100;
	}
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
	let moviesArrayCopy = [...moviesArray];
	let sortedByYear = moviesArrayCopy.sort((a, b) => {
		if (a.year !== b.year) {
			return a.year - b.year;
		} else {
			if (a.title > b.title) return 1;
			if (a.title < b.title) return -1;
		}
	});

	return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
	let moviesArrayCopy = [...moviesArray];
	let sortedAlphabetic = moviesArrayCopy.sort((a, b) => {
		if (a.title > b.title) return 1;
		if (a.title < b.title) return -1;
	});

	let sortedAlphabeticTitles = sortedAlphabetic.map(
		(movieObj) => movieObj.title
	);

	return sortedAlphabeticTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
