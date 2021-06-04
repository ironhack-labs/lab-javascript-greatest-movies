// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const directorArray = arr.map(function(movie) {
    return movie.director
  });
  return directorArray;
}

console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const spielbergDrama = arr.filter(function (movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  });
  return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length < 1) {
    return 0;
  }
  const sumScores = arr.reduce(function (acc, value) {
    if (value.score === '' || value.score === 'undefined') {
      return acc + 0;
    } else {
    return acc + value.score;
    }
}, 0);
  return parseFloat((sumScores / arr.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let numberOfDrama = 0;
  const sumScores = arr.reduce(function (acc, value) {
    if (value.genre.includes('Drama')) {
      numberOfDrama++;
      return acc + value.score;
    }
  }, 0);
  return parseFloat((sumScores / numberOfDrama).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const newArr = arr.slice();
  const sortedMovies = newArr.sort( function(a , b) {
    if (a.year === b.year){
      return a.title - b.title;
    } else
    {
    return a.year - b.year;
    }
  });
  return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const newArr = arr.slice();
  const alphMovies = newArr.sort( function(a, b) {
    for (i=0; i < 20; i++){
      return a.title - b.title;
    }
  });
    return alphMovies.title;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

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
    bestYearAvg,
  };
}
