// The `movies` array from the file `src/data.js`.
const movies = require('./data')
//console.log('movies: ', movies);


// ITERATION 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr) {
  let result = arr.map(movies => movies.director);
  return result;
}   
// ITERATION 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
  const movies = arr.filter(function(movie) {
    return movie.director == 'Steven Spielberg' && movie.genre.includes('Drama');         
  });
return(movies.length)
}  

// ITERATION 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(arr) {

  if (arr.length == 0)
  return 0;
 
  let movieCount = arr.length;
 
  const totalScore = arr.reduce((accumulator, movie) => {
  return accumulator + movie.score;
  }, 0);
 
 let average = totalScore / movieCount  // return Number((arr.reduce((accumulator, movie) => accumulator + movie.score, 0) / arr.length).toFixed(2)) // also another way the above could have been represented. 
 let roundedAverage = average.toFixed(2)
 let averageToNumber = Number(roundedAverage);
 return averageToNumber;
}
scoresAverage(movies);

// ITERATION 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(arr) {
  
  const dramaMovies = arr.filter(function(movie) { //create new array with only movies containing genre drama
   return movie.genre.includes('Drama');         
 });
 dramaAverageScore = scoresAverage(dramaMovies); //then pass this array into previous scoresAverage function
 return(dramaAverageScore);
}
dramaMoviesScore(movies);

// ITERATION 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(inputArray) {
  inputArray.sort((a, b) => {
    if (a.year === b.year){
      return a.title < b.title ? -1 : 1
    }else{
      return a.year < b.year ? -1 : 1
    }
  });  
 const orderedByYear = JSON.parse(JSON.stringify(inputArray));
 return(orderedByYear);
}

/* OR... APPLYING WHAT I LEARNED ABOVED TO MY ORIGINAL APPROACH. 
function orderByYear(inputArray) {
  inputArray.sort(function (a, b) {
   if (a.year < b.year) return -1;  
   if (a.year > b.year) return 1; 
   if (a.year === b.year) {
     return a.title < b.title ? -1 : 1
   }
 });  
  const orderedByYear = JSON.parse(JSON.stringify(inputArray));
  return(orderedByYear);
}
*/

// ITERATION 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const allMovieTitles = arr.map(movies => movies.title);

  const sortedMovieTitles = allMovieTitles.sort();
  
  firstTwenty = sortedMovieTitles.filter((title,idx) => idx < 20);
  return(firstTwenty);
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
