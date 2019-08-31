/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  let rates = movies.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.rate);
  }, 0);
  console.log(parseFloat((rates / movies.length).toFixed(2)));
  return parseFloat((rates / movies.length).toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(movie => {
    if (movie.genre.includes("Drama")) {
      if (movie.rate) {
        return movie;
      } else {
        movie.rate = 0;
        return movie;
      }
    }
  });

  
  if (dramaMovies.length) {
    return ratesAverage(dramaMovies);
  } else {
    return 0;
  }
}
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


function orderByDuration(movies) {
  let alphabeticOrder = movies.sort()
  console.log(alphabeticOrder) 
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
