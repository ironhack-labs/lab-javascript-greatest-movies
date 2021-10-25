// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const moviesMap = movies.map(movies => movies.director)
  
  return moviesMap


}


/* Go ahead and create a howManyMovies() function that receives 
an array as a parameter and filter 👀 the array so we can have 
only the drama movies where Steven Spielberg is the director.
 */
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const spielbergMovies = movies.filter(movie => {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  }
      
   )
   return spielbergMovies.length


}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {


  const moviesScore = movies.map(movie => movie.score)
 /*  const filterScore = moviesScore.filter(score => typeof score === 'number')
 */
  const sumScore = moviesScore.reduce((acc, eachScore) => {
    return (acc + eachScore)
}, 0)

const whatever = parseFloat((sumScore / moviesScore.length).toFixed(2))

return whatever


}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  
    const dramaScore = movies.filter(movie => movie.genre.includes('Drama'))
    
    const sumDramaScore = dramaScore.reduce((acc, eachFilm) => {
      
     return (acc + eachFilm.score)
}, 0)
  
  const whatever2 = parseFloat((sumDramaScore / dramaScore.length).toFixed(2))

return whatever2

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  // const moviesYear = movies.map(movies => movies.year)
 const sortedYear = movies.sort((movie1, movie2) =>  movie1.year - movie2.year)
 return sortedYear

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() { 
  if( movies.lenght = 20 ){
    const sortedYear = movies.sort((movie1, movie2) =>  movie1.title - movie2.title)
    return sortedYear.slice(0,20)}
  else {
  return 
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
