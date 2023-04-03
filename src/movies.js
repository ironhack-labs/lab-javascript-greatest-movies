// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
	return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
	if (moviesArray.length === 0) return 0;

	const newMovoiesArr = moviesArray.filter((movie) => {
		return (
			movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
		);
	});

	return newMovoiesArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
	if (moviesArray.length === 0) return 0;

	const cleanMoviesArr = moviesArray.filter((movie) => movie.score);

	const scoreSum = cleanMoviesArr.reduce(
		(acc, currMovie) => acc + currMovie.score,
		0
	);

	let score = scoreSum / moviesArray.length;
	score = Math.round(score * 100) / 100;

	return score;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
	const dramaList = moviesArray.filter((movie) =>
		movie.genre.includes("Drama")
	);

	if (dramaList.length === 0) return 0;

	const scoreSum = dramaList.reduce(
		(acc, currMovie) => acc + currMovie.score,
		0
	);

	let scoreDrama = scoreSum / dramaList.length;
	scoreDrama = Math.round(scoreDrama * 100) / 100;

	return scoreDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
	moviesArray.sort((movieCurr, movieNext) => {
		if (movieCurr.year < movieNext.year) return -1;
		else if (movieCurr.year > movieNext.year) return 1;
		else {
			if (movieCurr.title < movieNext.title) return -1;
			else return 1;
		}
	});

	return [...moviesArray];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
	const orderedTitles = moviesArray
		.map((movie) => movie.title)
		.sort()
		.filter((_, index) => index < 20);

	return orderedTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
	const alteredMovies = [...moviesArray];

	alteredMovies.forEach((newMovie, index) => {
		if (typeof newMovie.duration === "string") {
			const durationArr = moviesArray[index].duration.split(" ");

			let hourStr = "";
			let minStr = "";

			if (durationArr[0])
				hourStr = durationArr[0].slice(0, durationArr[0].length - 1);
			if (durationArr[1])
				minStr = durationArr[1].slice(0, durationArr[1].length - 3);

			const minSum = Number(hourStr) * 60 + Number(minStr);

			newMovie.duration = minSum;
		}
	});

	return alteredMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
	if (moviesArray.length === 0) return null;

	const yearsAll = moviesArray.map((movie) => movie.year);
	const yearsUnique = [];

	yearsAll.forEach((year) => {
		if (!yearsUnique.includes(year)) yearsUnique.push(year);
	});

	const moviesByYear = [];

	yearsUnique.forEach((thisYear) => {
		const moviesThisYear = moviesArray.filter(
			(movie) => movie.year === thisYear
		);
		moviesByYear.push(moviesThisYear);
	});

	moviesByYear.forEach((moviesThisYear) => {
		const scoreAvg = scoresAverage(moviesThisYear);
		moviesThisYear.scoreAvg = scoreAvg;
	});

	moviesByYear.sort((moviesThisYear, moviesAntherYear) => {
		if (moviesThisYear.scoreAvg > moviesAntherYear.scoreAvg) return -1;
		else if (moviesThisYear.scoreAvg < moviesAntherYear.scoreAvg) return 1;
		else {
			if (moviesThisYear[0].year < moviesAntherYear[0].year) return -1;
			else return 1;
		}
	});

	const bestYear = moviesByYear[0][0].year;
	const rate = moviesByYear[0].scoreAvg;

	return `The best year was ${bestYear} with an average score of ${rate}`;
}
