

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  let dirNames = array.map((movie) => movie.director)
  let filteredNames = dirNames.filter((name, index) => index === dirNames.indexOf(name))
  return filteredNames
}






// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  let stevenMovies = array.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    return stevenMovies.length
}






// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  //map through array and list all scores
  let allScores = array.map((movie) =>{
    if(!movie.score){
     return  movie.score = 0
    } else {
      return movie.score
    }
  })
  //console.log(allScores)
  // sum all scores
  let totalScore = allScores.reduce((acc, val) => acc+val,0)
  //console.log(totalScore)
  //average score rounded to two digits turned into a number
  let finalAverage = Number((totalScore/allScores.length).toFixed(2))
  //console.log(finalAverage)
  if(!array.length){
    return 0
  } else{
  return finalAverage
  }
}





// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
   //filter all drama movies
 let dramaMovies = array.filter((movie) => movie.genre.includes('Drama'))
 //All scores of drama movies
 let dramaScores = dramaMovies.map((dramaMovie) => dramaMovie.score)

 let totalScore = dramaScores.reduce((acc, val) => acc+val, 0)
 
 let averageScore = Number((totalScore/dramaScores.length).toFixed(2))
 if (!dramaMovies.length){
   return 0
 } else
 return averageScore
}





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let sortedYears = [...array].sort((a,b) =>{
    if (a.year === b.year){
      return a.title.localeCompare(b.title)
    } else{
      return a.year-b.year
    }
  })
  return sortedYears
  }






// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
let sortedMovieArray = [...array].sort((a,b)=> a.title.localeCompare(b.title))
let movieTitles = sortedMovieArray.map((movie)=> movie.title)
if(array.length>20){
 return movieTitles.slice(0,20)
} else {
  return movieTitles
}


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
