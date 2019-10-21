/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  let rates = array.reduce(function(accumulator, currentValue) {
  
    return accumulator + parseFloat(currentValue.rate);
  }, 0);

  return Number((rates / array.length).toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies

// function dramaMoviesRate(array) {
//   const isDrama = function(drama) {
//     return array.genre === "Drama";
//   };

//   let dramaMovie = array.filter(isDrama).reduce(function(iterator, genre) {
//     return iterator + parseFloat(genre.drama);
//   });

//   return (dramaMovie / array.length).toFixed(2);
// }

function dramaMoviesRate(movies) {
  let dramaMovieCount = 0;
  let dramaMovies = movies.reduce((rates, movie) => {
    if (movies.genre.includes("Drama")) {
      dramaMovieCount += 1;
      return Number(movie.rate) + rates;
    }
    return rates;
  }, 0);
  if (!dramaMovieCount) {
    return 0;
  }
  return Number((dramaMovies / dramaMovieCount).toFixed(2));
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(movies) {
  let ascedingMovies = movies.sort(function(a, b) {
    if (a.year > b.year) {
      return a.year - b.year;
    } else if (a.year === b.year) {
      return a.title - b.title;
    }
  });
  return ascedingMovies;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(dramaMovies){

  let isSpielberg = function(dramaMovies){
    dramaMovies.director === 'Steven Spielberg';
  }
  let allMoviesSpielberg = dramaMovies.filter(isSpielberg);
  
  return allMoviesSpielberg;

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
