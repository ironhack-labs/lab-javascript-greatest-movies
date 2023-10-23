// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const arrayDirectors = moviesArray.map(function (element) {
        return element.director
    })
    return arrayDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenDrama = moviesArray.filter(function (element) {
        element.director === 'Steven Spielberg' && element.genre.includes('Drama')
    })
    return stevenDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const sum = moviesArray.reduce(function (acc, currentValue) {
        return acc + currentValue.score
    }, 0)
    return Math.round((sum / moviesArray.length) * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const arrayDramaMovies = moviesArray.filter(function (element) {
        return element.genre.includes('Drama')
    })
    const sumDrama = arrayDramaMovies.reduce(function (acc, currentValue) {
        return acc + currentValue.score
    }, 0)
    return Math.round((sumDrama / arrayDramaMovies.length) * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const clonedMoviesArray = moviesArray.slice()
    const oldestMoviesFirst = clonedMoviesArray.year.sort(function(a, b) {
        return a - b
    })
    // How to iterate of the elements of the array and then check by year?
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
