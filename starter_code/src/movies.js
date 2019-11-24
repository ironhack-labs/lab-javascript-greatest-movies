/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let movies = arr.map(a => a);

  if (movies.length != 0) {
    movies.sort((a, b) => {
      if (a.year != b.year) {
        return a.year - b.year;
      } else {
        return a.title.localeCompare(b.title);
      }
    });

    return movies;
  }
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
  let movies = arr.map(a => a);

  return movies.filter(movie => {
    return (
      movie.director == "Steven Spielberg" && movie.genre.indexOf("Drama") >= 0
    );
  }).length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let movies = arr.map(a => a);

  movies.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  return movies.map(e => e.title).filter((e, i) => i < 20);
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  let movieRates = arr.map(a => a.rate);

  if (movieRates.length === 0) {
    return 0;
  }

  //I used toFix() for the 2 decimal points and then parseFloat() to make it a number again
  return parseFloat(
    (
      movieRates.reduce((acc, e) => {
        if (typeof e === "number") {
          return acc + e;
        } else {
          return acc;
        }
      }) / movieRates.length
    ).toFixed(2)
  );
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  // create an array with only the drama movies
  let dramaMovies = arr.filter(e => {
    return e.genre.indexOf("Drama") >= 0;
  });

  return ratesAverage(dramaMovies);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
