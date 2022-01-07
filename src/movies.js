const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (films) {
  const newDirectorArray = films.map(function (elem) {
    return elem.director;
  })
  return newDirectorArray;
}
//the orange 'movie' becomes the name of the array instead of 'movies' ??

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
 function howManyMovies (films) {
//filters the array 'films' and uses the anonFunc to add count and filter
  const filteredArray = films.filter(function (filmElem) {
    return filmElem.director === 'Steven Spielberg' && filmElem.genre.includes('Drama'); 
  })
  if (filteredArray.length === 0) return 0;
  return filteredArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(films) {
  //should return 0 if an empty array is passed
  if (films.length === 0) return 0;
  //make an array of only scores
  const scoresArray = films.map(function (elem) {
    return elem.score;
  });
  //sum scores in scoresArray
  const totalScore = scoresArray.reduce(function (accumulator, currentValue) {
    //should return average even if one of the movies does not have a score
    //meaning it adds 0 to the accumulator
    if (!currentValue) return accumulator + 0;
    return accumulator + currentValue;
  }, 0);
  //return the average of totalScore
  return Math.round((totalScore / films.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(function (filmElem) {
    return filmElem.genre.indexOf('Drama') >= 0;
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  if (movies.length === 0) {
    movies = [];
  }
  //sort array by year
  const moviesByYear = movies.sort((a, b) => a.year - b.year);
  //if two movies have the same year, order them alphabetically by title
  const moviesByTitle = moviesByYear.sort((a,b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      return a.title.localeCompare(b.title);
    }
  })
  return moviesByTitle;
  };


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) { 
  //first get all titles only
  const titlesArray = movies.map(function (elem) {
    return elem.title;
  });

  //first sort movies by their title
  titlesArray.sort((a, b) => {
    return a.localeCompare(b);
  });

  //only shor the first 20 elements on the array
  const twentyFirst = titlesArray.slice(0,20);
  return twentyFirst;
}
orderAlphabetically(movies);

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
