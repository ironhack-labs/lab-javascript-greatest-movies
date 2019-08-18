/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  const ratesSum = movies.reduce(function(accumulator, value) {
    let rate = value.rate;
    return accumulator + parseFloat(rate);
  }, 0);
  const average = parseFloat((ratesSum / movies.length).toFixed(2));
  return average;
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function filterDramaMovies(movies) {
  return movies.filter(function(drama) {
    return drama.genre.includes("Drama");
  });
}
function dramaMoviesRate(movies) {
  const dramaMovies = filterDramaMovies(movies);
  const average = ratesAverage(dramaMovies);
  return average;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
  const sorted = movies.slice().sort(function(a, b) {
    // if (a.duration < b.duration) return -1;
    // else if (a.duration > b.duration) return 1;
    // else return 0;
    if (a.duration === b.duration) {
      return a.title.localCompare(b.title);
    }
    return a.duration - b.duration;
  });
  return sorted;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  const dramaMovies = filterDramaMovies(movies);
  const stevenDrama = dramaMovies.filter(function(movies) {
    if (movies.director === "Steven Spielberg") return true;
  });
  return stevenDrama.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
// movies.forEach(function(time) {
//     movies.duration = cars.duration()h * 60+ ()min;
//     return movies;
//   });

// BONUS Iteration: Best yearly rate average - Best yearly rate average
