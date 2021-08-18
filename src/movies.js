// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const directors = array.map(function (movie) {
    return movie.director;
  });
  return directors.filter(function (director, i) {
    return directors.indexOf(director) === i;
  });
}

// BONUS 1 FILTER

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const movieTotal = array.filter(function (movie) {
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama')
    ) {
      return true;
    }
  });
  return movieTotal.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  const movieScore = array.reduce(function (accummulator, currentValue) {
    if (array.score === '' || array.score === undefined) {
      array.score = 0;
    }
    return accummulator + currentValue.score;
  }, 0);
  if (!array.length) {
    return 0;
  }
  let averageMovie = movieScore / array.length;
  return +averageMovie.toFixed(2);
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  let dramaMovies = array.filter(function (movie) {
    if (movie.genre.includes('Drama')) {
      return true;
    }
  });
  let dramaTotal = dramaMovies.reduce(function (accummulator, currentValue) {
    return accummulator + currentValue.score;
  }, 0);
  if (!dramaMovies.length) {
    return 0;
  }
  let dramaAverage = dramaTotal / dramaMovies.length;
  return +dramaAverage.toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  // let sortedMovies = [];

  return [...array].sort(function (a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  // sortedMovies.push(dateOrder);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let dateOrder = [...array].sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    }
  });
  return dateOrder.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  let convertedMovies = array.map(function (movie) {
    let slice1 = movie.duration.indexOf(' ') + 1;
    let slice2 = movie.duration.indexOf('m');
    let sliced = movie.duration.slice(slice1, slice2);
    let hours = parseInt(movie.duration[0]);
    let minutes = parseInt(sliced);
    return {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: hours * 60 + minutes,
      genre: movie.genre,
      score: movie.score
    };
  });
  return convertedMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

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
