const movies = require("./data.js");
console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  // array.map() method to iterate [] & create a new [] w/just the directors
  return moviesArray.map((movies) => movies.director);
}
console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray, director) {
  // array.filter() method to create new array w/just films of a certain director
  return moviesArray.filter(
    (movies) => movies.director === director && movies.genre.includes("Drama")
  );
}

console.log(`2nd -->`, howManyMovies(movies, "Steven Spielberg"));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {}

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
