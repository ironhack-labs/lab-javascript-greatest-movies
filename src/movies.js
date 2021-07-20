// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data");

function getAllDirectors(arr) { 
  const moviesDirectors = arr.map((element, index, array) => { 
    return element.director; 
  });
  return moviesDirectors; }; 



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
const dramaSpielbergmovies = movies.filter((element) => {
  if (element.director === "Steven Spielberg" && element.genre.includes("Drama")){
    return true
  }
});
return dramaSpielbergmovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length === 0){
    return 0;
  }

  const totalScores = movies.reduce((acc, el) => {
    if(el.score){
      return acc + el.score;
    } else {
      return acc;
    }
    }, 0);
    
    return roundToTwoDecimals(totalScores/movies.length);

}  

    function roundToTwoDecimals(number) {
      return Math.round(number*100) / 100;
    };

/*const moviesWithScoreEight = movies.reduce((acc,el)=>{
  if(el.score === 8){
    return acc + el.score;
  } else {
    return acc;
  }
  
}, 0);*/




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((element) => {
    if (element.genre.includes("Drama")){
      return true;
    }
  });

  if(!dramaMovies.length){
    return 0;
  }
  
  const avgScoreOfDramaMovies = dramaMovies.reduce((acc,el) =>{
      if (el.score){
        return acc + el.score;
      } else {
        return acc;
      }
  }, 0);

  return roundToTwoDecimals(avgScoreOfDramaMovies / dramaMovies);

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
};
