let movies = require('./data');

//console.log(movies.lenght)

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map(function (mov) {
    return mov.director
  });
  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaSteven = movies.filter(function(array) {
    return array.genre.includes('Drama') && array.director === "Steven Spielberg"
  });
  
  return dramaSteven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length < 1 || movies == undefined) {
    return 0;
  }
  
  const avgScore = movies.map(function (array) {
    let allScores = array.score
    //if (array.score.lenght === 0){
    //  continue
    //}
    return allScores
  });
  
  let sum = 0; 
  let avg = 0 
    for (let i = 0; i < avgScore.length; i++) {
        sum += avgScore[i];
    }
    
    avg = sum / avgScore.length
  return Math.round(avg * 100) / 100

}
console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(function (movies){
    return movies.genre.includes('Drama');
  });

  if (dramaMovies.length === 0){
    return undefined
  }else {
    let result = scoresAverage(dramaMovies)
    return result
  }
}
console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {


 /* const allDirectors = movies.map(function (mov) {
    let convertDuration = mov.duration
    return convertDuration 
  
  });
  return allDirectors */
}

//console.log (turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {


}



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
