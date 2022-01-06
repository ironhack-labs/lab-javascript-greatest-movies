// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(movies => movies.director);
  return directors
}
//console.log(getAllDirectors(movies));



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const Spielbergdramas = movies.filter(movies => movies.genre.includes("Drama") && movies.director === "Steven Spielberg")
  return Spielbergdramas.length;
}
//console.log(howManyMovies(movies));



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const scoresAverage = scores.reduce((accumulator, score) => accumulator + score, 0) / movies.length;
   
    return scoresAverage; 

}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
  const moviesSortedByYear = movies.sort((a, b) => (a.year > b.year) ? 1 : -1)
  const moviesSorted = [];
  for (let i=0; i < moviesSortedByYear.length; i +=1){
    moviesSorted.push(moviesSortedByYear[i]);
  }
  return moviesSorted;
}
//console.log(orderByYear(movies));



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  const moviesSortedByTitle = movies.sort((a, b) => (a.title > b.title) ? 1 : -1);
  const moviesSorted = [];
  if(moviesSortedByTitle.length <= 20){
    for(let i=0; i < moviesSortedByTitle.length; i+=1){
      moviesSorted.push(moviesSortedByTitle[i].title);
     } 
    } else {
       for(let i=0; i < 20; i+=1){
         moviesSorted.push(moviesSortedByTitle[i].title);
       }
     }
  return moviesSorted;
}
//console.log(orderAlphabetically(movies));


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
