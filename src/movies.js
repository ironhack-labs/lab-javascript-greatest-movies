// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  return movies.map((currentMovie) => currentMovie.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  return movies
    .filter((value) => value.director === "Steven Spielberg")
    .filter((value) => value.genre.indexOf("Drama") >= 0).length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) return 0;
  let rates = movies.map((currentMovie) => currentMovie.rate);
  let sum = rates.reduce((accumulator, currentMovie) => {
    return accumulator + currentMovie;
  });
  let average = sum / rates.length;
  let fixed = average.toFixed(2);
  let floated = parseFloat(fixed);
  return floated;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let drama = movies.map((currentMovie) => currentMovie.genre.indexOf("Drama"));
  if (drama === []) return 0;
  let rates = drama.map((currentMovie) => currentMovie.rate);
  let sum = rates.reduce((accumulator, currentValue) => {
    accumulator + currentValue;
  });
  let average = sum / rates.length;
  return average;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  return movies.sort(function (a, b) {
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let titles = movies.map((currentMovie) => currentMovie.title);
  let sorted = titles.sort((a, b) => a - b);
  return sorted.slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
