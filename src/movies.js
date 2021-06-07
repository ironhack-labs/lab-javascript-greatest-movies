// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const Directors = movies.map(movies => {
    return movies.director;
    })
  
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const drama = movies.filter(movies => {
    if(movies.director.includes('Steven Spielberg') 
    && movies.genre.includes('Drama').length){ //.length porque es un array
      return true
    };

  })
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
   if (movies.length === 0) {
    return 0
   }
    const sum = movies.reduce((accumulator, currentValue) => {
    if (currentValue.score){
      return accumulator + currentValue.score;
    } else {
      return accumulator;
    }
  }, 0);
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
const dramaMovies = movies.filter((movie) => {
    return movie.genre.includes('Drama');
  });
  return scoresAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const moviesByYear = movies.sort(function(a,b){
    if(a.year < b.year){ return -1;}
      if(a.year > b.year){ return 1;}
      return 0;
  })
  return moviesByYear
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  moviesByName = movies.sort(function(a,b){
    if(a.title < b.title)
    { return -1;}
    if(a.title > b.title)
    { return 1;}
    return 0;
  })
  const moviesByName20 = moviesByName.slice(0, 20);
  console.log(moviesByName20);
  return moviesByName20
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
