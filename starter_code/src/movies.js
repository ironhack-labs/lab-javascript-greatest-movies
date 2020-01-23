/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  let orderedArray = [];
  if (array.length !== 0) {
    orderedArray = array.sort(function(a, b) {
      if (a.year < b.year) {
        return -1;
      } else if (a.year > b.year) {
        return 1;
      } else if (a.year === b.year) {
        return a.title < b.title ? -1 : 1;
      } else {
        return 0;
      }
    });
  }
  return orderedArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  let dramaSteven = [];
  if (array.length !== 0) {
    dramaSteven = array.filter(
      movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  }

  return dramaSteven.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  let orderedAlphabet = [];

  return orderedAlphabet;
}

return orderedAlphabet;

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
