// Iteration 1: All directors? - Get the array of all directors.

const movies = require("./data");

// _Bonus_: It seems some of the directors had directed multiple 
// movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  return moviesArr.map(function(movie) {
    return movie.director;
  })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  
  const ssMovies = moviesArr.filter(function(movie){
    return movie.director === 'Steven Spielberg';
  })
  
  const ssDramaMovies = ssMovies.filter(function(movie) {
    return movie.genre.includes('Drama');
  })
  
  return ssDramaMovies.length;
  
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  
  if (moviesArr.length === 0) {
    return 0;
  }
  
  const scoredMovies = moviesArr.filter(function(movie) {
    return movie.score !== undefined;
  })
  
  const allScores = scoredMovies.map(function(movie) {
    return movie.score;
  })
  
  const sumAllScores = allScores.reduce(function(acc, val) {
    return acc + val;
  })
  
  return +(sumAllScores / allScores.length).toFixed(2);
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  
  // if (moviesArr.length === 0) {
  //     return 0;
  // }
  
  const scoredMovies = moviesArr.filter(function(movie) {
    return movie.score !== undefined;
  })
  
  const scoredDramaMovies = scoredMovies.filter(function(movie) {
    return movie.genre.includes('Drama');
  })
  
  if (scoredDramaMovies.length === 0) {
    return 0;
  }
  
  const allScoresOfScoredDramaMovies = scoredDramaMovies.map(function(movie) {
    return movie.score;
  })
  
  const sumAllScoresOfScoredDramaMovies = allScoresOfScoredDramaMovies.reduce(function(acc, val) {
    return acc + val;
  })
  
  return +(sumAllScoresOfScoredDramaMovies / allScoresOfScoredDramaMovies.length).toFixed(2);
  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  
  const copyOfMovies = moviesArr.map(function(movie) {
    return movie;
  })
  
  const yearAndTitleSortedMovies = copyOfMovies.sort(function(a, b) {
    if (a.year === b.year) {
      return (a.title).localeCompare(b.title);
    }
    return a.year - b.year;
  })
  
  return yearAndTitleSortedMovies;
  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  
  const copyOfMovies = moviesArr.map(function(movie) {
    return movie;
  })
  
  const alphOrdered = copyOfMovies.sort(function(a,b) {
    return a.title.localeCompare(b.title);
  })
  
  const onlyTitle = alphOrdered.map(function(movie) {
    return movie.title;
  });
  
  const first20 = onlyTitle.slice(0,20);
  
  return first20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
  
  const copyOfMovies = JSON.parse(JSON.stringify(moviesArr));
  
  for (movie of copyOfMovies) {
    if (movie.duration.indexOf('h') !== -1) {
      const hIndex = movie.duration.indexOf('h');     
      const hours = movie.duration.slice(0,hIndex);       
      const hoursInMinutes = +hours * 60;            
      const mIndex = movie.duration.indexOf('m');       
      const minutes = movie.duration.slice(hIndex+2, mIndex);     
      movie.duration = +hoursInMinutes + +minutes;       
    } else {
      const mIndex = movie.duration.indexOf('m');       
      movie.duration = +movie.duration.slice(0, mIndex);      
    }
  }
  
  return copyOfMovies;
  
}

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
  