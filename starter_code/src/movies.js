/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(films) {

  // Clone to not mutate the original array
  filmsClone = JSON.parse(JSON.stringify(films));

  // Sort the copied array by year and by title
  filmsClone.sort(function(a, b) {
      if (a.year === b.year && a.title.toUpperCase() > b.title.toUpperCase()) {
          return 1;
      }

      if (a.year === b.year && a.title.toUpperCase() < b.title.toUpperCase()) {
          return -1;
      }

      return a.year - b.year;
  });

  return filmsClone;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(films) {

  // Filter the array
  var filteredFilms = films.filter(function(film) {
      return (film.director === 'Steven Spielberg' && film.genre.includes('Drama'));
  });

  return filteredFilms.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(films) {

  // Clone to not mutate the original array
  filmsClone = JSON.parse(JSON.stringify(films));

  //Sort the movies by title, take only the title and return the first 20
  return filmsClone.sort(function(a, b) {
      if (a.title.toUpperCase() > b.title.toUpperCase()) return 1;
      return -1;
  }).map(function(film) {
      return film.title;
  }).slice(0, 20);

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average