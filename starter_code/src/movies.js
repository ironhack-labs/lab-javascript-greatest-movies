/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let newArray = movies.map(function(e) {
    return e;
  });

  newArray.sort(function(a, b) {
    if (a.year > b.year) {
      if (a.title > b.title) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  });
  console.log(newArray);
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  let newArray = movies.map(function(e) {
    return e;
  });

  return newArray.filter(function(stevenMovie) {
    return (
      stevenMovie.director === "Steven Spielberg" &&
      stevenMovie.genre.indexOf("Drama") >= 0
    );
  }).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let newArray = movies.map(function(e) {
    return e;
  });

  newArray.sort(function(a, b) {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  });

  return newArray.filter(function(e, index) {
    return index < 20;
  });

  /*
  return newArray.map(function() {
    return newArray.filter(function(z, index) {
      return index < 20;
    });
  });
  */
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
