// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (moviesArray) => [
  ...new Set(moviesArray.map((movies) => movies.director)),
];
//const getAllDirectors = (moviesArray) => moviesArray.map(movies=> movies.director)
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (moviesArray) =>
  moviesArray.filter(
    (drama) =>
      drama.director === "Steven Spielberg" && drama.genre.includes("Drama")
  ).length;

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  return !moviesArray.length
    ? 0
    : +(
        moviesArray.reduce((acc, curr) => acc + (curr.score || 0), 0) /
        moviesArray.length
      ).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  return !moviesArray
    ? 0
    : +(
        moviesArray.reduce(
          (acc, curr) =>
            curr.genre === "Drama" ? acc + (curr.score || 0) : acc,
          0
        ) / moviesArray.length
      ).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
