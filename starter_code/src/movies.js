/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let orderYear = movies.slice().sort(function(a, b) {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  });
  return orderYear;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  let stevenDrama = movies.filter(function(e) {
    if (e.director == "Steven Spielberg" && e.genre.includes("Drama")) {
      return e;
    }
  });
  return stevenDrama.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let orderTitle = movies.map(function(a){
    return a.title;
  }).sort(function(a,b){
    return a.localeCompare(b);
  }).splice(0,20);
  return orderTitle;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (!movies.length) {
    return 0;
  }
  let average =
    movies.reduce(function(acc, e) {
      return acc + (e.rate || 0);
    }, 0) / movies.length;
  average = parseFloat(average.toFixed(2));
  return average;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(function(e) {
    return e.genre.includes("Drama");
  });

  return ratesAverage(dramaMovies);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  let newArr = movies.forEach(function(e) {
    if (e.duration.includes("h") && e.duration.includes("m")) {
      movies.duration.split(" ").reduce(function(acc, e) {
        let hours = parseInt(acc);
        let minutes = parseInt(e);
        movies.duration = hours * 60 + minutes;
      });
    } else if (e.duration.includes("h")) {
      movies.duration = parseInt(movies.duration) * 60;
    } else if (e.duration.includes("m")) {
      movies.duration = parseInt(movies.duration);
    }
  });
  return newArr;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
