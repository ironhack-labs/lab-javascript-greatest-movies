// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    let allDirectors=moviesArray.map(x=>x.director)
   return allDirectors
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  

function howManyMovies(moviesArray) {
  let result = 0
  if (moviesArray.length===0){
    return result
  }

  let moviesSpielberg = moviesArray.filter (movie => movie.director===`Steven Spielberg`)
  let onlyDrama =[]
  for ( let i = 0; i < moviesSpielberg.length; i ++){
    let genre = moviesSpielberg[i].genre

    for ( let j = 0; j < genre.length; j++ ) {
      const element = genre[j];
      
      if (element==="Drama") {
        result++
        onlyDrama.push(moviesSpielberg[i]) 
      }
      
    }
    
  }
  

 return result

}

























// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

