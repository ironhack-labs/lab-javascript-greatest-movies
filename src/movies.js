// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const directorsArr = moviesArray.map(
    (movie) => movie.director || "Unknown Director"
  );

  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovies = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg"
  );

  const dramaMoviesCount = spielbergMovies.reduce((acc, movie) => {
    return movie.genre.includes("Drama") ? acc + 1 : acc;
  }, 0);
  return dramaMoviesCount;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  const totalScore = moviesArray.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);
  return Math.round((totalScore / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMoviesArr = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (dramaMoviesArr.length === 0) return 0;

  totalScore = dramaMoviesArr.reduce((acc, movie) => acc + movie.score, 0);

  return Math.round((totalScore / dramaMoviesArr.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArray = [...moviesArray].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArray = [...moviesArray].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  newArray2 = newArray.splice(0, 20);

  newArray3 = newArray2.map((movie) => movie.title);

  return newArray3;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
