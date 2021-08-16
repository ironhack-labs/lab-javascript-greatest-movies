// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const moviesDirectors = movies.map((theDirectors) => {
    const directorsName = theDirectors.director;

    console.log(directorsName);

    return directorsName;
  });
  return moviesDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const moviesSpielberg = movies.filter((movie) => {
    
    if (movie.director === 'Steven Spielberg' && (movie.genre.includes('Drama'))) {
      return true
    
    } else {

      return false
    };

  
    
  });
  return moviesSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  //if ( movies.length = 0){

  //  return 0
  //}

  const totalScore = movies.reduce((sum,elem) => {

   // if (movies. ){
   //   continue
   // }

    return sum += elem.score
  },0)

  const averageScore = totalScore / movies.length;

  const decimals = averageScore.toFixed(2);

  return Number(decimals)






}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const totalDramaScore = movies.filter((movie) =>
  
   movie.genre.includes('Drama'))

  const totalScore = totalDramaScore.reduce((sum,elem) => {

    // if (movies. ){
    //   continue
    // }
  
     return sum += elem.score
   },0)
  
   
   
   const averageScore = totalScore / totalDramaScore.length;
 
   const decimals = averageScore.toFixed(2);
 
   return Number(decimals)

   
  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const moviesYear = movies.map((theYears) => {
    const years = theYears.years;

    const yearsOrder = years.sort

    return yearsOrder;
  });

  return moviesYear

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
    bestYearAvg
  };
}
