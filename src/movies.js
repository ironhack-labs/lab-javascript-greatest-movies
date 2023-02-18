// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let mapped = moviesArray.map(movies => movies.director)
        return mapped
}
console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaSteven = moviesArray.filter(movies => {
        return movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')
    })
    return dramaSteven.length
}
console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let moviesWithScore = moviesArray.filter(movie => movie.score)
    if (moviesWithScore.length === 0) {
        return 0
    }
    let avgScoreArray = moviesWithScore.map(movies => {
        return movies.score
    })
    let avgScoreTotal = avgScoreArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
    let avgScore = avgScoreTotal / avgScoreArray.length
        return Number(avgScore.toFixed(2))
}
console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let allDramaMovies = moviesArray.filter(movies => movies.genre.includes('Drama'))
    if (allDramaMovies.length === 0) {
        return 0
    }
    let dramaScoreArray = allDramaMovies.map(movies => {
        return movies.score
    })
    let avgDramaScore = dramaScoreArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
    let avgDrama = avgDramaScore / dramaScoreArray.length
        return Number(avgDrama.toFixed(2))
}
console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesOrderedYear = [...moviesArray]
    moviesOrderedYear.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year
        }
        return a.title.localeCompare(b.title)
    })
    return moviesOrderedYear
}
console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let sortedMoviesArray = [...moviesArray]
    sortedMoviesArray.sort((a, b) => a.title.localeCompare(b.title))
    let first20 = sortedMoviesArray.splice(0, 20)
    return first20.map(movies => movies.title)
}
console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
