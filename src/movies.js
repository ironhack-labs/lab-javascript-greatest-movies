// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDramaMovies = movies.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  }
  const sum = movies.reduce((sum, movie) => {
    if (movie.score) {
      return sum + movie.score;
    } else {
      return sum;
    }
  }, 0);
  const average = sum / movies.length;
  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => {
    return movie.genre.includes('Drama');
  });

  if (!dramaMovies.length) {
    return 0;
  }

  const sumDramaMoviesScore = dramaMovies.reduce((sum, movie) => {
    return sum + movie.score;
  }, 0);

  const dramaMoviesScoreAverage = sumDramaMoviesScore / dramaMovies.length;

  return Math.round(dramaMoviesScoreAverage * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedMoviesByYear = movies.sort((movie1, movie2) => {
    const movie1Year = movie1.year;
    const movie2Year = movie2.year;

    if (movie1Year > movie2Year) {
      return 1;
    } else if (movie1Year < movie2Year) {
      return -1;
    } else {
      if (movie1.tittle > movie2.tittle) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  const newSortedMoviesByYear = JSON.parse(JSON.stringify(sortedMoviesByYear));
  return newSortedMoviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let newArray = JSON.parse(JSON.stringify(movies));

  newArray.sort((movie1, movie2) => {
    if (movie1.title > movie2.title) {
      return 1;
    } else if (movie1.title < movie2.title) {
      return -1;
    } else {
      return 0;
    }
  });

  let onlyNames = newArray.map((movie) => {
    return movie.title;
  });

  if (onlyNames.length > 20) {
    return onlyNames.slice(0, 20);
  }

  return onlyNames;
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
    bestYearAvg
  };
}
