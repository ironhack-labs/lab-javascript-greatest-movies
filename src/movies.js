// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const director = array.map((movie) => movie.director); // list of directors
  const duplicateDirector = director.filter((x, i) => director.indexOf(x) === i); // Bonus 1: remove duplicates directors
  const sortDirector = duplicateDirector.sort(); // ordered list of directors
  return director;
}
// console.log(getAllDirectors(movies))
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const result = array.filter(function (element) {
    return (
      element.director === 'Steven Spielberg' && element.genre.includes('Drama')
    );
  });

  return result.length;
}

// console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (array.length == 0) {
    return 0;
  }

  const mediaScore = array.reduce(function (acumulator, scoresImdb) {
    if (typeof scoresImdb.score === 'number') {
      return (acumulator += scoresImdb.score);
    }
    return acumulator;
  }, 0);
  return parseFloat((mediaScore / array.length).toFixed(2));
}
// console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const mediaDramaMovies = array.filter(function (element) {
    return element.genre.includes('Drama');
  });

  return scoresAverage(mediaDramaMovies);
}
// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const years = array
    .map((item) => item)
    .sort((a, b) => {
      if (a.year < b.year) {
        return -1;
      }
      if (a.year > b.year) {
        return 1;
      }
      if (a.year === b.year) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      }
    });

  return years;
}
// console.log(orderByYear(movies))
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  const movies = array.map((movies) => movies.title).sort();

  const arrZeroToTwenty = movies.slice(0, 20);

  return arrZeroToTwenty;
}
// console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {}

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
