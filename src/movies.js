// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// const getAllDirectors = moviesArray.map(movie => movie.director);

function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let counter = 0;
  moviesArray.forEach(function(movie) {
    if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
      counter++;
    };
  });
  return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  let scores = moviesArray.map(function(movie) {
    if ('score' in movie && typeof(movie.score) === 'number') {
      return movie.score;
    } else {
      return 0;
    }
  });
  let sum = scores.reduce((accumulator, currentValue) => accumulator + currentValue);
  let average = sum / moviesArray.length;
  return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramas = moviesArray.filter(movie => movie.genre.includes('Drama'));
  return scoresAverage(dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
