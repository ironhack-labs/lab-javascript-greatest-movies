// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const directors = movies.map(item => {
    return item.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const times = movies.filter(item => item.director === 'Steven Spielberg');
return times.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0){
    return 0;
  }

  movies.forEach(item => {
    if (typeof item.score != 'number'){
      item.score = 0;
    };
  });

  if (movies.score){
    movies.score = 0;
  }
  const sum = movies.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.score;
    }, 0);
    let average = Math.round((sum/movies.length) * 100) / 100;
    return average;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(item => item.genre[0] === 'Drama');
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  const sortedByYear = [...arr].sort((a, b) => {
    if(a.year - b.year == 0) {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    } else {
      return a.year - b.year;
    }
  });
  return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const sortedByTitle = [...movies].sort((a, b) => {
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  }
  );
  
  sortedByTitle.map((item, index) => {
    if (index = 20){
    return item.title;
  }
  });
  return sortedByTitle;
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
