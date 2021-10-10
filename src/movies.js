// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map(movies => movies.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  return array.filter(movies => movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if(!arr.length) {
    return 0;
  }
  const average = arr.reduce((total, score) =>  {
    if(!score.score) {
      return total;
    }
  return total += score.score;
  }, 0);
  return Number((average / arr.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const isDrama = arr.filter(movie => movie.genre.includes('Drama'));
  const scoreDrama = scoresAverage (isDrama);
  return scoreDrama
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
const copyArr = movies.map(movie => movie);
const byYear = copyArr.sort((a,b) => a.year - b.year);
const byTitle = byYear.sort((a,b) => {
  if(a.year === b.year) {
  if(a.title < b.title) return -1;
  if(a.title > b.title) return 1;
  if(a.title === b.title) return 0;
  }
});
  return byTitle;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
const copyArr = movies.map(movie => movie.title);
const byTitle = copyArr.sort((a,b) => {
    if(a < b) return -1;
    if(a > b) return 1;
    if(a === b) return 0;
  })
const firstTwenty = byTitle.slice(0,20);
return firstTwenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {}

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
