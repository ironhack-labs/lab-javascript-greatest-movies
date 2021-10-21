// Iteration 1: All directors? - Get the array of all directors.

const movies = require("./data");
function getAllDirectors(movies) {
  const newArr = movies.map(getDirectors => getDirectors.director) 
  return newArr
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const spielbergDrama = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
  const newNum = spielbergDrama.length
  return newNum
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
if (movies.length === 0) {
  return 0
} 
let filtered = movies.filter(movie => movie.score).reduce((sum, movie) => sum+= movie.score, 0);
return Number((filtered / movies.length).toFixed(2))
} 

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  
  const newArrOfDramaMovies = movies.filter(movie => movie.genre.includes("Drama"))
  
  
  if (newArrOfDramaMovies.length === 0){
  return 0 }
  
  let filteredDramaMovies = newArrOfDramaMovies.
  filter(movie => movie.score).
  reduce((sum, movie) => sum+= movie.score, 0);
  
  return Number((filteredDramaMovies / newArrOfDramaMovies.length).toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let sortedArray = movies;

  if (movies.length === 0) {
    return false;
  }

  sortedArray.sort(function (a, b) {
    var dif = a.year - b.year;

    if (dif === 0) {
      return a.title.localeCompare(b.title);
    }

    return dif;
  });

  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const sortedArray = [...movies];

  sortedArray.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });

  let anotherArr = sortedArray.slice(0,20).map(getTitles => getTitles.title);
  return anotherArr;

}

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
