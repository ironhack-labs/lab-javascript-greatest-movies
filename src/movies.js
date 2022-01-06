// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const allDirectors = movies.map((movie) => {
    return movie.director;
  });

  return allDirectors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  
  const spielbergMovies = (movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') >= 0)).length;

  return spielbergMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length === 0) {
    return 0;
  }

  const sumOfScores = movies.reduce((total, movie) => {
    if (movie.score) {
      return total + movie.score;
    } else {
      return total;
    }
  }, 0);

  const averageScore = sumOfScores / movies.length;

  return Math.round(averageScore*100)/100;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const dramaMovies = movies.filter((movie) => {
    return movie.genre.indexOf('Drama') >= 0;
  });

  return scoresAverage(dramaMovies);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const newMovies = [...movies];
  
  newMovies.sort((movie1, movie2) => {
    if (movie1.year > movie2.year) {
      return 1;
    } else if (movie1.year < movie2.year) {
      return -1;
    } else {
      return movie1.title.localeCompare(movie2.title);
    }
  });
  return newMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const movieTitles = movies.map((movie) => movie.title);

  movieTitles.sort((movie1, movie2) => movie1.localeCompare(movie2));

  const top20 = movieTitles.slice(0, 20);

  return top20;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
