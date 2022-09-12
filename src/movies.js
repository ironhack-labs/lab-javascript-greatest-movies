// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const directorsList = moviesArray.map(function (directorsListArray) {
    return directorsListArray.director;
  });
  return directorsList 
}


function howManyMovies(moviesArray) {
  let count = 0;
  for (const element of moviesArray) {
    if {
      moviesArray.director.indexOf("Steven Spielberg")}
       && {moviesArray.genre.indexOf("Drama")}
      count += 1;
    }
    
  return count
  } 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const average = moviesArray.reduce(function(acc, currentValue){
  return acc + currentValue.score / moviesArray.title;
  },0);
  return average.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
 function dramaMoviesScore(moviesArray) {
  const averageDrama = movies.genre.reduce(function(acc, currentValue){
    return acc + currentValue.score / moviesArray;
    },0);
    return averageDrama;
  }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  moviesCopy1 = [...movies]
}
  


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
