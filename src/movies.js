// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  const moviesDirector = movies.map((elm) => elm.director);
  return moviesDirector;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let moviesList = movies.filter(
    (elm) => elm.director === "Steven Spielberg" && elm.genre.includes("Drama")
  );
  return moviesList.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const moviesRate = movies.map(function (movie) {
    if (!movie.rate) {
      return 0;
    } else {
      return movie.rate;
    }
  });
  const moviesAverage = moviesRate.reduce((acc, elm) => acc + elm);
  const moviesTotalAverage = moviesAverage / moviesRate.length;
  return Number(moviesTotalAverage.toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter((elm) => elm.genre.includes("Drama"));
  if (dramaMovies.length === 0) {
    return 0;
  }
  const dramaRates = dramaMovies.map(function (drama) {
    if (!drama.rate) {
      return 0;
    } else {
      return drama.rate;
    }
  });
  const dramaMoviesAverage = dramaRates.reduce((acc, elm) => acc + elm);
  const dramaMoviesTotal = dramaMoviesAverage / dramaRates.length;
  return Number(dramaMoviesTotal.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const moviesOrdered = movies.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return moviesOrdered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const moviesAlph = movies.map((item) => item.title);
  const moviesAlphOrd = moviesAlph.sort((a, b) => a.localeCompare(b));
  return moviesAlphOrd.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
