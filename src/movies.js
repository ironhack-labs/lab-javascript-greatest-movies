// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
   
   const directorsArr = movies.map(function(eachMovie) {
    return eachMovie.director 
    // const directorsArr = moviesArr.map(movie => movie.director)
})
 return directorsArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  filteredMovies = movies.filter(function(eachMovie) {
    if (eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')) {
        return true 
    } 
});

return filteredMovies.length 
}

function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  }

  let totalAverage = movies.reduce((a, b) => {
    
    if (b.score) {
      return a + b.score;
    } else {
      return a;
    }
  }, 0);

  return Number((totalAverage / movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  let dramaMoviesArr = movies.filter(function(eachMovie) {
    return eachMovie.genre.includes('Drama')
  });

  return scoresAverage(dramaMoviesArr)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let moviesArr = JSON.parse(JSON.stringify(movies)); // deep clone 
  moviesArr.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
      return 0;
    }
  });

  return moviesArr; 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesArr = JSON.parse(JSON.stringify(movies)); // deep clone 

  sortedMoviesArr = moviesArr
    .sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    })
    .map(eachMovie => eachMovie.title)
    .slice(0, 20);

 return sortedMoviesArr 
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
