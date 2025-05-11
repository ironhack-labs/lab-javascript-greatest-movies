// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const newArr = [...moviesArray];
  const directorsArr = newArr.map((el) => el.director);

  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray.length) return 0;

  const filtered = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );

  return filtered.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;

  const totalScore = moviesArray.reduce((acc, val) => {
    return acc + (val.score || 0);
  }, 0);

  const averave = totalScore / moviesArray.length;

  return Number(averave.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (!dramaMovies.length) return 0;

  const totalScore = dramaMovies.reduce(
    (sum, movie) => sum + (movie.score || 0),
    0
  );

  return Number((totalScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  if (!moviesArray.length) return [];

  const clonedArr = moviesArray.map((movie) => ({ ...movie })); // deep copy each object

  return clonedArr.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  if (!moviesArray.length) return [];

  const titles = moviesArray.map((movie) => movie.title);
  const sortedTitles = [...titles].sort();

  return sortedTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
