// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayMovies) {
  const allDirectors = arrayMovies.map((movies) => movies.director); // New array with all the directors mapped from argument
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayMovies) {
  const filteredDirector = arrayMovies.filter((movies) => (movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')));
  return filteredDirector.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrayMovies) {
  // Check if arrayMovies is empty
  if(arrayMovies.length === 0) return 0;

  const reduceScores = arrayMovies.reduce((totalScore, movie) => {
    if(!movie.score) return totalScore; // Prevent an undefined when a movie does not have score
    return totalScore + movie.score;
  }, 0);
  const averageScore = Math.round((reduceScores/arrayMovies.length)*100)/100; // Round average to 2 decimals

  return averageScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrayMovies) {
  // Filter movies with genre = Drama 
  const filteredGenreDrama = arrayMovies.filter((movies) => (movies.genre.includes('Drama')));;
  // Reuse method scoresAverage
  return scoresAverage(filteredGenreDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayMovies) {
  
}

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
