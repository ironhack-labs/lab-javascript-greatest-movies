const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arrayMovies) {
  return arrayMovies.map(movie => movie.director) 
}
// _Bonus_Iteration 1: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function allDirectors (arrayMovies){
  const directors = [];
  arrayMovies.forEach(movie => {
    if (!directors.includes(arrayMovies)) {
      directors.push(movie.director);
    }
  });
  return directors /*.sort((a,b) => a.localeCompare(b)) --- DEIXAR NA ORDEM ALFABETICA */;
}
console.log(allDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayMovies) {
  const stevenDramaMovies = arrayMovies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama'))
  return stevenDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals <----------------- !?!?!?!?

function scoresAverage(arrayMovies) {
  sumScore = arrayMovies.reduce((acc, element) => !element.score? acc + 0 : acc + element.score / arrayMovies.length
  ,0)
  return parseFloat(sumScore.toFixed(2));
}

// if(arrayMovies.length === 0) return 0;
//   const sumRating = arrayMovies.reduce(function(acc, rating){
//     if(rating.rate === 0) {
//       return acc + 0;
//     }
//     return acc + rating.rate;
//   } , 0);
//   const avgRating = (sumRating / arrayMovies.length);
//   return Math.round((avgRating*100)/100);

// Iteration 4: Drama movies - Get the average of Drama Movies      <----------------- ?!?!?!?!
function dramaMoviesScore(arrayMovies) { 
  const dramaMovies = arrayMovies.filter(dramaMovie => dramaMovie.genre.includes ('Drama'))
  return scoresAverage(dramaMovies);
} 


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayMovies) {
  const copyMovies = JSON.parse(JSON.stringify(arrayMovies));

  copyMovies.sort((a,b) => {
  if(a.year < b.year) return -1;
  if(a.year > b.year) return 1;
  return a.title.localeCompare(b.title)
 });
 return copyMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayMovies) {
  const titles = arrayMovies.map(movieTitle => movieTitle.title)

  titles.sort((a,b) => {
    if(a < b) return -1;
    if(a > b) return 1;
  })
  return titles.slice(0,20)
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
