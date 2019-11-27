/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  var newArray = arr.map(function(movie) {
    return movie;
  });
  newArray.sort(function(a, b) {
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      }
      return 0;
    }
    return a.year - b.year;
  });
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
  if (arr.length === 0) {
    return 0;
  }
  var totalMovies = arr.filter(function(movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return totalMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  var newArray = arr.map(function(movie) {
    return movie.title;
  });
  return newArray.sort().slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let totalRates = arr.map(function(movie) {
    return movie.rate;
  });
  const sumRates = totalRates.reduce(function(acc, val) {
    return (acc += val);
  }, 0);
  let totalAverange = sumRates / totalRates.length;
  let totalAverangeRounded = Math.round(totalAverange * 100) / 100;
  return totalAverangeRounded;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  let movieDramas = arr.filter(function(movie) {
    return movie.genre.includes("Drama");
  });
  return ratesAverage(movieDramas);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
