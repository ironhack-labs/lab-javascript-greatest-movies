// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const newArr = [...arr].map(function (el) {
    return el.director;
  });

  return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const newArr = [...arr].filter(function (el) {
    if (el.director === 'Steven Spielberg' && el.genre.indexOf('Drama') != -1) {
      return el;
    }
  });

  return newArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  // if(movies.length === 0) return 0

  let copyOfMovies = [...movies];

  return (
    Number(
      (
        copyOfMovies.reduce((totalScore, movie) => {
          // if(movie.score) return totalScore += movie.score
          // return totalScore
          return (totalScore += movie.score || 0);
        }, 0) / copyOfMovies.length
      ).toFixed(2)
    ) || 0
  );
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let copyOfMovies = [...movies];

  let dramaMovies = copyOfMovies.filter(
    (movie) => movie.genre.indexOf('Drama') != -1
  );

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let copyOfMovies = [...movies];

  return copyOfMovies.sort((a, b) => {
    if (a.year > b.year) return 1;
    else if (b.year > a.year) return -1;
    else {
      return a.title.localeCompare(b.title);
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let copyOfMovies = [...movies];

  return copyOfMovies
    .sort((a, b) => {
      return a.title.localeCompare(b.title);
    })
    .slice(0, 20)
    .map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// title: 'American Beauty',
// year: 1999,
// director: 'Sam Mendes',
// duration: '2h 2min',
// genre: ['Drama', 'Romance'],
// score: 8.4

function turnHoursToMinutes(movies) {
  // let copyOfMovies = [...movies];
  // function timeConvert(d) {
  //   let hour;
  //   let min;
  //   let totalMin;
  //   if (d.indexOf('h') != -1) {
  //     d = d.split(' ');
  //     hour = parseInt(d[0]) * 60;
  //     min = parseInt(d[1]);
  //     return (totalMin = hour + min);
  //   } else {
  //     return (totalMin = parseInt(d));
  //   }
  //   return totalMin;
  // }
  // return copyOfMovies.forEach((movie) => {
  //   movie.duration = timeConvert(movie.duration);
  // });
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
