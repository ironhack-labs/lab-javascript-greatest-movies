// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((movie) => {
    return movie.director;
  })
  // console.log('all directors:', allDirectors);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovies = moviesArray.filter((movie) => {
    return movie.director === "Steven Spielberg" && movie.genre.includes('Drama');
  })
  // console.log('number of Spielberg Drama Movies:', spielbergMovies.length);
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  const scoresSum = moviesArray.reduce((sum, next) => {
    if (!next.score) return sum;
    return sum + next.score;
  }, 0)
  // console.log('scores sum:', scoresSum);
  const scoreAverage = scoresSum / moviesArray.length;
  // console.log('scores average:', scoreAverage);
  const scoreAverageRounded = Math.round(scoreAverage * 100) / 100;
  // console.log('scores average rounded', scoreAverageRounded);
  return scoreAverageRounded;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) { }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
