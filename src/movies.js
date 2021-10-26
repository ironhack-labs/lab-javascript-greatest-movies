
const movies = require('./data.js');
// Iteration 1: All directors? - Get the array of all directors.
// You can now access the array
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {

    const directorList = movies.map(eachDirector => eachDirector.director);

    return directorList;


  }



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const stevenMovies = movies.filter(eachMovie => {
    if (eachMovie.director == "Steven Spielberg" && eachMovie.genre.includes ('Drama') ) {
      
      return true
    } 
      return false
})
// console.log(stevenMovies);
return stevenMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length == 0) {
    return 0
  }
  else{

        const sumScores = movies.reduce((acc, eachScore) => {
          if(eachScore.score !== undefined) return acc += eachScore.score

          return acc;

      }, 0)

      return Number((sumScores / movies.length).toFixed(2))

    }
  }
    // console.log(sumScore / movies.length)
    


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.length == 0) {
    return 0
  }
  else{

  const dramaMovies = movies.filter(eachMovie => {
    return (eachMovie.genre.includes ('Drama') )
    
})

if(!dramaMovies.length) return 0

  const allScore = dramaMovies.map(movieScore => movieScore.score || 0);

  const scoreDrama = allScore.reduce((acc, eachScore) => {  

  return acc + eachScore

}, 0)
return Number((scoreDrama / dramaMovies.length).toFixed(2))

  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {l}

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
