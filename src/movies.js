// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(data) {
  const directors = data.map((movie) => movie.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const filteredArray = movies.filter(
    (movie) =>
      movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
  );
  return filteredArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    const filteredMovies = movies.filter(
      (movie) => typeof movie.score == 'number'
    );
    const total = filteredMovies.reduce((acc, value) => {
      return acc + value.score;
    }, 0);
    const averageScore = total / movies.length;
    return Number(averageScore.toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    const filteredMovies = movies.filter(
      (movie) => movie.genre == 'Drama' && typeof movie.score == 'number'
    );
    if (filteredMovies.length === 0) {
      return 0;
    } else {
      const total = filteredMovies.reduce((acc, value) => {
        return acc + value.score;
      }, 0);
      const averageScore = total / filteredMovies.length;
      return Number(averageScore.toFixed(2));
    }
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  if(movies.length == 1) {
    const singleMovieArray = movies.map( movie => movie);
    return singleMovieArray;
  }
  const orderedMovies = movies.sort((a,b) => {
    if(a.year == b.year) {
      return a.title.localeCompare(b.title)
    } else {
      return a.year - b.year
    }
  })
  const mappedMovies = orderedMovies.map( movie => movie )
  return mappedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  if(movies.length == 1) {
    const singleMovieArray = movies.map( movie => movie.title);
    return singleMovieArray;
  }
  const mappedMovies = movies.map( movie => movie.title)
  const orderedMovies = mappedMovies.sort((a,b) => {
      return a.localeCompare(b)
  }) 
  const splicedMovies = orderedMovies.splice(0,20);
  return splicedMovies;
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
