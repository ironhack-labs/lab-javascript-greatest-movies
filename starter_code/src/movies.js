/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  var sumArr = arr.reduce((accumulator, currentValue) => {
    accumulator += Number(currentValue.rate);
    return accumulator;
  }, 0);

  return Number((sumArr / arr.length).toFixed(2));
}
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr2) {
  var dramaMovie = arr2.filter(element => element.genre == "Drama");
  if (dramaMovie.length === 0) return 0;
  return ratesAverage(dramaMovie);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear(movies) {
  return movies.sort((a, b) => (a.year > b.year ? 1 : -1));
}
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  var stevenMovies = [];
  movies.forEach(movie => {
    if (
      movie.genre.includes("Drama") &&
      movie.director === "Steven Spielberg"
    ) {
      stevenMovies.push(movie);
    }
  });

  return stevenMovies.length;
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  var twentyFirstMovie = [];
  var sortMovie = movies.sort((a, b) => (a.title > b.title ? 1 : -1));

  for (let i = 0; i < sortMovie.length; i++) {
    if (i < 20) {
      twentyFirstMovie.push(sortMovie[i].title);
    }
  }
  return twentyFirstMovie;
}
// console.log(movies);
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
// Create a turnHoursToMinutes() function that receives an array as parameter, and with some magic implemented by you -
// replaces the duration info of each of the movies for its equivalent in minutes.

function turnHoursToMinutes(movies) {
  var newArray = [];
  let convert = movies.duration().asMinutes();
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
