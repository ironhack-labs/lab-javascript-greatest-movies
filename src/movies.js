const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {

	const rawList = moviesArray.map((movie) => movie.director );
	
	return rawList;
}

//console.log(getAllDirectors(movies));
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.


function getAllDirectors2(moviesArray) {

	const rawList = moviesArray.map(movie => movie.director);
	
	const cleanList = rawList.filter(
		(director, index) => rawList.indexOf(director) === index);

	return cleanList;
}

//console.log(getAllDirectors2(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
	const steven = moviesArray.filter((movie) => movie.director === 'Steven Spielberg');
	const stevenDrama = steven.filter((movie) => movie.genre.includes('Drama'));
	return stevenDrama;
};

//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

	const scores = moviesArray.map((movie) => movie.score);
	//console.log(scores);
	const sumScores = scores.reduce((sum, number) => {return sum + number});
	//console.log(sumScores);
	const avg = (sumScores / (scores.length)).toFixed(2);
	return avg;
}

//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
	const drama = moviesArray.filter((movie) => movie.genre.includes('Drama'));
	//console.log(drama);
	const avg = scoresAverage(drama);
	return avg;
}

//console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
	const orderedList = moviesArray.sort((movie1, movie2) => {
		if(movie1.year === movie2.year){
			const alphab = moviesArray.sort((movie1, movie2) => {

			return alphabetical.sort();
		}
		return movie1.year - movie2.year});
	return orderedList;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
