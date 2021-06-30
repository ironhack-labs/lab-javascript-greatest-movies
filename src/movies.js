// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');


// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(array) {
  const allDirectors = array.map(function (arr) {
    return arr.director
  });

 return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  let howManyDramaMovies = 0;
  const allSpielbergDrama = array.filter(function(arr)  {
    return (arr.director === 'Steven Spielberg' && arr.genre.indexOf('Drama') !==-1)
  });

  howManyDramaMovies = allSpielbergDrama.length
  return howManyDramaMovies
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {

  if (array.length === 0) return 0;

  const sumScore = array.reduce(function (acc, val) {

    if (val.score !== undefined){

      return acc += val.score}

      else return acc

      //do not forget to add 0 value after the curly
    }, 0)

    let sumAvgScore = 0;

    sumAvgScore = sumScore/array.length;

    return parseFloat(sumAvgScore.toFixed(2));
  }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {

  let allDramaMovies = array.filter(function (arr){

    return arr.genre.includes('Drama')} );    

  if (allDramaMovies.length === 0) return 0;

  let allDramaMoviesScore = allDramaMovies.reduce(function (acc, value){

    return acc+value.score;

  }, 0)

  let avgScore = allDramaMoviesScore/allDramaMovies.length

  return parseFloat(avgScore.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  let newArray = movies.slice()

  let orderedByYear = newArray.sort(function(a, b) {

    if (a.year < b.year) {
      return -1;

    }

    if (a.year> b.year) {
      return 1;
    }  

  });  

  orderedByYear = orderedByYear.sort(function(a,b){
    if (a.year === b.year){
     return a.title.localeCompare(b.title);
    }
  })

  return orderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

  const ordered = movies.map(function (movie) {

    return movie.title

  }).sort(function (a, b) {

    return a.localeCompare(b);

  }).slice(0, 20);

  return ordered;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes 
//next step
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
