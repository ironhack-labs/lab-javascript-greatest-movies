// The `movies` array from the file `src/data.js`.



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const mappedArray = arr.map(function(director){
    return director.director;
  });

  return mappedArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const spielbergMovies = arr.filter(function(director){
    return director.director == "Steven Spielberg" && director.genre.includes("Drama");
  });
  const directedMovies = spielbergMovies.length
  return directedMovies
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  let cumulativeScore = arr.reduce(function(acc, value){
    return acc + value.score;
  },0);
  cumulativeScore = cumulativeScore / arr.length;
  cumulativeScore = cumulativeScore.toFixed(2);
  cumulativeScore = parseFloat(cumulativeScore);
  return cumulativeScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const filteredList = arr.filter(function(drama){
    return drama.genre.includes("Drama");
  });
  const dramaScore = filteredList.reduce(function(acc,value){
    return acc + value.score;
  });
  dramaScore = dramaScore / filteredList.length;
  dramaScore = dramaScore.toFixed(2);
  dramaScore = parseFloat(dramaScore);

  return dramaScore
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let sortedList = arr.sort((a,b)=> a-b);
  return sortedList;
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
