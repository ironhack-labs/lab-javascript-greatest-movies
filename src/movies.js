// Iteration 1: All directors? - Get the array of all directors.

const movies = require("./data");


function getAllDirectors() {

  movies.map(function(direcs){
    return movies.director 
  })
  return getAllDirectors    // maybe i did something wrong!?
  }
  

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {
   return movies.sort().filter(function(duplicates,a,b){
     return !a || duplicates != b [a-1]   // first i did sort, then removed dupli.
          // this methode i found at google
   })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(moviesArray=[]) {
  return moviesArray.filter(p=>(p.director=="Steven Spielberg" && p.genre.includes("Drama"))).length
}
 
// found this on google

// Iteration 3: All scores average - Get the average of all scores with 2 decimals


function scoresAverage(moviesArray = []) {
/// const average = list => list.reduce((prev, curr) => prev + curr) / list.length;
  const score = moviesArray.length? moviesArray.reduce((a, v) => a +(v.score||0), 0) /moviesArray.length:0;
  return score.toFixed(2)*1;

// got some help here 



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray = []) {
    return dramaMoviesScore
    let averageDrama = filteredDrama / filteredDrama.length
    
    let filteredDrama = movies.filter(({ genre }) => genre == 'drama'),
    averageDrama = filteredDrama.reduce((a,b) = a+b.score) / filteredDrama.lenght
        
  } return averageDrama
  
  console.log(dramaMoviesScore)
}

// here my problem was to submit to correct syntax to get
//the average of Object genre:drama , and it´s score ... 


const dscore = moviesArray.lenght? moviesArray.reduce((a,v) => a +(v.score || 0) /moviesArray.lenght : 0);

 // ,, ,, my problem is how to get the average of the object genre:drama

})



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(yearArray) {
  return orderByYear
  const years = movies.sort(function(a,b){
    return a.year - b.year
  })
}
// i dont get an result?? 







// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  return orderAlphabetically
  const alphabetic = movies.sort(function(a,b){
    return a.title - b.title
  })
}
// again no result
// how to make the max value of 20 titles

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

