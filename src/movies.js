// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const allDirectors = movies.map(function (film) {
    return film.director;});
  return  allDirectors;
};

/* function getAllDirectors(movies) {
  const allDirectors = movies.map(film => film.director);
  return  allDirectors;
}; */



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const allMoviesBySteven = movies.filter(function (film) {
    return film.director == 'Steven Spielberg' && film.genre.includes('Drama')
  })
  return Object.keys(allMoviesBySteven).length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const averageScore = movies.reduce(function (accumulator, currentValue){
    return accumulator + Number(currentValue.score)
  },0)
  return parseFloat((averageScore/movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  return scoresAverage(movies.filter(film => film.genre.includes('Drama'))); 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const filmsOrdered = movies.sort(function (a,b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    } else
      return a.year - b.year
  })
  return filmsOrdered
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


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
