// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayOfFilms) {
  const allDirectors = arrayOfFilms.map((movie) => {
    movie.director;
  });
  return allDirectors;
}
// let allDirectors = arrayFrom(getAllDirectors)
// I can't work out how to fulfill the same enght array test, I tried using forEach but it didn't work either.

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayOfFilms) {
  let movieCount = 0;
  arrayOfFilms.filter(() => {
    if (
      movies.includes(genre.drama) &&
      movies.director === 'Steven Spielberg'
    ) {
      movieCount += 1;
    }
  });
  return movieCount;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrayOfFilms) {
  let total = 0;
  // why doesn't itl ike movies.score? That's how info within an array was acessed in the lessons, or is this a potato
  const avgScore = arrayOfFilms.reduce((total, moviesscore) => {
    if (movies.score) {
      return (total += movies.score / arrayOfFilms.length);
    }
    0;
  });
  return avgScore;
}

/*let total = 0;
  const avgScore = arrayOfFilms.reduce((total, movie) => {
    if (movie.score) {
      return total += movie.score / arrayOfFilms.length;
    }
    0;
  });
  return avgScore;
  
  const avg = array.reduce((a, b) => a + b) / array.length
  ^this gave me a lot of trouble
  */

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrayOfFilms) {
  for (let genre of movies) {
    if (movies.genre === 'drama') {
      return movies.score / arrayOfFilms.length;
    }
  }
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
  let sortedYear = [...movies.year];
  sortedYear.sort((yearA, yearB) => {
    return yearA.localeCompare(yearB);
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  let abcOrder = movies.title.sort((title1, title2) => {
    return abcOrder.slice(0,19).title1.localeCompare(title2)
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
    bestYearAvg
  };
}
