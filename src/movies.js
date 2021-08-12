// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  return movies.map ( element => element.director )

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

/* 
  const filterredSpielbergDramaMovies = moviesArray.filter(function (element) {
    return element.director === 'Steven Spielberg' && element.genre.includes('Drama');
  })
    return filterredSpielbergDramaMovies.length;
*/

// NOTA PARA MI - Aun no me aclaro con las arrowFunction
// Versión arrowFunction de lo de arriba. Primero ejecuta el .filter que me daría los datos filtrados según la condición expuesta y luego ejecuta el .length de esos datos filtrados

  return  moviesArray.filter(element => element.director === 'Steven Spielberg' && element.genre.includes('Drama')).length
    
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
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

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
