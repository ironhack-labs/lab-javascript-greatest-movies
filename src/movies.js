// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map(film => film.director);
}

//console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const stevenDramas = arr.filter(film => film.director === "Steven Spielberg" && film.genre.includes("Drama"));
  return stevenDramas.length;
}

//console.log(howManyMovies(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    const scores = arr.map((film) => {
      if(!film.score){
        film.score = 0;
      }
      return film.score;
    });
    const sum = scores.reduce((previous, current) => previous + current);
    const average = Math.round((sum / scores.length) * 100) / 100;
    return average;
  }
}

// console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramas = arr.filter(film => film.genre.includes("Drama"));
  if (dramas.length === 0) {
    return 0
  } else {
    const dramasScores = dramas.map(film => film.score)
    const dramasScoresSum = dramasScores.reduce((previous, current) => previous + current);
    const dramaScoresAverage = Math.round((dramasScoresSum / dramasScores.length) * 100) / 100;
    return dramaScoresAverage;
  }
}

// console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const moviesCopy = arr.map(film => film);
  moviesCopy.sort(function(a, b) {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
  });
  return moviesCopy;
}

// console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const titles = arr.map(film => film.title);
  titles.sort();
  return titles.slice(0,20);
 }

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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

// const movies = require('./data');
