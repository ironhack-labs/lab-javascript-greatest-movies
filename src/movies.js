// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
	const directors = (newArray = moviesArray.map((movie) => movie.director));
	return directors;
}

//Bonus: const directorsUnique = [...new Set(directors)]; //alternatively: let directorsUnique = []; directors.forEach((director) => {if (!directorsUnique.includes(director)) {directorsUnique.push(director)}); return directorsUnique;

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
	const spielbergDramaMovies = moviesArray.filter(
		(movies) => movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')
	);
	return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
	if (!moviesArray.length) return 0;
	if (
		moviesArray.some((movie) => {
			if (!movie.score) {
				movie.score = 0;
			}
		})
	);

	const average = moviesArray.reduce((total, moviesArray) => total + moviesArray.score, 0);
	return Number((average / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
	const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));
	if (!dramaMovies.length) return 0;
	if (dramaMovies.length === 1) return parseFloat(dramaMovies[0].score);

	const dramaAverage = dramaMovies.reduce((total, dramaMovies) => total + dramaMovies.score, 0);
	return parseFloat((dramaAverage / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
	const yearArray = [...moviesArray]; //create a copy of the array

	yearArray.sort((currentMovie, nextMovie) => {
		if (currentMovie.year === nextMovie.year) {
			return currentMovie.title[0].localeCompare(nextMovie.title[0]);
		} else {
			return currentMovie.year - nextMovie.year;
		}
	});

	return yearArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
	const justTitles = moviesArray.map((movie) => movie.title);

	justTitles.sort((currentTitle, nextTitle) => currentTitle.toLowerCase().localeCompare(nextTitle.toLowerCase())); //sort alphabetically, case insensitive

	if (justTitles.length < 20) return justTitles;
	else {
		let topTwenty = justTitles.slice(0, 20);
		return topTwenty;
	}
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
	let moviesArrayCopy = [...moviesArray];

	moviesArrayCopy.forEach((movie) => {
		if (movie.duration.includes('h') && movie.duration.includes('min')) {
			let hours = movie.duration.split('h')[0];
			let minutes = movie.duration.split('h')[1].split('min')[0];
			movie.duration = parseInt(hours) * 60 + parseInt(minutes);
		}
	});
	return moviesArrayCopy;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
