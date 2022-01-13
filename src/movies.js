// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorList = movies.map(element => {return element.director});
  return directorList
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  if ( movies.length === 0) {
    return 0;
  } 
  const spielbergDrama = movies.filter(element => { 
    return element.director === 'Steven Spielberg' && element.genre.includes('Drama');
  });
return spielbergDrama.length
} 
    

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if ( movies.length === 0) {
    return 0; }
  const average = movies.reduce((acc, value) => {
    return acc + value.score;
    },0); 

let scoreResult = average / movies.length
return scoreResult
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(element => {
    return element.genre.includes('Drama') ;
 });
 const dramaScore = dramaMovies.reduce((acc, value) => {
   return acc + value.score;
 },0);

 let dramaResult = dramaScore / dramaMovies.length
 return dramaResult

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order) 
//-- ARRAYS - SORT -- can be left as a bonus but try to
// FIRST to clone the array, then add code.
 function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// sort
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
