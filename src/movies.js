// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(function(movie){
    return movie.director 
  })  
  //return myDirectors
} 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const result1 = moviesArray.filter(function(movie0){
    return movie0.director === 'Steven Spielberg' && movie0.genre.includes('Drama')
  });
  return result1.length
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  
  if (moviesArray.length === 0) {
    return 0;
  }
  const totalScores = moviesArray.reduce(function(accu, movie){
    if (movie.score > 0) {
      return accu + movie.score;
    } else  {
      return accu ;
    }
  }, 0);
  const average = totalScores / moviesArray.length;
  const decimal = (value) => Math.round(value * 100) / 100;
  return decimal(average, 2);
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(function(movie){
    return movie.genre.includes('Drama');
  });
  average = scoresAverage(dramaMovies);
  return average;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copy = [...moviesArray];
    copy.sort(function(element1, element2){
    if(element1.year > element2.year) {
      return element1.year - element2.year
    } else if (element2.year > element1.year) {
      return element2.year - element1.year
  }
  })
  return copy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



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
