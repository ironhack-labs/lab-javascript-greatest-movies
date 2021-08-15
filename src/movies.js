let movies = require("./data");



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = movies.map(function (movie) {
  return movie.director;
});

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = movies.filter(function (movie) {
  return movie.director === 'Steven Spielberg' && movie.genre.includes("Drama");
});

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (movies.reduce(function (sum, movie) {
  return sum + movie.score;
},0) / movies.length).toFixed(2);

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (movies.reduce(function (sum, movie) {
  if(movie.genre.includes("Drama")){
    console.log(sum + movie.score);
    return sum + movie.score;
  }else{
    return sum;
  }

},0)) / (movies.reduce(function (sum, movie) {
  if(movie.genre.includes("Drama")){
    console.log(sum);

    return sum + 1;
  }else{
    return sum;
  }

},0))

console.log(dramaMoviesScore);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}




// // The following is required to make unit tests work.
// // Environment setup. Do not modify the below code. //
// if (typeof module !== 'undefined') {
//   module.exports = {
//     getAllDirectors,
//     howManyMovies,
//     scoresAverage,
//     dramaMoviesScore,
//     orderByYear,
//     orderAlphabetically,
//     turnHoursToMinutes,
//     bestYearAvg,
//   };
// }
