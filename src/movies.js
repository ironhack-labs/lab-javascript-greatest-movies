// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((element) => element.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let SpielbergDramas = moviesArray.filter(function (element) {
    return (
      element.genre.indexOf("Drama") >= 0 &&
      element.director === "Steven Spielberg"
    );
  }).length;
  return SpielbergDramas;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray == "") {
    return 0;
  }
  const average = moviesArray
    .filter((element) => element.score)
    .map((element) => element.score)
    .reduce((previousValue, currentValue) => previousValue + currentValue);
  
    let decimal = average / moviesArray.length;
  return Math.round(decimal * 100) / 100;
}
scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
