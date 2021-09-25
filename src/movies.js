// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors =  movies.map(movie => movie.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  // filter 
  // Meet two conditions: 
  // 1 - check Director: movie.director AND
  // 2 - includes --> check if 'Drama' is inside the genre array --> [].includes('Drama')
  const drama = movies.filter(movie => 
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
  return drama.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  
if(!movies.length) return 0;
  // get a new array with scores --> map
  // get the sum of scores --> reduce
  // average --> divided by scoreArr.lenght
  // 2 decimals --> toFixed() --> string --> convert to a number --> Number(num.toFixed(2))
  const scoreArr = movies.map(movie => movie.score);
  const sumScore = scoreArr.reduce((acc, curr) => {
    return acc + curr;
  }, 0); // initial value is 0, to start to sum
  
  const avgScoreTwoDecimals = Number((sumScore/scoreArr.length).toFixed(2));
  return avgScoreTwoDecimals;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

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
