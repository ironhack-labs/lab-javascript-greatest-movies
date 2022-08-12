// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(function(movie) {
        return movie.director
    })
    return directors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray.length) return 0;
    
    const spielbergMovies = moviesArray.filter(function(movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    })

 return spielbergMovies.length   
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;

    const average = moviesArray.reduce(function(acc, val) {
      
        if (val.score) {
          return acc + val.score
        }
      
          return acc;
        
    }, 0) / moviesArray.length;
    
}

/*
const rates = product.reviews.reduce(function(acc, val) {
  return acc + val.rate
}, 0)

console.log(rates)
*/

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order) 
// create a new array, don't change the original
function orderByYear(moviesArray) {
    const newMoviesArray = [...moviesArray]; 
  
    newMoviesArray.sort(function(a, b) {
      return a.year - b.year
    }).sort(function(a, b) {
      return a.title - b.title
    })
   return newMoviesArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
