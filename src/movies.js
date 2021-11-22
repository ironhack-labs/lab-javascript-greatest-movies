// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = moviesArray => moviesArray.map(movie => movie.director);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = moviesArray => {
  const spielbergDramaMovies = moviesArray.filter(movie =>
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  
  const numberOfSpielbergDramaMovies = spielbergDramaMovies.length;
  
  return numberOfSpielbergDramaMovies;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = moviesArray => {
  const movieScores = moviesArray.map(movie => movie.score);
  const sumMovieScores = movieScores.reduce((accumulator, currentValue) =>
    accumulator + currentValue, 0);

  const averageMovieScore = sumMovieScores / moviesArray.length;
  const roundedMovieScore = Math.round((averageMovieScore + Number.EPSILON) * 100) / 100;
  
  return roundedMovieScore;
};

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = moviesArray => {
  const dramaMovies = moviesArray.filter(movie =>
    movie.genre.includes('Drama')
  );
  
  const dramaScores = dramaMovies.map(drama => drama.score);
  const sumDramaScores = dramaScores.reduce((accumulator, currentValue) =>
    accumulator + currentValue, 0);
  
  const averageDramaScore = sumDramaScores / dramaMovies.length;
  const roundedDramaScore = Math.round((averageDramaScore + Number.EPSILON) * 100) / 100;
  
  return roundedDramaScore;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = moviesArray => {};
//function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

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
