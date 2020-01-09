/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const moviesByYear = [];
   movies.sort(function comparar(a, b) {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
    }
  });
  return movies;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies){
  if(!movies){
    return 0;
  }
  let dramaMovies = movies.filter(element => {element.genre == 'drama'});
  let dramaMoviesSpielberg = dramaMovies.filter(element => {element.director == 'Spielberg'});
  return dramaMoviesSpielberg.length;

}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
   const moviesByAlphabet = [];
   movies.sort(function comparar(a, b) {
     if (a.title > b.title) {
       return -1;
     }
     if (a.title < b.title) {
       return 1;
     }
     return 0;
   });
   return movies;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
