// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require(("./data"));

function getAllDirectors(movies) {
  let allDirectors = (movies.map(moviesElm => moviesElm.director));

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let movieDrama = movies.filter(moviesElm => moviesElm.director == 'Steven Spielberg' && moviesElm.genre.includes('Drama')) 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let sum = 0;
  let allScores = (movies.map(moviesElm => moviesElm.score));
  if( movies.length === 0 ){
    return 0;
  } else {
    allScores.reduce((acc, eachScore) => {
      if( !eachScore ) {
        sum += 0;
      } else {
        sum = acc + eachScore;
        return sum;
      }
    }, 0)
    return Math.round((sum / allScores.length) * 100) / 100;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrMovies) {
  let sumDramaScores = 0;
  let counter = 0;
  
  arrMovies.forEach (eachMovie => {
    if (eachMovie.genre.includes('Drama')) {
      sumDramaScores += eachMovie.score;
      counter++;
    }
  })
  if (counter === 0) {
    return 0;
  } else {
    return Math.round((sumDramaScores/counter) * 100) / 100
  }  
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrMovies) {
  let copy = [...arrMovies];
  let arrYears = copy.map (eachMovie => eachMovie.year)
  let arrTitles = copy.map (eachMovie => eachMovie.title)
  copy.sort((a, b) => {
    if (a.year - b.year !== 0) {
      return a.year - b.year
    } else {
      // return a.title - b.title
      return a.title.localeCompare(b.title);
  }})
  return copy;
 
 }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  
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
