// Iteration 1: All directors? - Get the array of all directors.

const movies = require("./data")

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const res = movies.map(function(movie){
    return movie.director
  })
  return res
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaMovies = movies.filter(function(movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  })
    return dramaMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const sumOfScores = movies.reduce(function(acc, movie) {
    if (typeof movie.score != 'number') {
      return acc;
    } 
    return acc + movie.score
  }, 0)
  const average = sumOfScores / movies.length
  if (movies.length === 0) {
    return 0
  } 
  return parseFloat(average.toFixed(2));

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(function(movie) {
    return movie.genre.includes('Drama')
  })
  return scoresAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  
  if (movies.length === 0) {
    return []
  }
  const yearOfMovies= movies.sort(function(a, b) {
    if (a.year === b.year) {
      if(a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    } else { 
      return a.year - b.year;
    }
  })
  return yearOfMovies;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const yearOfMovies= movies.slice().sort(function(a, b) {
      if(a.title > b.title) {
        return 1;
      } else {
        return -1;
      } 
    
  })
    const titles = yearOfMovies.map(function(movie) {
      return movie.title;
    })
    const slicedTitles = titles.slice(0, 20);
    return slicedTitles;
}

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
