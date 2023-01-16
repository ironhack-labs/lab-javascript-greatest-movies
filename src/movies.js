// const movies = require('./data')

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let allDirectors = []
    allDirectors = moviesArray.map(element => element.director)

    return allDirectors

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(!moviesArray.length){
        return 0
    }
    const spilberg = moviesArray.filter(elem => elem.director === 'Steven Spielberg' && elem.genre.includes('Drama'))
    return spilberg.length
}

// console.log(howManyMovies()) 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const redData = moviesArray.filter((elem) => elem + total.score /moviesArray.length ,0) 

    const redreddata = Math.round(redData)
    
    console.log(redData)
    return Number(redreddata)
}
scoresAverage()
console.log('HEY')


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(!moviesArray.genre.includes('Drama')){
        return 0
    }
    let avgDrame = []
    avgDrame = moviesArray.filter((elem, total) => elem.genre.includes('Drama') + total,0 /moviesArray.length)
    return avgDrame
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
