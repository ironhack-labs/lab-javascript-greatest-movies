// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(bestMoviesEver) {
  const directors = bestMoviesEver.map(function(movie) {
    return movie.director;
  });
  // console.log("hiiiiiiiiiiiiii", directors)
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(bestMoviesEver) {
  const spielbergDramas = bestMoviesEver.filter(function(movie){
    if(movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')){
      return true;
    }
    return false; 
  })

  return spielbergDramas.length;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(bestMoviesEver) {
  if(bestMoviesEver.length === 0){
    return 0;
  }

  const sumScore = bestMoviesEver.reduce((accumulator, value) => {
    if(typeof(value.score) === "number") {
      return accumulator + value.score
    }

    return accumulator
  }, 0);

  const averageScore = sumScore / bestMoviesEver.length
  
  return Math.round(averageScore * 100) / 100
} 

  
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(bestMoviesEver) {
  if(bestMoviesEver.length === 0){
    return 0;
  }

  const allDramas = bestMoviesEver.filter(function(movie){
    if(movie.genre.includes('Drama')){
      return true;
    }
    return false; 
  })

  if(allDramas.length === 0){
    return 0;
  }

  const sumDramaScore = allDramas.reduce((accumulator, value) => {
    if(typeof(value.score) === "number") {
      return accumulator + value.score
    }
    
    return accumulator 
  },0)

  const averageScoreDramas = sumDramaScore / allDramas.length
  
  return Math.round(averageScoreDramas * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(bestMoviesEver) {
  let clonedArray =  JSON.parse(JSON.stringify(bestMoviesEver))

  let sortedArray = clonedArray.sort((firstMovie, secondMovie) =>{
    
    if (firstMovie.year < secondMovie.year ){
      return -1;
    } else if (firstMovie.year > secondMovie.year) {
      return 1;
    } else { 
      if (firstMovie.title < secondMovie.title ){
        return -1;
      } else if (firstMovie.title > secondMovie.title) {
        return 1;
      } else {
        return 0;
      }
    } 
  }) 
 
  return sortedArray
}

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
