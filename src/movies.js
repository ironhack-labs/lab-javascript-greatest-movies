// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const { filter } = require("./data");
const movies = require("./data")

function getAllDirectors(movies) {
  // using => returned an error and i don't know why
  let mappedDirectors = movies.map(function (singleMovie) {
    return singleMovie.director
  })
  return mappedDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// create a function to calculate the number of movies 
// apply a filter using director and genre conditional statements
// return a new array with a subset of the previous array
// count the number of items in this array
function howManyMovies(movies) {
  let filteredMovies = movies.filter((singleMovie) => {
    return singleMovie.director === 'Steven Spielberg' && singleMovie.genre.includes('Drama');
  });
  let count = filteredMovies.length
    return count
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// create a function to add together all the scores - .reduce
// divide the total by the array.length to find the average score 
// check the score is rounded to two decimal places
function scoresAverage(movies) {
  if (movies.length == 0) {
    return 0
  }

  let totalScore = movies.reduce((sum, elem) => {
    if (elem.score) {
      return sum + elem.score
    } 
    else {
      return sum
    }
  }, 0)
  let average = totalScore / movies.length
  // using .toFixed(2) changes the type to a string
  return average
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
// this iteration combines the concepts behind iterations 2 and 3
// first create a function to filter the array - this creates a new array with the drama genre films only 
// then use .reduce to add together all the scores and divide by array.length
// again check for two decimal places
function dramaMoviesScore(movies) {
  let filteredMovies = movies.filter((singleMovie) => {
    return singleMovie.genre.includes('Drama');
  });
  if (filteredMovies.length == 0) {
    return 0
  }

  let totalScore = filteredMovies.reduce((sum, elem) => {
    if (elem.score) {
      return sum + elem.score
    }
    else {
      return sum
    }
  }, 0)

  let average = totalScore / filteredMovies.length
  // same issue with rounding to 2dp. Can .round be used without rounding to an integer?
  return average 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// clone the original array using JSON parse/ JSON stringify so we don't mutate the original 
// .sort the array in chronological order
// if two movies have the same year, sort alphabetically using the title
// return the new/cloned and sorted array

function orderByYear(movies) {
  let cloneMovies = JSON.parse(JSON.stringify(movies));

  cloneMovies.sort((firstElem, secondElem) => {
    if (firstElem.year > secondElem.year) {
      return 1;
    } else if (firstElem.year < secondElem.year) {
      return -1;
    } else {
      // if the movies are from the same year, sort the titles alphabetically 
        if (firstElem.title > secondElem.title) {
          return 1;
        } else if (firstElem.title < secondElem.title) {
          return -1;
        }
    }
  })
  return cloneMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// clone the original array again 
// sort alphabetically using the movie title
// from the array - extract the title - change the type to a string
// use .slice to select the first 20 titles from the sorted array
// return the new/cloned/sorted/changed/sliced array 

function orderAlphabetically(movies) {
  let cloneMovies = JSON.parse(JSON.stringify(movies));
  // sorting alphabetically 
  cloneMovies.sort((firstElem, secondElem) => {
    if (firstElem.title > secondElem.title) {
      return 1;
    } else if (firstElem.title < secondElem.title) {
      return -1;
    } else {
      return 0;
    }
  })
  // using the concepts in iteration 1 
  let mappedTitles = cloneMovies.map(function (singleMovie) {
    return singleMovie.title
  })
  // adding a limit to the number of items
  let top20 = mappedTitles.slice(0, 20);
  // the final result
  return top20
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