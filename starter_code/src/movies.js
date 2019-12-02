/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year -

function isEmpty(array) {
  return.array.length === 0;
}

function orderByYear(movies) {
  let sortedArray = movies.sort(function(a, b) {
    return a.year - b.year;
  });
  return sortedArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  return (
    movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
  );
}

let result = movies.filter(howManyMovies);

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies.sort(function(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  return +(sum() / +(movies.length).toFixed(2));
}

function sum() {
  var sum = 0;
  movies.forEach(function(rates) {
    sum += rates.rate;
  });
  return sum;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate() {

}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg() {}
