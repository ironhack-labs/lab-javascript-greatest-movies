// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    
	return moviesArray.map((movie) => movie.director);

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

  const DramaSpielberg = moviesArray.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
		
		return DramaSpielberg.length; 

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

	if (moviesArray.length === 0) {
		return 0;
	}
	
		const scoresAcc = moviesArray.reduce((acc, movies) => {
			return acc + movies.score;
		}, 0);
	
		const average = Math.round((scoresAcc / moviesArray.length) * 100) / 100;

		return average;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
	
	const dramaMoviesAvg = moviesArray.filter(function(allMovies){
		return allMovies.genre.includes('Drama');
	});
	return scoresAverage(dramaMoviesAvg);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
	
	const movieClone = moviesArray.map(movie => movie);
	movieClone.sort((x, y) => {
		if (x.year > y.year) {
			return 1;
		} else if (x.year < y.year) {
			return -1;
		} else {
		return x.title.localeCompare(y.title);
		}
	});
	
	return movieClone;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
	
	const movieClone = moviesArray.map(movie => movie);
	movieClone.sort((x, y) => {
		x.title.localeCompare(y.title)
	});
	
	return movieClone.map((movieClone) => movieClone.title).slice(0,20); 	
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
