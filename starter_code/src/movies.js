/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

/* Order the movies by year - orderByYear
Defines orderByYear
Should return an array
Should return a new array
Should return the element in a single element array
Return the new array in ascending order
If two movies have the same year, order them alphabetically by their title */

/* function orderByYear(a, b) {
  if (a.year < b.year) {
    return -1;
  } else if (a.year > b.year) {
    return 1;
  }
  return 0;
}

movies.sort(orderByYear); */

function orderByYear(movies) {
  movies.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  return movies;
}

let newMovies = [movies].length;


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies (movies, 'Steven Spielberg') {
movies.filter(())

}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
