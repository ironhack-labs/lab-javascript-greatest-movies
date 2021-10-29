// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrMov) {
   const directors= arrMov.map(dir =>{
     return dir.director
   })
   return directors   
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrMovDram) {
  let count = 0;
 const countDram = arrMovDram.filter(mov => {
   if (mov.director === 'Steven Spielberg' && mov.genre.includes('Drama')){
   count ++
   }
   })
  return count
 }

   


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesScored) {
  if( moviesScored == '' ){
    return 0
  }else {
    const averageMovies = moviesScored.reduce((acum, valorMov) =>{
      return acum + valorMov.score
    }, 0) / moviesScored.length
    return parseFloat(averageMovies.toFixed(2))
  }
    
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrMovDramaScore) {
  let arr = []
  const allMovies = arrMovDramaScore.map(mov => {
      if(mov.genre.includes('Drama')){
         arr.push(mov)
      }
  })
  let scoreAvre = arr.reduce((accum, mov1) =>{
    return accum + mov1.score
  },0) / arr.length
   return Number(scoreAvre.toFixed(2))
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrMoviesYear) {
  const orderYear = arrMoviesYear.sort((a ,b) =>{
    if( a.year !== b.year){
     return a.year - b.year
    }else if( a.year === b.year ){
      return a.title > b.title ? 1 : -1
    }
  })
  return orderYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrMov) {
  const movieTitles = [ ];
  arrMov.forEach(movie =>{
   movieTitles.push(movie.title)
  })
  return movieTitles.sort().slice(0,20);
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {

}

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
