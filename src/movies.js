// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(function (movie){
      return movie.director;
    }); return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
      let numberOfMovies = moviesArray.filter(function(movie){
        if (movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') !== -1) { 
        return movie;
      } 
    }); return numberOfMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
      const averageScores = moviesArray.reduce(function(sum, movie) {if (!movie.score) {
        return sum;
      } else {
      return sum + movie.score;}
    }, 0); return Math.round((averageScores / moviesArray.length) * 100) / 100;}
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
      const dramaMovies = moviesArray.filter(function(movie){
      if (movie.genre.indexOf('Drama') !== -1) {
        return movie;
        } 
    }); 
    if (dramaMovies.length === 0) {
      return 0;
    };
    const averageDramaMovies = dramaMovies.reduce(function (sum, movie){
        return sum + movie.score; 
    }, 0); return Math.round((averageDramaMovies / dramaMovies.length) * 100) /100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortedMovies = moviesArray.slice().sort(function (movie1, movie2) {
    if (movie1.year === movie2.year) {
      return -1;
    }
    return movie1.year - movie2.year;
  }); return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let movieTitles = moviesArray.map(function(movie) {
      return movie.title
    }); 

    movieTitles.sort(function(title1, title2){
      if (title1 > title2) {
        return 1;
      } else if (title1 < title2) {
        return -1;
      }
    }); return movieTitles.slice(0, 20);
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
