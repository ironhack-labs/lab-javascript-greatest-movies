/* eslint no-restricted-globals: 'off' */

// const movies = require("./data.js");

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  const sorted = arr.slice().sort(function(a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return sorted;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
  const stevenSpielbergMovies = arr.reduce(function(acc, movie) {
    if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
      acc += 1;
    return acc;
  }, 0);
  return stevenSpielbergMovies;
}
console.log(howManyMovies(movies));

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  if (arr.length === 0) return [];
  let firstTwenty = [];
  const sorted = arr.slice().sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });
  for (let i = 0; i < 20; i++) {
    firstTwenty.push({ title: `${sorted[i].title}` });
  }
  console.log(typeof firstTwenty);
  return firstTwenty;
}

console.log(orderAlphabetically(movies));
console.log(movies[0]);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
