
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {
  return movies.map(movie => movie.director)
};

  // console.log(getAllDirectors())

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {
  return movies.filter(movie => movie.director === 'Steven Spielberg' );
};

  // console.log(howManyMovies())

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage() {

  const moviesScores = movies.map(movie => movie.score);

  const moviesAvarage = moviesScores.reduce((acc, number) => { return (acc + number) / moviesScores.length});
  
  return roundToTwo(moviesAvarage)
}

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}


  // console.log(scoresAverage())

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {
  if(movies.map(movie => movie.genre == 'Drama')){
    return moviesScores.reduce((acc, number) => { return (acc + number) / moviesScores.length })
  }

}

  // console.log(dramaMoviesScore())

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
  const movieYear = movies.map(movie => movie.year);

  return movieYear.sort((num1,num2) => num1 - num2);
}

  // console.log(orderByYear())

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  const movieTitle = movies.map(movie => movie.title);
  const movieTitleAlpha = movieTitle.sort();
  return movieTitleAlpha.slice(0,20)
}

  // console.log(orderAlphabetically())

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
