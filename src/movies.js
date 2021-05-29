const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

function getAllDirectors(movies) {
  let allDirectors = movies.map((m) => {return m.director});
  return allDirectors;
}

// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectorsUnique (movies) {
  let prevArray = getAllDirectors(movies);
  let uniqueDirectors = [];

  for (let i = 0; i <= prevArray.length; i++) {

    if (uniqueDirectors.indexOf(prevArray[i]) === -1) {
      uniqueDirectors.push(prevArray[i]);
    }
  }
    return uniqueDirectors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  if (movies.length === 0) return 0;

  let spielbergMovies = movies.filter(movie => {
    movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
  }); 

  return spielbergMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length === 0) return 0;

  let sum = movies.reduce( (acc, movie) => {
    if (!movie.score) {
      movie.score = 0;
    }

    return acc + movie.score;

  }, 0);

let average = sum/movies.length;
let result = Math.round(average*100) / 100;

return result;


}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  if (movies.length === 1) return movies.score;

  let dramaMovies =  movies.filter( movie => {movie.genre.includes('Drama') });

  let result = scoresAverage(dramaMovies);

  return result;

}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

let sortedMovies = [...movies];

sortedMovies.sort((a,b) => {

  if (a.year<b.year) return -1;
  if (a.year>b.year) return 1;
  if (a.year===b.year) return 0;
});

return sortedMovies;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  let sortedMovies = movies.map(movie => {return movie.title});
  let result = sortedMovies.sort();

  if (result.length > 20) { return result.slice(0, 20) }

  return result;
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {


}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {


}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
