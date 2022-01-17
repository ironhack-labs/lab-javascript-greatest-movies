// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map(function (movie){
    return movie.director;
  });
  return [...new Set(allDirectors)];
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const spielbergDramaMovies = arr.filter(function (movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  });
  return spielbergDramaMovies.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const totalScore = movies.reduce(function(sum, movie) {
    if (movie.score === '' || movie.score === undefined) {
      movie.score = 0;
    };
    return sum + movie.score;
  },0);
  let avg = totalScore / movies.length;
  return Math.round(avg * 100) / 100;
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const filtered = array.filter(function (movie){
      return movie.genre.includes('Drama')
    });
    if (filtered.length === 0) {
      return 0;
    }
const dramaScore = filtered.reduce(function(sum, current) {
   return sum + current.score;
},0);
let avg = dramaScore / filtered.length;
return Math.round(avg * 100) / 100;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movie) {
  const orderedByYear = [...movie].sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
  return orderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const orderedByTitle = [...movies].sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  const first20 = orderedByTitle.slice(0, 20);
  let first20Titles = first20.map(a => a.title);
  return first20Titles;
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movie) {
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
