const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = (movies) => {
   const directorsArray = [];
   movies.map( (movie) => {
     directorsArray.push(movie.director);
   })

  return directorsArray
}
console.log(getAllDirectors(movies)); //testing function 





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => {
    return movies.filter(
      (movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
};

console.log(howManyMovies(movies));





// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(array) {
  let numberOfMovies = array.length; 
  const sum = array.reduce((acc, movie) => {    //reduce goes through the array
    return acc + movie.score; }, 0);  //acc is called accumulator + the movie score 

  console.log( (sum / (numberOfMovies)).toFixed(2) ); 
}

scoresAverage(movies);





// Iteration 4: Drama movies - Get the average of Drama Movies
 const dramaMoviesScore = (movies) => {
   let numberOfMoives = 0; 
   const sum = movies.reduce((acc, movie) => {
      if (movie.genre.includes('Drama')) {
        numberOfMoives++; 
        return acc + movie.score;
      } else {
        return acc + 0; 
      }
 }, 0); 

return (sum / numberOfMoives).toFixed(2); 
 }
 console.log(dramaMoviesScore(movies)); 





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
  const newSorted = movies.sort( (a, b) => (a.year > b.year ? 1 : -1)); //sorting a & b where a & b will be each movie swapping a for b
    return newSorted;        //if it
 }
// console.log(orderByYear(movies));


// function compare (a, b){
//   if (a.year < b.year) {
//     return -1;
//   }
//   if (a.year > b.year) {
//     return 1; 
//   }
//    return 0; 
// }

// console.log( compare (m1, m2)); 






// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  const orderAlphabetically = (movies) => {
    let new20MoviesArray = [];
    for (let i = 0; i < 20; i++){ 
      new20MoviesArray.push(movies[i].title)
    }
    new20MoviesArray = new20MoviesArray
 







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
