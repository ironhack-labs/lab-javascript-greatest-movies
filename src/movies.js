// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies () {
  const howManyMovie = moviesArray => {
  const filteredMoviesArray = moviesArray.filter(movie => {
    return movie.director.toUpperCase() === 'STEVEN SPIELBERG' && movie.genre.includes('Drama');
  }};
  return filteredMoviesArray.length;
};}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const sumScore = moviesArray.reduce(function(sum, element) {
    if(!elemen.rate){
      return sum + 0;
    }
    return sum + element.rate;
  } 0);
  const avg = (sumScore / moviesArray.length).toFixed(2);
  return + avg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (movies.length === 0) return 0;
  const dramaavg = moviesArray.reduce((acc, movies) => {
    if (movies.genre.includes('Drama')){
      acc.ratesSum += movie.rate;
      acc.dramaMoviesQtde += 1;
      return acc;
    }, {ratesSum: 0, dramaMoviesQtde: 0});
    if (dramaavg.dramaMoviesQtde === 0) return 0);
    const avg = (dramaavg.ratesSum / dramaavg.dramaMoviesQtde).toFixed(2);
    return +avg;
  })

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = JSON.parse(JSON.stringify(moviesArray));
  moviesCopy.sort((movie1, movie2) => {
    if (movie1.year < movie2.year) return -1;
    if(movie1.year > movie2.year) return 1;
    return movie1.title.localeCompare(movie2.title);
  });
  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  const movieTitle = moviesArray.map(movie => movie.title);
  return movieTitle.slice(0, 20);
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
