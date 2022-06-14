//const movies = require('./data');

const movies = require("./data");

// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const oneDirector = movies.map(element => element.director)
  return oneDirector;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(element => element.director === 'Steven Spielberg' && element.genre.includes('Drama'));
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(myMovies){
  if (myMovies.length === 0) {
    return 0;
  }
  const totalRating = myMovies.reduce(function (acc,cur){
    if (cur.score == undefined) {
      return acc;
    }
 return acc + cur.score;
}, 0)
const avgRating = totalRating/myMovies.length;
  //return Math.round(avgRating * 100) / 100;
  return Number(avgRating.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(allMovies) {
const justDrama = allMovies.filter(element => element.genre.includes('Drama'));
if (justDrama.length === 0) {
  return 0;
}
const dramaRating = justDrama.reduce(function (acc, cur){
if (cur.score == undefined) {
  return acc;
}
return acc + cur.score;
}, 0)
const avgDramaRating = dramaRating/justDrama.length;
return Number(avgDramaRating.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let orderByYear = [...movies];
  // spread operator is to make sure not to mutate the original array because .sort() does change/mutate the original array so always make sure you create a safe copy before sorting
  orderByYear.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
      return 0;
    }
  });
  return orderByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const orderByTitle = movies.map((movie) => movie.title).sort((a, b) => a.localeCompare(b));
 return orderByTitle.slice(0,20); 
}


//function orderAlphabetically(movies) {
//let alphaArr = [...movies];


//const sortedAlphaArr = alphaArr.name.sort((a, b) => 'a'.localeCompare('b');
//let nameA =a.title.toUpperCase();
//let nameB =b.title.toUpperCase();

//if(sortedAlphaArr.length < 20) {
//return sortedAlphaArr;
//}

//return sortedAlphaArr.title.slice[0,19];

//}



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