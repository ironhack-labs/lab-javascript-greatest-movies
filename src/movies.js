// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map(movie => movie.director);
  ;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const len = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
  switch(len){
    case 0:
      return 0;
      break;
    default:
      return len;
      break
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies){
  const len = movies.length;
  const newArr = movies.filter(movie => movie.score !== undefined)
  switch(len){
    case 0:
      return 0;
      break;
    default:
      const suma = newArr.reduce((acc, currentVal) => {
        return acc += currentVal.score
      },0)
      average = suma / len
      return +average.toFixed(2)
      break;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
  const len = dramaMovies.length;
  const newArr = dramaMovies.filter(movie => movie.score !== undefined)

  switch(len){
    case 0:
      return 0;
      break;
    default:
      const suma = newArr.reduce((acc, cv) => {
        return acc += cv.score
      },0)
      average = suma / len
      return + average.toFixed(2)
      break;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function compare(a, b) {
  if (a.year < b.year) return -1; // a is less than b
  if (a.year > b.year) return 1; // a is greater than b
  if (a.year === b.year)  {
    if(a.title < b.title) return -1;
    if(a.title>b.title) return 1;
    if(a.title === 0) return 0;
  }
}

function orderByYear(movies) {
  let len = movies.length;
  switch(len){
    case 0:
      return 0;
      break;
    default:
      const items = movies.filter(movie => movie.year !== undefined)
      return items.sort(compare)
      
      break;
  }
}

function compare2(a, b) {
  if(a.title < b.title) return -1;
  if(a.title>b.title) return 1;
  if(a.title === 0) return 0;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let len = movies.length;
  switch(len){
    case null:
      return 0;
      break;
    case len < 20:
      return movies.sort();
      break;
    default:
      return movies.map(movie => movie.title).sort().slice(0,20)
      break;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let len = movies.length;

  switch(len){
    case 0:
      return null;
      break;
    default:
      const newArr = movies.map(function(movie) {
        let minutes = 0;
        let hour_part = movie.duration.split('h')[0]*60
        let minute_part = movie.duration.split('h')[1].split('min')[0]*1
        minutes = hour_part + minute_part
        movie.duration = minutes
      });
    return newArr;
    break;
  }
}

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
