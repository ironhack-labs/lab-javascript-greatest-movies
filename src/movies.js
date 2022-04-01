const movies = require("./data");

// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arrMovies) {
      const directorsArray = arrMovies.map(element => element.director);
      return  directorsArray;   
}
//console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrMovies) {
  const spielbergDramaMovies = arrMovies.filter(element => 
    element.director==='Steven Spielberg' && element.genre.includes('Drama'));
    if (spielbergDramaMovies.length !=0){
      return spielbergDramaMovies.length;
    }
      return 0;
}
//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrMovies) {
  
  if (arrMovies.length !=0){
    const scoreMovies=arrMovies.reduce((sum, movie) => sum + movie.score, 0);
    const avgScore = scoreMovies/arrMovies.length;
    console.log(avgScore);
    return Number(avgScore.toFixed(2));
    };
  return 0; 
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrMovies) {
  if (arrMovies.length !=0){
    const dramaMovies= arrMovies.filter(element => element.genre=='Drama')
    const scoreDrama=dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
    const avgDrama = scoreDrama/dramaMovies.length;
  console.log(avgDrama);
  return avgDrama;
  }
  return 0; 
}
console.log(dramaMoviesScore(movies));

////// Sorting 
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrMovies) {
  const yearOrderedMovies = arrMovies.sort((a,b)=>{
    if(a.year - b.year == 0) return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    else return a.year - b.year;
         }
);
  return yearOrderedMovies;
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrMovies) {
  const alphabetOrderedMovies = arrMovies.sort((a, b) => a.title.toLowerCase() - b.title.toLowerCase());
  const alphabetOrderTitle=alphabetOrderedMovies.map(element => element.title);
  if (alphabetOrderedMovies.length>20) {
    return alphabetOrderTitle.slice(0,19);
  } 
  else
  {
    return alphabetOrderTitle;
  }
};
console.log(orderAlphabetically(movies));

///BONUSES:
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
