const movies = require(`./data`);

// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayOfMovies) {
  return arrayOfMovies.map(item => item.director)
}

// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayOfMovies) {
  return arrayOfMovies.filter(item => (item.genre.includes('Drama') && item.director === "Steven Spielberg"))
}

// console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrayOfMovies) {
  return +(arrayOfMovies.reduce((total, movie) => movie.score + total, 0) / arrayOfMovies.length).toFixed(2);
}

console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrayOfMovies) {
  return +(arrayOfMovies.filter(item => item.genre.includes('Drama')).reduce((total, movie) => movie.score + total, 0) / arrayOfMovies.filter(item => item.genre.includes('Drama')).length).toFixed(2);
}

// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayOfMovies) {
  const newArray = [...arrayOfMovies];
  newArray.sort(function (movie1, movie2) {
    if (movie1.year < movie2.year) {
      return -1;
    }
    if (movie1.year > movie2.year){
      return 1;
    } else if (movie1.title < movie2.title){
      return -1
    }
  })
  return newArray
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayOfMovies) {
  if (arrayOfMovies.length < 20){
    return arrayOfMovies.map(item => item.title).sort();
  }
  return arrayOfMovies.slice(0, 21).map(item => item.title).sort();
}

console.log(orderAlphabetically(movies));

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
