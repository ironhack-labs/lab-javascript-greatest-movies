// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map((element) => element.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let allSpielbergMovies = moviesArray.filter(
    (element) =>
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
  );

  return allSpielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const scoresSum = moviesArray.reduce((accumulator, element) => {
    if (!element.score) {
      return accumulator;
    }

    const newAccumulator = accumulator + element.score;
    return newAccumulator;
  }, 0);

  return Math.round((scoresSum / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaDramaDrama = moviesArray.filter((element) =>
    element.genre.includes("Drama")
  );

  let dramaScoresAvg = Math.round(scoresAverage(dramaDramaDrama) * 100) / 100;

  return dramaScoresAvg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const ordermovies = moviesArray.toSorted((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });

  return ordermovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let movieTitles = moviesArray.map((element) => element.title);

  movieTitles = movieTitles.sort();

  return movieTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
