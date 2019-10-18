/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  var sumArr = arr.reduce((accumulator, currentValue) => {
    accumulator += Number(currentValue.rate);
    return accumulator;
  }, 0);

  return Number((sumArr / arr.length).toFixed(2));
}
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr2) {
  var dramaMovie = arr2.filter(element => element.genre == "Drama");
  if (dramaMovie.length === 0) return 0;
  return ratesAverage(dramaMovie);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear(movies) {
  //var movieByYear = [];
  return movies.sort((a, b) => (a.year > b.year ? 1 : -1));
}
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
