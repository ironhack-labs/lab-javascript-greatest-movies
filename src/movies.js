

const movies = require ('./data.js')

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const onlyDirectors = movies.map(elm => elm.director)
    return onlyDirectors

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const onlySpielberg = movies.filter(elm => elm.genre.includes('Drama') && elm.director.includes('Spielberg'))
  return onlySpielberg.length

  }
    

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0 
  }
  const score = movies.reduce((acc, elm) =>{
    if (!elm.score){
      return acc
    }else{
      return acc + elm.score
    }
 },0)

const average = parseFloat((score/movies.length).toFixed(2))
return average

}

// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesScore(movies) {
  const dramaMoviesArry = movies.filter(eachMovie => eachMovie.genre.includes("Drama"))
  return scoresAverage(dramaMoviesArry);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

  const copyByYear = [...movies]

  copyByYear.sort((a,b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year

    
  });

return copyByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

 const copyByLetter = movies.map((elm) => {
   return elm.title;

 })
 copyByLetter.sort((a,b) =>{
   if (a > b){
     return 1
   }else if(
     b > a ){
       return -1
     }
     return 0})


return copyByLetter.slice(0,20)
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
