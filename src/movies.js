// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
 
  let getDirectorsOfmovie = moviesArray.map(x => x.director)

  let cleanDuplicates = [... new Set(getDirectorsOfmovie)]
  return getDirectorsOfmovie

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

  let moviesOfSteven = moviesArray.filter(x =>  x.director === "Steven Spielberg" && x.genre.includes("Drama"))
  return moviesOfSteven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray == 0){
      return 0
    }
  let scoreExtract = moviesArray.map(x => x.score)
 let scoreAverage = scoreExtract.reduce((acc, cur) => acc + (cur || 0), 0)
 let newResult = scoreAverage / scoreExtract.length
  newResult = Math.round(newResult * 100) / 100

  if(moviesArray.score === 0 ){
    return newResult
  }
  
  return newResult
  
}
 

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
 
let scoreAverage = moviesArray.filter(x  => x.score && x.genre.includes("Drama"))

let filterScore = scoreAverage.map(x => x.score).reduce((acc, cur) => acc + cur, 0)  / scoreAverage.length

filterScore = Math.round(filterScore * 100) / 100
if (scoreAverage == 0) {
  return 0;
}
return filterScore 

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

  let order = moviesArray.sort((a,b) => a.year - b.year || a.title.localeCompare(b.title))
  
  let newOrder = order.map(x => x )

  return newOrder
  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  
  let sortMovie = moviesArray.map(a => a.title)

  let orderAlpha = sortMovie.sort((a,b) => a.localeCompare(b)).slice(0, 20)

  return orderAlpha
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  let sum = 0
}
