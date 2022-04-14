// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);
const movies = require('./data');
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let mappedArr = arr.map((element) => element.director);
  return mappedArr;
}

//console.log(numCopy);
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//We want to know how many of them are there.
//Go ahead and create a howManyMovies() function that receives an array as a parameter
//and filter 👀 the array so we can have only the drama movies where Steven Spielberg is the director.
function howManyMovies(arr) {
  let dramaMovies = arr.filter(
    (element) =>
      element.director === 'Steven Spielberg' && element.genre.includes('Drama')
  );

  return dramaMovies.length;
}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//These are the best movies based on their scores, so supposedly all of them have a
// remarkable score. In this iteration, we want to know the average score of all of
//them and display it on the console. Create a scoresAverage() function that receives
//an array as a parameter and solves the challenge.The score must be returned rounded
// to 2 decimals! Maybe you want to "reduce" the data to a single value.

function scoresAverage(arr) {
  if (!arr.length) {
    return 0;
  }
  /*const myScores = arr.map((element) => {
    if (!element.score) {
      return 0;
    } else {
      return element.score;
    }
  });*/
  const mySum = arr.reduce(function (acc, value) {
    if (!value.score) {
      value.score = 0;
    }
    return acc + value.score;
  }, 0);
  const totalAvg = mySum / arr.length;
  const finalScore = totalAvg.toFixed(2);
  return parseFloat(finalScore);
}
console.log(scoresAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies
//Create a dramaMoviesScore() function that receives an array as
//a parameter to get the average score of all drama movies!
//Let's see if it is better than the general average.
//Again, rounded to 2 decimals!
function dramaMoviesScore(arr) {
  let dramaMovies = arr.filter((element) => element.genre.includes('Drama'));
  return scoresAverage(dramaMovies);
}
console.log(dramaMoviesScore(movies));
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//We need to sort the movies in ascending order by their release year.
//This should be easy using one of the methods we have just learned.
//Create a function orderByYear() that receives an array as parameter
//and returns a new sorted array.
function orderByYear(arr) {
  const yearsSorted = [...arr].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });

  return yearsSorted;
}
console.log(orderByYear(movies));
/*
function orderByYear(arr) {
  const yearsSorted = [...arr].sort((a, b) => {
    if (a.year === a.year) {
      a.title - b.title;
    } else {
      a.year - b.year;
    }
  });

  return yearsSorted;
}
console.log(orderByYear(movies));
*/
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const title = arr.map((element) => element.title);
  const titles = title.sort((a, b) => a.localeCompare(b));
  if (titles.length < 20) {
    return titles.slice(0, 20);
  } else if (titles.length > 20) {
    return titles.slice(0, 20);
  }
  return titles;
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
    bestYearAvg
  };
}
