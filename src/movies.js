const movies = require('./data.js');
console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(movie => movie.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const allSpielbergMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
  return allSpielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(moviesArray.length === 0) {
    return 0;
  }
    let totalScores = moviesArray.length;
    const scoreSum = moviesArray.reduce(function (accumulator, eachMovie) {
     return accumulator + eachMovie.score;
    }, 0);

    const averageScore = scoreSum / totalScores;
    const finalAverage = Number(averageScore.toFixed(2));
   console.log(finalAverage)
    return finalAverage;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if(moviesArray.length === 0) {
    return 0;
  }
    let totalDramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    const DramaMoviesSum = totalDramaMovies.reduce(function (accumulator, totalDramaMovies) {
     return accumulator + totalDramaMovies.score;
    }, 0);
    if(totalDramaMovies.length === 0){
      return 0;
    }
    const averageScore = DramaMoviesSum / totalDramaMovies.length;
    const finalAverage = Number(averageScore.toFixed(2));
   console.log(finalAverage)
    return finalAverage;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

  const newSortedYears = JSON.parse(JSON.stringify(moviesArray));
  const sortedYears = newSortedYears.sort(function (a, b) {
    if (a.year < b.year) return -1; //  1 here (instead of -1 for ASC)
    if (a.year > b.year) return 1; // -1 here (instead of  1 for ASC)
    if (a.year === 0) return 0;
    if(a.year === b.year) return -1;
  });
   return newSortedYears;
  }

/* function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(movie => movie.director);
  return allDirectors;
}
*/

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesByTitle = moviesArray.map(movie => movie.title);
    console.log(moviesByTitle)
  const sortedTitles = moviesByTitle.sort();
    if(sortedTitles.length > 20) {
      sortedTitles.splice(20)
    }
    console.log(sortedTitles)
  return sortedTitles
  };
/* 
receives array of movies

returns array of ONLY the first 20 movies, ascending alphabetical ordered.
returns array of titles of movies, if less than 20 movies, return all of them.
*/
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
