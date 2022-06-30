const movies = require('../src/data');
// Iteration 1: All directors? - Get the array of all directors.

console.log(scoresAverage(movies));
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => (movie.director)).filter((v, i, a) => a.indexOf(v) === i);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const moviesSpielberg = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
  return moviesSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const totalScore = moviesArray.reduce((accumulator, currentMovie) => {
    if (currentMovie.score){
      return accumulator + currentMovie.score
    } else {
      return accumulator;
    }
    
  }, 0);
  if (totalScore > 0){
    return parseFloat((totalScore / moviesArray.length).toFixed(2));
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  return scoresAverage(moviesArray.filter(movie => movie.genre.includes('Drama')))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesOrdered = moviesArray.slice().sort(function (a, b){
   if (a.year - b.year === 0){
    return a.title.localeCompare(b.title);
   } else {
    return a.year - b.year;
   }
  })
  return moviesOrdered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedByTitle = moviesArray.slice().sort((a, b) => a.title.localeCompare(b.title));
  let count = 0;

  let titles = [];
  for (let el of sortedByTitle) {
    count = count + 1;
    console.log(el.title);
    titles.push(el.title);
    if (count >= 20){
      break;
    }
  }

  return titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newArr = moviesArray.slice();

  for (let el of newArr) {
    let splittedTime = el.duration.split(" ");
    
    let hours = parseInt(splittedTime[0].replace('h', ''));
    if (splittedTime.length > 1){
      let minutes = parseInt(splittedTime[1].replace('min', ''));
      el.duration = hours * 60 + minutes;
    } else {
      el.duration = hours * 60;
    }
  }

  return newArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


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
