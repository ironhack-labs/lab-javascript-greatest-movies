// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  let mappedArray = array.map((movie) => movie.director);
  return mappedArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  return array.filter(
    (movies) =>
      movies.director == 'Steven Spielberg' && movies.genre.includes('Drama')
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  return (avg = +(
    array.reduce((acc, movies) => acc + movies.score, 0) / array.length
  ).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  // if ((array.filter((movies) => movies.genre = 'Drama') === 0)) {
  //   return 0
  // }

  let dramaScore = array.filter((movies) => movies.genre == 'Drama');

  if (dramaScore.length === 0) {
    return 0;
  } else {
    return +(
      dramaScore.reduce((acc, movies) => acc + movies.score, 0) /
      dramaScore.length
    ).toFixed(2);
  }

  // console.log(dramaMovies);
  // return +(
  //     DramaScore.reduce((acc, movies) => acc + movies.score, 0) /
  //     DramaScore.length
  //   ).toFixed(2);

  // return +(
  //   array
  //     .filter((movies) => (movies.genre = 'Drama'))
  //     .reduce((acc, movies) => acc + movies.score, 0) /
  //   array.filter((movies) => (movies.genre = 'Drama')).length
  // ).toFixed(2);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
let order = array.sort((a,b) => {
  if (a.year == b.year)
    return a.title.localeCompare(a.title);
  else return a.year - b.year ;
});

// let order = array.sort((a,b) => {
//   if (a.year - b.year === -1)
//     return a.year - b.year;
//   if (a.year == b.year) return a.title - b.title;
// });
return order;

  // let newOrder = array.sort((a-b) => {
  //   if (a.year > b.year)
  //   return -1;
  //   if (a.year = b.year)
  //   return a.title - b.title 
  // });
  // return newOrder;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let alpha = array.map((movie) => movie.title);
  let beta = alpha.sort((a,b) => a.localeCompare(b));
  if (beta.length < 20) {
    return beta
  }
  if (beta.length > 20) {return omega = beta.slice(0,20)}
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  let min = array.duration.filter()
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
