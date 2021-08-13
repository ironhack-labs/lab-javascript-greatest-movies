const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array, key) {
  const result = array.map((item) => {
    return item[key];
  });

  return result;
}
// console.log(getAllDirectors(movies, "director"));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array, key, target) {
  const result = array.filter((movie) => {
    if (movie[key] === target && dramaExists(movie.genre)) {
      return true;
    }
  });
  return result.length;
}
// console.log(howManyMovies(movies, 'director', 'Steven Spielberg'));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieArray, key) {
  const numberOfScores = movieArray.length;
  const sumOfScores = movieArray.reduce((accumulator, movie) => {
    return accumulator + movie[key];
  }, 0);
  const average = sumOfScores / numberOfScores;
  const roundedAverage = Number(average.toFixed(2));

  return roundedAverage;
}
// console.log(scoresAverage(movies, 'score'));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const { amountOfDramas, sumOfScores } = getDramaInfo(moviesArray);
  const rawAverage = sumOfScores / amountOfDramas;
  const roundedAverage = Number(rawAverage.toFixed(2));
  return roundedAverage;
}

function getDramaInfo(moviesArray) {
  let amountOfDramas = 0;
  let sumOfScores = 0;
  moviesArray.map((movie) => {
    if (dramaExists(movie.genre)) {
      amountOfDramas++;
      sumOfScores += movie.score;
    }
  });
  return { amountOfDramas, sumOfScores };
}

function dramaExists(genres) {
  let result = false;
  genres.map((genre) => {
    if (genre === 'Drama') {
      result = true;
    }
  });

  return result;
}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedArray = moviesArray.sort((a, b) => (a.year > b.year ? 1 : -1));
  return sortedArray;
}
// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let result = [];

  const sortedArray = moviesArray.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  for (let i = 0; i < 20; i++) {
    const currentMovieTitle = sortedArray[i].title;
    result.push(currentMovieTitle);
  }

  return result;
}

// console.log(orderAlphabetically(movies));

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
    bestYearAvg
  };
}
