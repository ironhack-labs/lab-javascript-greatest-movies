// const movies = require('./data'); //TODO: In browser mode comment it out
//? In testing mode uncomment it node needs this line to work

// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {
  // const directors = movies
  //   .map(function (movie) {
  //     return movie.director;
  //   }) // returns an array (can add more methods to it like filter, reduce, map)
  //   .filter(function (directorName, index, array) {
  //     const directorIndex = array.indexOf(directorName);
  //     return directorIndex === index;
  //   }); // added the filter method after the map method. You can combine methods with each other

  //! same like as combining the methods after each other but now you make 2 different const variables
  // const directorNames = movies.map(function (movie) {
  //   return movie.director;
  // });

  // const directors = directorNames.filter(function (directorName, index, array) {
  //   const directorIndex = array.indexOf(directorName);
  //   return directorIndex === index;
  // });

  //!--------------------------------------------------------------------------------------------------

  console.log('All directors', directors);
}
// getAllDirectors();

// function filter(array, condition) {
//   const filttered = [];

//   for (let i = 0; i < array.length; i++) {
//     if (condition(array[i], i, array)) {
//       filttered.push(array[i]);
//     }
//   }

//   return filtered;
// }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {
  const onlySteven = movies.filter(function (movie) {
    return movie.director === 'Steven Spielberg';
  });

  const justStevenDramas = onlySteven.filter(function (movie) {
    return movie.genre.includes('Drama');
  });

  console.log('Drama Movies by Steven Spielberg:', justStevenDramas);
}
// howManyMovies();

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {
  const calcAverageScore = movies.reduce(function (accumulated, movie) {
    return accumulated + movie.score / movies.length;
  }, 0); // we sum up all the numbers of scores together. Than we divide the total through the entire lenght of th array of movies.

  console.log(
    'Average score of movies:',
    Math.round(calcAverageScore * 100) / 100
  ); // the result of the calcAverageScore multiplied by 100 and than divided by 100 to get an average score of the total scores with 2 decimals
}

// scoresAverage();

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {
  const filterOnDrama = movies.filter(function (dramaMovie) {
    return dramaMovie.genre.includes('Drama');
  }); // we filter first on the movies array for all the movies that includes the genre called drama

  const averageScoreDrama = filterOnDrama.reduce(function (
    accumulator,
    scoreDramaMovie
  ) {
    return accumulator + scoreDramaMovie.score / filterOnDrama.length;
  },
  0); // we make a new variable where we store the filtered drama movies list and we will count all the scores of the drama's together.

  console.log(
    "Average score of drama's:",
    Math.round(averageScoreDrama * 100) / 100
  ); // when we have the total of all the scores together of the drama movies we will multiply them by 100 and will divide them to 100 to get a average score of all the drama movies.
}

// dramaMoviesScore();

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
  const findMovieYear = movies.map(function (movie) {
    return movie.year;
  });

  const result = findMovieYear.slice().sort(); // filtered all the movies from oldest movie until the latest movie

  console.log(result); //
}

// orderByYear();

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  const showFirstTwentyMovies = movies
    .map(function (movie) {
      return movie.title;
    })
    .slice(0, 20)
    .sort(); // map over the array, pick the title, show only the titles from index 0 till index 20 and than sort them alphabeticall

  console.log(showFirstTwentyMovies);
}

// orderAlphabetically();

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
