// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(data) {
  const movies = data;
  const arrayMovies = movies.map((movie) => {
    return movie.director;
  });

  return arrayMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(data) {
  const numberMovies = data.filter((movie) => {
    const director = movie.director;
    return director === 'Steven Spielberg' ? movie : null;
  });

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(data) {
  if (data.length !== 0) {
    const scorePromedio =
      data.reduce((acumulador, valorActual) => {
        const valScore = valorActual.score ? valorActual.score : 0;
        return acumulador + valScore;
      }, 0) / data.length;
    const roundScore = parseFloat(scorePromedio.toFixed(2)); //----> ParseFloat pasa de string numero
    return roundScore;
  }
  return 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(data) {
  const dramaMovies = data.filter((movie) => {
    const dramaArray = movie.genre.includes('Drama') ? movie : null;
    return dramaArray;
  });
  const score = scoresAverage(dramaMovies);
  return score;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(data) {
  let arrayYear = [];
  arrayYear = data.sort((a, b) => {
    return a.year > b.year ? 1 : -1;
  });
  return arrayYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(data) {
  const dataMovie = data.filter((movie, i) => {
    return i < 20 ? movie : null;
  });
  const titleArray = dataMovie.filter((movie) => {
    if (movie.title) {
      return movie.title;
    }
  });

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
