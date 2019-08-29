/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {

    let totalRate = arr.reduce((sum, elem) => {
      return sum + elem.rate;
    }, 0);
  
    let averageRate = totalRate / arr.length;
    return Number(averageRate.toFixed(2));
  
  }
  
  // Iteration 2: Drama movies - Get the average of Drama Movies
  function dramaMoviesRate(arr) {
    
    let dramaMoviesRate = arr.filter(arr => arr.genre == 'Drama');
  
    if (dramaMoviesRate < 1) {
      return dramaMoviesRate = 0;
    }
    if (ratesAverage(dramaMoviesRate) == 0) {
      return 0;
    } 
    return ratesAverage(dramaMoviesRate)
  
  }

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
