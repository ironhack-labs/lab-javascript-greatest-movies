/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let reduced = movies.reduce((total, currentValue) => {
    if (currentValue.rate == "") {
      currentValue.rate = 0;
    }
    return (total += parseInt(currentValue.rate));
  }, 0);
  return Math.round((reduced / movies.length) * 100) / 100;
}
console.log(ratesAverage(movies));

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(movie => {
    return movie.genre.indexOf("Drama") !== -1;
  });
  if (dramaMovies == 0) {
    return 0;
  } else {
    return ratesAverage(dramaMovies);
  }
}
console.log(dramaMoviesRate(movies));

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
