/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(greatestMovies) {
  const ascMovies = greatestMovies.slice().sort(function(a, b) {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }
    return a.year - b.year;
  });
  return ascMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(greatestMovies) {
  const spielbergMovies = greatestMovies.slice().filter(function(spiel) {
    if (
      spiel.director === "Steven Spielberg" &&
      spiel.genre.indexOf("Drama") != -1
    ) {
      return true;
    } else {
      return false;
    }
  });
  return spielbergMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(greatestMovies) {
  // this part sorts the segment
  let sortedMovies = greatestMovies.slice().sort(function sort20(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  // this part gets a segment
  let first20 = [];
  for (i = 0; i < 20; i++) {
    if (i >= sortedMovies.length) {
      break;
    }
    first20.push(sortedMovies[i]);
  }

  // this returns result titles
  let titles = first20.map(function(el) {
    return el.title;
  });

  //console.log(first20);
  return titles;
}
//return greatestMovies.title;

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
