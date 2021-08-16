// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data.js"); //link data.js to this movies.js

function getAllDirectors(movies) {
  const directorsList = movies.map((directorName) => directorName.director)
  return directorsList;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergList = movies.filter((spielbergMovie) => spielbergMovie.director === 'Steven Spielberg');
  const dramaList = spielbergList.filter((dramaMovie => dramaMovie.genre.includes('Drama')))
  return dramaList.length;
};

howManyMovies(movies);
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    const totalScore = movies.reduce((a, b) => {
      if (b.score){
        return a + b.score;
      } else {
        return a;
      }
    }, 0);
    return parseFloat((totalScore / movies.length).toFixed('2'));
    }
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const totalDrama = movies.filter((dramaMovies) => dramaMovies.genre.includes('Drama'));
  if (totalDrama.length === 0){
    return 0;
  } else {
      const totalDramaScore = totalDrama.reduce((a, b) => {
      return a + b.score;
      },0);
      return parseFloat((totalDramaScore / totalDrama.length).toFixed('2'));
    }
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
const arrayCopy = [...movies];

arrayCopy.sort().reverse();

const orderedYear = arrayCopy.sort((a, b) => {
  return a.year - b.year;
});

return arrayCopy;
};

console.log(orderByYear(movies));
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let onlyTitles = movies.map((titles) => titles.title);
  let filterAZ = onlyTitles.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  return filterAZ.filter((a, b) => b < 20);
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
