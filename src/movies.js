// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(function (film) {
    return film.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const result = moviesArray.filter(function (film) {
    return film.director === "Steven Spielberg" && film.genre.includes("Drama");
  });

  return result.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const total = moviesArray.reduce(function (accumulator, film) {
    return accumulator + (film.score || 0);
  }, 0);

  return Math.round((total / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(function (film) {
    return film.genre.includes("Drama");
  });

  if (dramaMovies.length === 0) return 0;

  const total = dramaMovies.reduce(function (accumulator, film) {
    return accumulator + film.score;
  }, 0);

  return Math.round((total / dramaMovies.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.slice().sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .slice()
    .sort(function (a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    })
    .slice(0, 20)
    .map(function (film) {
      return film.title;
    });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
