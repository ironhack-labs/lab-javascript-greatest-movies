const data = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((movie) => {
    return movie.director;
  });

  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramaMovies = moviesArray.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });

  return spielbergDramaMovies.length;
}
console.log(howManyMovies(data));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const totalScore = moviesArray.reduce(function (acc, value) {
    //console.log(acc, value.score);
    acc += value.score;
    return acc;
  }, 0);
  return +(totalScore / moviesArray.length).toFixed(2);
}

scoresAverage(data);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(function (movie) {
    return movie.genre.includes("Drama");
  });
  const dramaMoviesAv = moviesArray.reduce(function (acc, value) {
    acc += value.score;
    return acc;
  }, 0);
  return +(dramaMoviesAv / moviesArray.length).toFixed(2);

  return dramaMovies;
}
console.log(dramaMoviesScore(data));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortMoviesByYear = moviesArray.sort(function (a, b) {
    return a.year - b.year;
  });
  return sortMoviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortMoviesByTitle = moviesArray.sort(function (a, b) {
    return a.title - b.title;
  });
  return sortMoviesByTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
