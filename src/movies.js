// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies){
  const directors = movies.map(element => element.director);
  return directors;
}
  /*
  for(let i = 0 ; i < array.length; i++){
    if(array.directors === true){
      directorsArray.push(array.length)
    }
  }
  return directorsArray
}; 
*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(
    element =>
      element.director === 'Steven Spielberg' &&
      element.genre.includes('Drama')
  ).length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0){
    return 0;
  }
  const avgScore = movies.reduce((acc,element)=>{
    if(element.score){
      return acc + element.score;
    }else{
      return acc;
    }
  },
    0);

    let avgScoreDecimals = (avgScore/movies.length).toFixed(2);
    return parseFloat(avgScoreDecimals)
  }

   
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if(movies.length===0){
    return 0;
  }
  const avgDrama = movies.reduce((acc,element)=>{
      if(element.genre === 'drama'){
        return acc + element.length;
      }else{
        return acc;
      }
  },0);
    let avgDramaReal = (avgDrama/movies.length);
    return avgDramaReal;                           //devolver como un solo elemento de array.
} 

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
