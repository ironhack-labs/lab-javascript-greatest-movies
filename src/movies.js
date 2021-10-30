// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data");


function getAllDirectors(newMoviesArr) {

  const movieDirectors =  newMoviesArr.map ((movie) => movie.director);
    return movieDirectors
 
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  const deseareMovies =  moviesArr.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama")!== -1 );
  return deseareMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {      

  const scoreMovie = moviesArr.reduce((scoreMovie, movie) => {
    scoreMovie += movie.score
    return scoreMovie
  }, 0);
  
  const averageScore = scoreMovie / moviesArr.length
  
  
  if (!moviesArr.length) {
    return 0
  }else{
    return Number(averageScore.toFixed(2))
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {

  const dramaMovies = moviesArr.filter((movie) => movie.genre.includes("Drama")); // si no hay peliculas []
  const dramaRates = dramaMovies.reduce((dramaRates, movie) => {
    dramaRates += movie.score
    return dramaRates
  }, 0);
  const average = dramaRates / dramaMovies.length  
 

  if (!dramaMovies.length)  {
    return 0
  } else {
    return Number(average.toFixed(2))
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  
  //const yearsMovie = moviesArr.map((movie)=> movie.year);
  const orderyears = moviesArr.sort((movie1, movie2)=> {
    if (movie1.year > movie2.year){
      return 1
    }else if (movie1.year < movie2.year){
      return -1
    } else {
      return 0
    }
  });

  return orderyears

 

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(orderArr) {
  const durationMovies = orderArr.map((movie)=> movie.title);
  const orderMovies = durationMovies.sort((movie1, movie2)=>{
    if (movie1.year > movie2.year){
      return 1
    }else if (movie1.year < movie2.year){
      return -1
    } else {
      return 0
    }
      
  });
    
  return orderMovies



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
