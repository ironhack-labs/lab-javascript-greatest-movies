/** @format */

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
	let allDirectors = moviesArray.map(function (movie) {
		return movie.director;
	});
	return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
	let stevenMovies = moviesArray.filter(
		(movie) =>
			movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
	);

	return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
	if (!moviesArray.length) return 0;

	// console.log(filteredMovies);

	let totalScore = moviesArray.reduce((acc, curr) => {
		if (!curr.score) {
			curr.score = 0;
		}

		return acc + curr.score;
	}, 0);

	result = totalScore / moviesArray.length;

	return Number(result.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
	if (!moviesArray.length) return 0;

	let filteredArr = moviesArray.filter((movie) =>
		movie.genre.includes("Drama")
	);

	return scoresAverage(filteredArr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
	let copyArr = [...moviesArray];

	let sortedArr = copyArr.sort((a, b) => {
		if (a.year === b.year) {
			return a.title.localeCompare(b.title);
		}
		return a.year - b.year;
	});

	return sortedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
	let copyArr = [...moviesArray];
	let sorted = copyArr.sort((a, b) => {
		return a.title.localeCompare(b.title);
	});

	///// if less than 20

	if (sorted.length < 20) {
		return sorted.map((el) => el.title);
	}

	// if more than 20

	if (sorted.length > 20) {
		return sorted.map((el) => el.title).slice(0, 20);
	}
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
