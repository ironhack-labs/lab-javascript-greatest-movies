// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectorsArray = moviesArray.map(function(el){
        return el.director     
    })
    return allDirectorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenSpielbergMovies = moviesArray.filter(function(movie){
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
          return movie
        }
      )
       return stevenSpielbergMovies.length
       }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0)
    return 0
    let moviesScore = moviesArray.reduce(function(acc, val){
        if (val.score)
        return acc + val.score
        else 
        return acc
       }, 0)
   return +(moviesScore / moviesArray.length).toFixed(2)
   
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let allDrama = moviesArray.filter(function(drama){
        if (drama.genre.includes('Drama'))
        return drama
    })
    let dramasScore = allDrama.reduce(function(acc, val){
      return acc + val.score
    }, 0)
    if(dramasScore)
    return +(dramasScore / allDrama.length).toFixed(2)
    else
    return 0
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedByYear = JSON.parse(JSON.stringify(moviesArray)).sort(function(a, b){
        if (a.year === b.year){
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year
    })
     return sortedByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newOrder = moviesArray
    let onlyTitles = newOrder.map(function(movie){      
     return movie.title
    }).sort().slice(0, 20)
    return onlyTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
