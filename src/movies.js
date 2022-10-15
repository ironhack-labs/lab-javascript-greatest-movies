// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) { 
return moviesArray.map(movie =>movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray.length) return 0
    return moviesArray.filter(movie => movie.genre.includes('Drama') && movie.director === `Steven Spielberg`).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray.length) return 0
    const total = moviesArray.reduce((acc, movie)=> acc + movie.score, 0)
    let avg =  total / moviesArray.length
    return +avg.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    //if (!moviesArray.length) return 0
    let dramaArr = moviesArray.filter(movie => movie.genre.includes('Drama'))
    return scoresAverage(dramaArr)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const ordedArr = [...moviesArray]
     ordedArr.sort((a,b) => {
        if (a.year > b.year) return 1
        if (a.year < b.year) return -1
        if (a.title > b.title) return 1
        if (a.title < b.title) return -1
    })
    return ordedArr
     }
         

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let alphabetOrder = [...moviesArray].map(alpha => alpha.title).sort()
    let result = alphabetOrder.splice(0,20)
    return result
}
   
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
