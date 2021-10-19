// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const directors = arr.map(function(movie, index, array) {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    const spielbergDramaMovies = movies.filter(function (movie) {
      if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
        return movie;
      } 
    });
    return spielbergDramaMovies.length;
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) return 0;
  return +(
    movies.reduce((acc, current) => (current.score ? acc + current.score : acc + 0), 0) /
    movies.length
  ).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  return scoresAverage(movies.filter(function (movie) {
    return movie.genre.includes('Drama');
  }));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const newArr = [...movies];
  const numMovies = newArr.sort(function(a, b) {
    return a.year - b.year
  })
  .sort(function(a,b) {
    if (a.year === b.year) {
      return a.title > b.title ? 1 : -1;
    }
  })
  return numMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies.map(function (movie) {
    return movie.title;
  })
  .sort()
  .slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  if (!movies.length) return null;
  return movies.map(function (movie) {
    const dur = movie.duration;
    const hour = dur.match(/\d*h/) 
      ? +dur.match(/\d*h/)[0].replace('h', '') * 60
      : 0;
    const minutes = dur.match(/\d*min/)
      ? +dur.match(/\d*min/)[0].replace('min', '')
      : 0;
    return { ...movie, duration: hour + minutes};
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (!movies.length) return null;
  const ordered = orderByYear(movies);
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
