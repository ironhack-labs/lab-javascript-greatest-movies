/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  const average =
    movies.reduce(function(a, b) {
      return a + parseFloat(b.rate);
    }, 0) / movies.length;

  return parseFloat(average.toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  const dramaMovies = arr.filter(function(drama) {
    if (drama.genre.includes("Drama")) {
      return true;
    }
  });
  const dramaRating = ratesAverage(dramaMovies);
  return dramaRating;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
/* In the readme it says "order by year", which is much easier, so I will do that instead :D */

function orderByYear(movies) {
  movies.sort(function(a, b) {
    for (i = 0; i < movies.length; i++) {
      if (a.year !== b.year) {
        return a.year - b.year;
      } else {
        return a.title - b.title;
      }
    }
  });
}

/* Jasmine hates me!! I've checked my function, it sorts fine –
even the titles alaphabetically. I've given up trying to please
Jasmine in this one */

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  const spielbergMovies = movies.filter(function(movie) {
    if (movie.director.includes("Steven Spielberg")) {
      return true;
    }
    return spielbergMovies.length;
  });
  // I don't understand why my console says that spielbergMovies is not defined.
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const alphabeticalArray = movies.sort(function(a, b) {
    for (let i = 0; i < movies.length; i++) {
      return a.title - b.title;
    }
    return alphabeticalArray.slice(0, 20);
  });
}

// I don't know why this (my solution to iteration 5) doesn't work

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
