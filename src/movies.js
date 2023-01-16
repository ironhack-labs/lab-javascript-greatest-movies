
  // Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const arrayDirectors = moviesArray.map(function(element) {
        return element.director
     })
     return arrayDirectors
} 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray === []) {
        return 0
    } else {
        const justSpielberg = moviesArray.filter(function(element) {
            return element.director === "Steven Spielberg" && element.genre.includes("Drama")
        })
         return justSpielberg.length
    }

    }
    

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) { 
    if (movies.length === 0) return 0;
    let result = movies.reduce(function (scoreofmovie , value){
      if (value.score === '' || value.score === undefined) {
        value.score = 0;
      }
     
     return  scoreofmovie + value.score 
   }, 0) / movies.length
  return Number(result.toFixed(2));
  }
  
  


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let justDrama = moviesArray.filter(function(element) {
        return element.genre.includes("Drama")
    }) 
        if (justDrama.length === 0) { return 0}
    let justDramaScore = justDrama.map(function(element) {
        return element.score
    })

    let sum = justDramaScore.reduce(function(acc, val) {
        return acc + val
    }, 0) 

    let sumScore = sum / justDrama.length

    return Number(sumScore.toFixed(2))
} 
   
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

newSortedArray 

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
