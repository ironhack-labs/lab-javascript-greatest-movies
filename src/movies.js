// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((movie)  => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  /*const filterMovies = (movies) => {
    return movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
  }
  return filterMovies(movies).length*/
  return movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
     return 0;
   }

  let totalScore = movies.reduce(function (accumulated, currentMovie) {
    if (typeof currentMovie.score != 'number') {
      return accumulated;
    } else {
      return accumulated + currentMovie.score;
    }
  }, 0);
  return Number((totalScore / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(function (movie) {
    if (movie.genre.includes('Drama')) {
      return movie;
    }
  });
  if (dramaMovies.length === 0) {
    return 0;
  }
  const dramaScore = dramaMovies.reduce(function (acc, movie) {
    if (movie.score) {
      return acc + movie.score;
    }
    return acc;
  }, 0);

  return Number((dramaScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sorted = movies.slice().sort(function (a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let movieTitles = [];
   movies.map(function (movie) {
     movieTitles.push(movie.title);
   });

   const sortedAlphabetically = movieTitles.sort(function (a, b) {
     return a.localeCompare(b);
   });
   return sortedAlphabetically.slice(0, 20);
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
