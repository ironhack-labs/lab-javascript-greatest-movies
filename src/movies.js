const { push, filter } = require("./data");
const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  const directorsGet = array.map(dir => dir.director);

  return directorsGet
}
//console.log(getAllDirectors(movies))
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(matriz) {
  const dramaMovie = matriz.filter(dir =>{
    return dir.director === 'Steven Spielberg' && dir.genre.includes('Drama')
  })
  return dramaMovie.length
}
//console.log(howManyMovies(movies))
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(matriz) {
  if (matriz.length === 0){
    return 0
  }
  const average = matriz.reduce((acc,atual)=>{
    if( typeof atual.score === "number"){
      return acc+atual.score
    }
    return acc
  },0) 
 return parseFloat((average/matriz.length).toFixed(2))
}
//console.log(scoresAverage(movies))
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(matriz) {
const averageDrama = matriz.filter(gen =>gen.genre.includes('Drama'))
return scoresAverage(averageDrama)
}
//console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(matriz) {
  const ordena = matriz.map(matriz => matriz).sort((a ,b )=>{
    if(a.year > b.year ){
      return 1
    }
    if(a.year < b.year ){
      return -1
    }
    if(a.year === b.year ){
      if(a.title.toLowerCase() > b.title.toLowerCase()){
        return 1
      }
      if(a.title.toLowerCase() < b.title.toLowerCase()){
        return -1
      }
      return 0
    }
  })
  return ordena
}
//console.log(orderByYear(movies))
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(matriz) {
  const alfabetically = matriz.map(tit => tit.title).sort();
  const to20 = alfabetically.slice(0,20)
return to20
}
//console.log(orderAlphabetically(movies))
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(matriz) {
  const hourToMin = matriz.map(temp =>temp.duration)
  console.log(hourToMin)
  const hour = parseInt(matriz.duration[0])
  console.log(hour)
}
turnHoursToMinutes(movies)
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
