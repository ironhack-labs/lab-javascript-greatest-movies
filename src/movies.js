const movies = require('../src/data');

// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map(function (movie) {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  return arr.filter(function (movie) {
    return (
      movie.director === 'Steven Spielberg' && movie['genre'].includes('Drama')
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (!arr.length) return 0;

  const average =
    arr.reduce(function (acc, val) {
      if (!val.score) return acc;
      return acc + val.score;
    }, 0) / arr.length;

  return +average.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMovies = arr.filter(function (movie) {
    return movie['genre'].includes('Drama');
  });

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  return arr.slice().sort(function (a, b) {
    if (a.year === b.year) {
      return a['title'].localeCompare(b['title']);
    }
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const sortedArr = arr.slice().sort(function (a, b) {
    return a['title'].localeCompare(b['title']);
  });

  if (sortedArr.length < 20) {
    return sortedArr.map(function (movie) {
      return movie.title;
    });
  }

  return sortedArr.slice(0, 20).map(function (movie) {
    return movie.title;
  });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  const newArr = arr.slice();

  for (const movie of newArr) {
    let duration = movie.duration;
    let timeArr = duration.toString().split(' ');
    let hours;
    let minutes;

    if (timeArr.length === 1) {
      minutes = +timeArr[0].replace('min', '');
    } else {
      hours = +timeArr[0].replace('h', '');
      minutes = +timeArr[1].replace('min', '');
    }

    movie.duration = hours * 60 + minutes;
  }

  return newArr;
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
