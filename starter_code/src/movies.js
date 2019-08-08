/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  const totalRates = movies.reduce((accumulator, currentValue) => {
    return parseFloat(accumulator) + parseFloat(currentValue.rate);
  }, 0)
  return Math.round(totalRates*100)/100/movies.length;
};
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter((f) => f.genre.includes("Drama"))
  if (dramaMovies.length == 0) {
    return 0;
  }
  if (dramaMovies.rate = "") {
    dramaMovies.rate = 0;
  }
  return ratesAverage(dramaMovies);
}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function compare(a,b) {
  if (a.duration - b.duration < 0) {
    return -1;
  }
  else if (a.duration - b.duration > 0) {
    return 1;
  }
  else if (a.duration - b.duration == 0) {
    if (a.title < b.title ) {
      return -1;
    }
    else if (a.title > b.title) {
      return 1;
    } 
  }}; 

function orderByDuration(movies) {
  const durationOrderedMovies = movies.sort(compare);
    return durationOrderedMovies; 
};

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
