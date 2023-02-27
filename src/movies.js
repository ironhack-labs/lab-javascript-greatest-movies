// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArr = moviesArray.map(function (movie) {
        return movie.director
        
    })
    // directorsArr: ["Steven S.", ...]
    return directorsArr

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let moviesSteve = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    return moviesSteve.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let avg = moviesArray.reduce(function(acc, movie) {
        if (movie.score === null || movie.score === undefined) {
            movie.score = 0
        }

        return acc + movie.score/moviesArray.length
    }, 0)

    return Number(avg.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaArr = moviesArray.filter(movie => movie.genre.includes('Drama'))

    let dramaAvg = dramaArr.reduce(function(acc, drama) {
        return acc + drama.score/dramaArr.length
    }, 0)

    return Number(dramaAvg.toFixed(2))


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let yearArr = moviesArray.map(function(movie) {
        return movie
    })

    

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
