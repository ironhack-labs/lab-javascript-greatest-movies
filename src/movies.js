// The `movies` array from the file `src/data.js`.
const movies = require('./data');
// console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const newArray = array.map((movie) => movie.director);
  return newArray;
}
// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  const newArr = array.filter(function (movie) {
    return (
      movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
    );
  });
  return newArr.length;
}
// console.log(howManyMovies(movies));
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  // if (newArr != newArr.score) {
  //   return average;
  // }

  const arrLength = array.length;
  let average = 0;

  const newArr = array.reduce((total, movie) => {
    return total + movie.score;
  }, 0);

  average = newArr / arrLength;

  // if (!movie.score) {
  //   return Number(average.toFixed(2));
  // }
  // console.log(average);
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
// function dramaMoviesScore(array) {
//   const newArr = array.filter((movie) => movie.genre.includes('Drama'));
//   console.log(newArr);
//   const newArrLength = newArr.length;

//   const dramaAverage = newArr.reduce((total, movie) => {
//     return total + movie.score;
//   }, 0);

//   return Number((dramaAverage / newArrLength).toFixed(2));
// }
function dramaMoviesScore(array) {
  const newArr = array.filter((movie) => movie.genre.includes('Drama'));

  // console.log(newArr);

  const newArrLength = newArr.length;

  let average = 0;

  const dramaAverage = newArr.reduce((total, movie) => {
    return total + movie.score;
  }, 0);
  average = dramaAverage / newArrLength;

  return average ? Number(average.toFixed(2)) : 0;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const newArr = array.map((movie) => {
    return movie;
  });

  newArr.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return newArr;
}

// const newArrTwo = array.map((movie) => {
//   return { title: movie.title, year: movie.year };
// });
// console.log(newArrTwo);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  const newArrTwo = array.map((movie) => {
    return movie.title;
  });

  // console.log(twentyTitles);
  newArrTwo.sort((a, b) => {
    return a.localeCompare(b);
  });
  const twentyTitles = newArrTwo.slice(0, 20);

  return twentyTitles;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  //   const newArr = array.map((movie) => {
  //     return movie;
  //   });
  //   Number(newArr.movie.duration);
  //   if (typeof newArr.duration === 'string') {
  //   }
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
    bestYearAvg
  };
}
