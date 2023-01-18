// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data");

function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg').length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const arrayWithScore = moviesArray.filter(movie => typeof(movie.score) === "number");
  const totalScore = arrayWithScore.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.score;
  },0);
  return +(totalScore / moviesArray.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyMoviesArray = [...moviesArray];
  copyMoviesArray.sort(function(aMovie, anotherMovie) {
    const yearDifference = aMovie.year - anotherMovie.year;
    if (yearDifference === 0) {
      if (aMovie.title > anotherMovie.title) {
        return 1;
      } 
      return -1;
    }
    return yearDifference;
  });
  return copyMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const copyMoviesArray = [...moviesArray];
  copyMoviesArray.sort(function(aMovie, anotherMovie) {
    if (aMovie.title > anotherMovie.title) {
      return 1;
    } 
    return -1;
  });
  return copyMoviesArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
