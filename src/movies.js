// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map(person => ({ name: person.director}));
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

  function isSpielbergMovie(movies) {
    const isSpielberg = movies.director === "Steven Spielberg";
    const isDramaMovie = movies.genre.includes("Drama");
  
    if (isSpielberg && isDramaMovie) {
      return true;
    }
    return false;
  };
  
  const spielbergMovies = movies.filter(isSpielbergMovie);
  
  return spielbergMovies.length;
  };

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  const sumScores = movies.reduce((sum, movie) => (sum + movie.score), 0);
  return Math.round((sumScores / movies.length) * 100) / 100
};

// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesScore(movies) {

  function isDramaMovie(movies) {
  let isDrama = movies.genre.includes("Drama");
  if (isDrama) {
    return true;
  }
  return false;
  };

  const dramaMovies = movies.filter(isDramaMovie);

  function sumDramaMovie(arr) {
  const sumScores = arr.reduce((sum, movie) => (sum + movie.score), 0);
  return Math.round((sumScores / arr.length) * 100) / 100
  }; 
  
  return sumDramaMovie(dramaMovies)
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

  function compare (a,b) {
  
    if (a.year = b.year) {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;}}
  
    if ( a.year < b.year ){
      return -1;
    }
  
    if ( a.year > b.year ){
      return 1;
    }
    
  
  }
  return movies.sort(compare);
  };

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  function compare (a,b) {
    if ( a.title < b.title ){
      return -1;
    }
  
    if ( a.year > b.year ){
      return 1;
    }
  
  }
  const orderedMovies = movies.sort(compare);
  const onlyMovies = movies.map(movie => ({ title: movie.title}));
  return onlyMovies.slice(0,19);
};

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
