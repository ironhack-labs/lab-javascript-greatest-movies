/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arrayFilm) {
  let arrayFilmCopy = Array.from(arrayFilm);

  arrayFilmCopy.sort(function(a, b) {
    return a.year - b.year;
  });

  arrayFilmCopy.sort(function(a, b) {
    if (a.year == b.year) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
    }
    return 0;
  });

  return arrayFilmCopy;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  // Uso .filter para generar un array con las pelis que cumplan ciertas condiciones

  let filmsSpielberg = array.filter(function(film) {
    if (film.director == "Steven Spielberg" && film.genre.includes("Drama")) {
      return film;
    }
  });

  return filmsSpielberg.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  // creo un array solo con los títulos
  let movieByTitle = array.map(movie => movie.title);

  let topTwenty = movieByTitle.sort((a, b) => (a > b ? 1 : -1));
  topTwenty.length > 20 ? topTwenty.splice(20) : topTwenty;

  return topTwenty;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  if (array.length === 0) return 0;
  let averageRate =
    array.reduce((acc, movie) => {
      if (!movie.rate) {
        return acc + 0;
      } else {
        return acc + movie.rate;
      }
    }, 0) / array.length;
  return Number(averageRate.toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  let dramaMovies = arr.filter(movie => movie.genre.includes("Drama"));
  if (dramaMovies.length !== 0) {
    let averageRate = dramaMovies.reduce((a, b) => {
      return a + b.rate;
    }, 0);
    averageRate = averageRate / dramaMovies.length;
    return Number(averageRate.toFixed(2));
  }
  return 0;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
  let arrayFilmCopy = Array.from(arr);

  return minutesOK;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg() {}
