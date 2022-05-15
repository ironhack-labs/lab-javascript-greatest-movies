// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const directorsArray = array.map((element) => element.director);
  return directorsArray;
}

//console log to check new array with live server
// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  return array.filter(
    (element) =>
      element.director === 'Steven Spielberg' && element.genre.includes('Drama')
  ).length;
}

// console.log(howManyMovies(movies, 'Steven Spielberg'));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  array.forEach((element) => {
    if (typeof element.score != 'number') {
      element.score = 0;
    }
  });
  let sum = [...array].reduce((acc, element) => {
    return acc + element.score;
  }, 0);
  let avg = sum / array.length;
  return +avg.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const dramaMovies = array.filter((element) =>
    element.genre.includes('Drama')
  );

  if (dramaMovies.length === 0) {
    return 0;
  }

  let avg =
    dramaMovies.reduce((acc, element) => acc + element.score, 0) /
    dramaMovies.length;

  return +avg.toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const yearArray = [...array].sort((a, b) => {
    const titleA = a.title;
    const titleB = b.title;
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
  });
  return yearArray.sort((a, b) => a.year - b.year);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  const sortedArray = [...array].sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
  });
  if (sortedArray.length > 20) {
    sortedArray.splice(20, sortedArray.length);
  }
  return sortedArray.map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  // const newMovies = [...array];
  // newMovies.forEach(
  //   (element) =>
  //     (element.duration =
  //       parseFloat(element.duration.toString().substring(1, 2)) * 60 +
  //       parseFloat(element.duration.toString().substring(3)))
  // );
  // return newMovies;
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
