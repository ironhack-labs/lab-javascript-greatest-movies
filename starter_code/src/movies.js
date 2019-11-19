/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
  return movies.sort((a, b) => {
    return a.year - b.year || a.title > b.title;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(list_movies) {
  return list_movies.filter(e => {
    return e.director === "Steven Spielberg" && e.genre.includes("Drama");
  }).length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(list_movies) {
  return list_movies
    .map(e => {
      return e.title;
    })
    .sort((a, b) => {
      return a > b ? 1 : a < b ? -1 : 0;
    })
    .splice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
