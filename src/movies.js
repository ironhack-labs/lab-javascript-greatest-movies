// The `movies` array from the file `src/data.js`.

const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
  // BONUS
  //  return movies.filter((movie, index) => movie.indexOf(movie.director) === index)
}

function getAllDirectorsFiltered(movies) {
  let moviesByTittle = movies.map((movie) => movie.director);
  let result = moviesByTittle.filter((movie, index) => {
    return moviesByTittle.indexOf(movie) === index;
  });
  return result;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  let moviesFiltered = movies.filter((movie) =>
      movie.genre.includes('Drama') && movie.director === `Steven Spielberg`
  );
  return moviesFiltered.length;
}

// function howManyMovies(movies) {
//   movies.reduce ((totalMovies, movie) => {
//     if (movie.genre.includes('Drama') && movie.director === `Steven Spielberg`) {
//       totalMovies += 1 ;
//     } else {
//       totalMovies + 1 ;
//     }
//     return totalMovies
//   }, 0)
// }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let averageScoreMovies =
    movies.reduce((averageScore, movie) => {
      if (typeof movie.score !== 'number') {
        averageScore = averageScore;
      } else {
        averageScore += movie.score;
      }
      return averageScore;
    }, 0) / movies.length;
  return Math.round(averageScoreMovies * 100) / 100 || 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let newLength = 0;

  let averageScoreMovies =
    movies.reduce((averageScore, movie) => {
      averageScore = averageScore;

      if (movie.genre.includes('Drama')) {
        newLength += 1;
        averageScore = movie.score + averageScore;
      } else {
        newLength += 0;
      }
      return averageScore;
    }, 0) / newLength;
  return Math.round(averageScoreMovies * 100) / 100 || 0;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  movies.sort((a, b) => {
    const movieByYear = a.year;
    const nextMovieByYear = b.year;
    const movieByTittle = a.title;
    const nextMovieByTittle = b.title;

    if (
      movieByYear > nextMovieByYear ||
      (movieByYear === nextMovieByYear && movieByTittle > nextMovieByTittle)
    ) {
      return 1;
    }
    if (
      movieByYear < nextMovieByYear ||
      (movieByYear === nextMovieByYear && movieByTittle < nextMovieByTittle)
    ) {
      return -1;
    }
    return 0;
  });

  return movies.map((movie) => movie);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let newMoviesArray = movies.map((movie) => movie);

  let newSortedMoviesArray = newMoviesArray.sort((a, b) => {
    const movieByTittle = a.title;
    const nextMovieByTittle = b.title;

    if (movieByTittle > nextMovieByTittle) {
      return 1;
    }
    if (movieByTittle < nextMovieByTittle) {
      return -1;
    }
    return 0;
  });

  if (newSortedMoviesArray.length >= 20) {
    let x = newSortedMoviesArray.map((movie) => movie.title);
    return x.slice(0, 20);
  }
  if (newSortedMoviesArray.length < 20) {
    let x = newSortedMoviesArray.map((movie) => movie.title);
    return x.slice(0, newSortedMoviesArray.length);
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// function turnHoursToMinutes(movies) {
//   return movies.map ((movie) => {     
//     let totalDuration = movie.duration.split(' ')
//     let hours = parseInt(totalDuration[0])*60
//     let totalMinutes = parseInt(totalDuration[1]) + hours || parseInt(totalDuration[0])*60
//     movie.duration = totalMinutes
//     return movie
//   })  
// }

function turnHoursToMinutes(movies) {
  const calculateTheMinutes = movies.map ((movie) => {     
     const totalDuration = movie.duration.split(' ')
     const hours = parseInt(totalDuration[0])*60
     const totalMinutes = parseInt(totalDuration[1]) + hours || parseInt(totalDuration[0])*60
     const moviesWithDurationInMinutes = {...movie, duration: totalMinutes}
     return moviesWithDurationInMinutes
   }) 
   return calculateTheMinutes
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
