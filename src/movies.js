// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  const moviesDirec = moviesArr.map((movie) => {
    return movie.director;
  });
  return moviesDirec;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  const stevenDramas = moviesArr.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return stevenDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  if (!moviesArr.length) return 0;
  let totalScore = moviesArr.reduce((acc, val) => {
    if (!val.score) {
      return acc;
    }
    return acc + val.score;
  }, 0);
  let avg = totalScore / moviesArr.length;
  let dec = Number(avg.toFixed(2));
  return dec;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const dramaMoviesAvg = moviesArr.filter((movie) =>
    movie.genre.includes('Drama')
  );
  return scoresAverage(dramaMoviesAvg);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieArr) {
  let year = [...movieArr].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return year;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  let moviesTitles = moviesArr.map((movie) =>  movie.title);

  let orderedTitles = moviesTitles.sort((a, b) => a.localeCompare(b));
  if (orderedTitles.length > 20) {
    return orderedTitles.slice(0, 20);
  } else if (orderedTitles.length < 20) {
    return orderedTitles.slice(0, 20);
  }
  return orderedTitles;
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
