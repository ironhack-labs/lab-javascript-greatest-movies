//const movies = require('./data')

// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (moviesArray) => { 
    const newArr = moviesArray.map(e => e.director)
    return newArr};


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (moviesArray) => {
    let spilMovies = moviesArray.filter(e => e.genre.includes('Drama') && e.director === 'Steven Spielberg')
    return !spilMovies ? 0 : spilMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals 
const scoresAverage = (moviesArray) => {
    if(!moviesArray.length){return 0}
     let avg = moviesArray.filter(e=>e.score).reduce((sum,rating) => sum +rating.score,0);
    return Number((avg/moviesArray.length).toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesScore = (moviesArray) => {
    let dramaMovies = moviesArray.filter(el=>el.genre.includes('Drama'))
    return scoresAverage(dramaMovies)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


const orderByYear = (moviesArray) => {
   let sorted = moviesArray.sort((a, b) => b.year - a.year).reverse()
   return sorted
}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (moviesArray) => {
    let sorted = moviesArray.sort((a, b) => b.title - a.title)
    return sorted
 }



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
