// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((singleMovie)=> {
  return singleMovie.director;
  })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter((movie) => {
    return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  return movies.reduce((sum, movie)=> {
    if (typeof movie.score === 'number') {
      return parseFloat((sum + movie.score / movies.length).toFixed(2));
    }
    return sum;
  },0)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter((movie) => {
    return movie.genre.includes('Drama');
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  let dramaMoviesScoreSum = dramaMovies.reduce((sum, movie)=> {
    return sum + movie.score;
  },0);

  return parseFloat((dramaMoviesScoreSum / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let clonedMovies = JSON.parse(JSON.stringify(movies));
  return clonedMovies.sort((first, second)=> {
    if (first.year === second.year) {
      if (first.title > second.title) {
        return 1;
      }
      if (first.title < second.title) {
        return -1;
      }
      return 0;
    }
    return first.year - second.year;
  }) 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let clonedMovies = JSON.parse(JSON.stringify(movies));
  clonedMovies = clonedMovies.sort((first, second) =>{
    if (first.title > second.title) {
      return 1;
    }
    if (first.title < second.title) {
      return -1;
    }
    else {
    return 0;
    }
  })
  clonedMovies = clonedMovies.slice(0,20);
  return clonedMovies.map((movie)=> {
    return movie.title
  })
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
