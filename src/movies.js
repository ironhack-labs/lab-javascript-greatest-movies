// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((m) => m.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray
    .filter((mov) => mov.genre.includes('Drama'))
    .filter((m) => m.director === 'Steven Spielberg').length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray[0]) return 0;
  const result =
    moviesArray
      .filter((m) => m.score)
      .reduce((prev, curr) => prev + curr.score, 0) / moviesArray.length;
  return Number(result.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((m) => m.genre.includes('Drama'));
  if (!dramaMovies[0]) return 0;
  const average =
    dramaMovies.reduce((prev, curr) => prev + curr.score, 0) /
    dramaMovies.length;
  return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedArray = [...moviesArray].sort((a, b) => {
    if (a.year === b.year)
      return a.title.toUpperCase() < b.title.toUpperCase()
        ? -1
        : a.title.toUpperCase() > b.title.toUpperCase()
        ? 1
        : 0;
    return a.year - b.year;
  });
  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const result = [];
  const sorted = [...moviesArray]
    .sort((a, b) => {
      const A = a.title.toUpperCase(),
        B = b.title.toUpperCase();
      return A < B ? -1 : A > B ? 1 : 0;
    })
    .filter((movie, index) => {
      if (index < 20) return movie;
    })
    .forEach((m) => result.push(m.title));
  return result;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return [...moviesArray].map((mov) => {
    return {
      ...mov,
      duration: mov.duration
        .replace(/(h|min)/g, '')
        .split(' ')
        .map((x, i) => (i === 0 ? Number(x) * 60 : Number(x)))
        .reduce((x, y) => x + y)
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

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
    bestYearAvg
  };
}
