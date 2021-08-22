// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {

  return movies.map ( element => element.director )

}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaMovies = movies.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  const qytDramaMovies = dramaMovies.length;
  return qytDramaMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0){
    return 0
  }
    const totalScores = moviesArray.reduce(function (accumulated, currentValue){
      if(currentValue.score){
        return accumulated + currentValue.score;
      }else{
        return accumulated;
      }
    }, 0);
  
    const totalScoresAverage = totalScores / moviesArray.length;
    const roundedScore = Number(totalScoresAverage.toFixed(2));
    return roundedScore
  }
  






// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  if (moviesArray.length === 0){
    return 0
  }
    const filteredDramaMovies = moviesArray.filter((element)  => element.genre.includes('Drama'));

    return scoresAverage(filteredDramaMovies)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}




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
