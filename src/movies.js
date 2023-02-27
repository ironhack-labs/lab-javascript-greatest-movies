// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
	let directorArray = moviesArray.map((movie) => movie.director);
	return directorArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
	let spielbergArray = moviesArray.filter(
		(movie) => movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')
	);

	return spielbergArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
	const scoreArray = moviesArray.map((movie) => {
		return movie.score;
	});

	if (scoreArray.length === 0) {
		return 0;
	} else {
		let averageScore = scoreArray.reduce((sum, num) => {
			let total = (sum + num) / scoreArray.length;
			return total;
		});

		return averageScore;
	}
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
	let dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));

	if (dramaMovies.length === 0) {
		return 0;
	} else {
		let totalScore = dramaMovies.reduce((sum, movie) => {
			return sum + movie.score;
		}, 0);

		let averageScore = totalScore / dramaMovies.length;

		let floatedNumber = parseFloat(averageScore.toFixed(2));
		return floatedNumber;
	}
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
	let newArray = [...moviesArray];

	let sortedArray = newArray.sort((a, b) => {
		if (a.year === b.year) {
			return a.title.localeCompare(b.title);
		} else return a.year - b.year;
	});
	return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
	let newArray = moviesArray.map((movie) => movie.title);
	return newArray.sort();
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
