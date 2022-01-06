// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const directorsListed = movies.map(smtg => {

    return smtg.director;

  })
return directorsListed;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const spielbergMov = (movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') >= 0)).length;
  

  return spielbergMov;
}




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length === 0) {
    return 0;
  }

  const scores = movies.reduce((all, movs) => {
    if (movs.score) {
      return all + movs.score;
    } else {
      return all;
    }
  }, 0);

  const avgScore = scores / movies.length;

  return Math.round(avgScore*100)/100;

}
  



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const dramaMovies = movies.filter((dramaMov) => {
    return dramaMov.genre.indexOf('Drama') >= 0;
  });

  return scoresAverage(dramaMovies);

}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const movieYear = movies.map(function(moviek){

    return moviek.year;
  
  });

  movieYear.sort(function (year1, year2){

    if (year1 > year2) {
      return 1;
    } else if (year1 < year2) {
      return -1;
    } else {
      return year1.title.localeCompare(year2.title);
    }

  });

  return movieYear;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const movieT = movies.map((mov) => mov.title);

  movieT.sort((a, b) => a.localeCompare(b));

  const top = movieT.slice(0, 20);

  return top;
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
