
const movies = require('./data')
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
// console.log(movies);
  const allDirectors = movies.map(eachDirector => eachDirector.director);
  return allDirectors
//console.log(allDirectors)
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {


  const stevenSpielberg = movies.filter(eachMovies => {
   return eachMovies.genre.includes('Drama') && eachMovies.director === 'Steven Spielberg'
    




  })
  return stevenSpielberg.length


}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let count = 0;
  if (movies.length === 0) { return 0
      
    } else {
  movies.forEach(eachMovies => {

    if (eachMovies.score ) {   count += eachMovies.score
    } else {
      count += 0
    }
  
    }
   
  )}
  return Number((count /movies.length).toFixed(2));
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
 const dramaMovies = movies.filter(eachMovies => {
    return eachMovies.genre.includes('Drama')
  })
  let dramaAverage = 0;
  if (dramaMovies.length > 0) {
     let dramaMoviesAverage = dramaMovies.map( movie => { return movie.score});
  let SumTotalScore = dramaMoviesAverage.reduce((sum, score) => { return sum + score;} , 0);

  dramaAverage = Number((SumTotalScore /dramaMovies.length).toFixed(2));
  }
 return dramaAverage

}

/*function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(eachMovies => {
    return eachMovies.genre.includes('Drama')
  })
  let dramaAverage = 0;
  if (dramaMovies.length > 0) {
     let dramaMoviesAverage = dramaMovies.map( movie => { return movie.score});
  let SumTotalScore = dramaMoviesAverage.reduce((sum, score) => { return sum + score;} , 0);

  dramaAverage = Number((SumTotalScore /dramaMovies.length).toFixed(2));
  }


 //console.log(dramaAverage)

  return dramaAverage


}
console.log(dramaMoviesScore(movies))*/

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let sorted = [...movies]
   sorted.sort((movie1, movie2) => {
return movie1.year - movie2.year
  })
  return sorted;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {}

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
