








// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return (movies.map(movieEl => movieEl.director))













}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {




  let moviesFilt = movies.filter(movieEl => {

    return movieEl.director == "Steven Spielberg" && movieEl.genre.includes("Drama")



  })

  return moviesFilt.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length == 0) { return 0 }
  else {

    let count = 0;
    movies.forEach(element => {
      if (!element.score) { count = count + 0; }
      else { count += element.score }
    });
    let avg = count / movies.length
    return Math.round(avg * 100) / 100
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  let dramamovies = movies.filter(movieEl => movieEl.genre.includes("Drama"));
  return scoresAverage(dramamovies)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let copy = [...movies];

  copy.sort((a, b) => {
    if (a.year - b.year !== 0) {
      return a.year - b.year
    } else {

      return a.title.localeCompare(b.title);
    }
  })
  return copy;


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  let sortMovies = movies.map((movieEl) => movieEl.title);
  sortMovies.sort();


  if (sortMovies.length < 20) {
    return sortMovies;
  } else {
    sortMovies = sortMovies.slice(0, 20);

  }
  return sortMovies;
}










// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
