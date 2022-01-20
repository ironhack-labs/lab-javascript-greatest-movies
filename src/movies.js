const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (movies) => { 
  return movies.map((movies)=> movies.director)}

getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter((movie) => {
    return (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    )
  }).length
}

  howManyMovies(movies)


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  };
    let avgMovie = movies.reduce((acc,value) => {
      if (!value.score) {
        return acc + 0;
      };
    return (acc + value.score);
  }, 0);
  return Number((avgMovie / movies.length).toFixed(2));
}

scoresAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (!movies.length) {
    return 0;
  };
  let dramaMovies = movies.filter ((movie) => {
    return movie.genre.includes('Drama');
  });
  return scoresAverage(dramaMovies)
}

dramaMoviesScore(movies)


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  if (!arr.length) {
    return 0;
  };
  let newMovies = [...arr]; // copying array
  let moviesByYears = newMovies.sort((a,b) => { // sorting new array by year, and adding to new variable to use for checking if years are the same. 
  let movieYears = a.year - b.year;
  if (movieYears === 0) { // if years are the same as a-b = 0
    moviesSortedByYear = a.title.localeCompare(b.title); // then check title and return alpahbetically.
    return moviesSortedByYear;
  };
  return movieYears;
  });
  return moviesByYears;
}

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  
}


orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
