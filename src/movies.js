// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
   let listDirector = arr.map((num) => {
    return num.director;
  })
  return listDirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let dramaMovies = arr.filter((curr) => {
    return curr.director === "Steven Spielberg" && curr.genre.includes("Drama");
  }).length
  return dramaMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  //Average score of all movies and display it to the console
  if(!arr.length) {
    return 0
  }
  const totalObj = arr.length;
  let sumOfScores = arr.reduce((acc, curr) => {
      return curr.score += acc
    },0)
  let average = sumOfScores / totalObj;
  return Number(average.toFixed(2));
  }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramaMovies = arr.filter((movie) => {
    return movie.genre.includes("Drama")
  });
  let numberOfMovies = dramaMovies.length;
  let totalScore = dramaMovies.reduce((acc,curr) => {
    return curr.score += acc
  },0)
  let averageScore = totalScore / numberOfMovies
  return Number(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function compare(a,b) {
  if (a.year < b.year) return -1; // a is less than b
  if (a.year > b.year) return 1; // a is greater than b
  if (a === b) {
     if (a.title > b.title) return 1;
     if (a.title < b.title) return -1;
     if(a.title=== 0) return 0;}
}

function orderByYear(arr) {
  return arr.sort(compare)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

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
