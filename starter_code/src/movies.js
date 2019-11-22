/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  var sortedMovies = Object.assign([], movies);
  var sortedMovies = sortedMovies.sort(function(a, b) {
    if (a.year - b.year != 0) {
      return a.year - b.year;
    } else {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    }
  });
  return sortedMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  return movies.filter(function(e) {
    return e.director === "Steven Spielberg" && e.genre.includes("Drama");
  }).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  var orderedMovies = Object.assign([], movies);
  orderedMovies = orderedMovies.map(function(e) {
    return e.title;
  });
  orderedMovies.sort(function(a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });

  if (orderedMovies.length > 20) {
    return orderedMovies.slice(0, 20);
  } else {
    return orderedMovies;
  }
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var rates = Object.assign([], movies);
  rates = rates.map(function(e) {
    if (e.rate == "" || e.rate == undefined) {
      return 0;
    } else {
      return e.rate;
    }
  });
  var ratesAvg = rates.reduce(function(a, c) {
    return a + c / rates.length;
  }, 0);
  ratesAvg = parseFloat(ratesAvg.toFixed(2));
  console.log(ratesAvg);
  return ratesAvg;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    var dramas = Object.assign([], movies);
    dramas = dramas.filter(function(e){
        return e.genre.includes("Drama");
    })
    return ratesAverage(dramas);
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
