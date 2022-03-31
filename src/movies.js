// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const directors = array.map((movie) =>  movie.director)
  return directors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const spielberg = array.filter(movie => {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  })
  return spielberg.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if(!array.length){return 0;}
  const scores = array.reduce(function(accumulator, currentValue){
   if(!currentValue.score){
    currentValue.score = 0 };
    return accumulator + currentValue.score
  },0);
  const avg = scores /array.length
    return Math.round(avg *100 + Number.EPSILON) / 100;

  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const dramas = array.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.genre.includes('Drama')},0);
    return dramas;
  const dramasAvg = dramas.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.score},0);
    const dramaFilt = array.filter(function(movie){return movie.genre.includes('Drama')})
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
 

  const ordYear = [...array];
  ordYear.sort((a,b)=>{
    if(a.year - b.year == 0) return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    else return a.year - b.year;
  });
  return ordYear;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  arrayCopy = [...array];
  const alphOrd = arrayCopy.sort(function(a,b){
    if(a.title < b.title){return -1;} if(a.title > b.title){return 1;}
    return 0;
  });

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
