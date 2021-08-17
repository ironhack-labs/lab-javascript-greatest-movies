const movies = require ("./data.js")
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {
  const directors = movies.map((number) => number.director)
  console.log(directors)
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const SpielbergDrama = movies.filter(number => number.director == "Steven Spielberg" && number.genre.includes("Drama"))
  return SpielbergDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
 
  if(movies.length === 0){
    return 0
   }

     const average = movies.reduce(function(accumulator, currentValue){
       if(currentValue.score){
       return (accumulator += currentValue.score);
       }else{
         return accumulator
       }
   },0)

    return parseFloat ((average/movies.length).toFixed(2))
   }
 


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(number => number.genre.includes("Drama"))
  if(dramaMovies.length === 0){
    return 0
   }else{ 
 const average = dramaMovies.reduce(function(accumulator, currentValue){
  return (accumulator + currentValue.score);
},0)
return parseFloat ((average/dramaMovies.length).toFixed(2))
}
 }
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
const year =[...movies]
 year.sort(function(a, b) {
  return (b.year - a.year)
})
 year.reverse() 
 return year 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const order = [...movies]
 
  let titles = order.map((number) => number.title)
 titles = titles.sort()
titles = titles.slice(0,19)

return titles
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
