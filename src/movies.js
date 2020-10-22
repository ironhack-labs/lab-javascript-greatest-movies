// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {
  const directorName = [...arr].map((movie) => movie.director);
  return directorName;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr1) {
  const filteredCount = [...arr1].filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return filteredCount.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }

  const movieRate = [...movies].map((movie) => movie.rate);
  const totalAvgRate = movieRate.reduce((acc, cV) => acc + cV, 0) / movies.length;
  const totalAvgRateRounded = Math.round(totalAvgRate * 100) / 100;

  return totalAvgRateRounded;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortByYear = [...movies].sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    }

    if (a.year < b.year) {
      return -1;
    }

    if (a.year === b.year) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      if (a.title === b.title) return 0;
    }
  });

  return sortByYear;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies
    .map((movies) => movies.title)
    .sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      if (a === b) return 0;
    })
    .slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
