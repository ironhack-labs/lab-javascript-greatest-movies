
const movies = require("./data");
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

    const allDirectors = movies.map(eachMovie => {
          return eachMovie.director
       })
    return allDirectors

  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  

  const moviesSS = movies.filter(eachMovie => {
     
     if(eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama'))
     
     return true
   
    })
    return  moviesSS.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  
  if(movies.length === 0){
   return 0
  }
  const scoreA = movies.reduce((acc, eachMovie) => {


     if(eachMovie.score === undefined) {
   
      return acc 
      
    } else {
        
      return acc + eachMovie.score
  
    }
   }, 0)

  return Number((scoreA/movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  
  const dramaMovies = movies.filter(eachMovie => {

  return eachMovie.genre.includes('Drama')
  
  })

  if(dramaMovies.length === 0){

    return 0
  }
  const dramaMoviesA = dramaMovies.reduce((acc, eachMovie) => {
       
      return acc + eachMovie.score

    }, 0)


  return Number((dramaMoviesA/ dramaMovies.length).toFixed(2))
  

  } 




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//function orderByYear(movies) {

//const moviesCopy = [...movies]

 // allYears.sort((a, b) => {
 //   if(a.year === b.year){
  //    return a.title.localeCompare(b.title);
 //   }
    
 //   return a.year - b.year
 
 // });
 // return moviesCopy

//}

function orderByYear(movies) {
  const moviesYear = [...movies]
  moviesYear.sort ((a, b) => {
    if(a.year === b.year) {
    return a.title.localeCompare(b.title);
  }
  return a.year - b.year
});
  return moviesYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const orderAlph = [...movies]
  
  const allTitle = movies.map(eachMovie => {
  
  return eachMovie.title
 })

 allTitle.sort((a, b) => { 
   if (a > b) {
  return 1;
  }
  if (b > a) {
  return -1;
  }
  return 0; })

  return allTitle.slice(0, 20)

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
