// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevensDramas = moviesArray.filter(movie => movie.director === "Steven Spielberg").filter(movie => movie.genre.includes("Drama"))
    return stevensDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0
    const avgScore = moviesArray.reduce((acc, value) => {
        if (!value.score) {
            return acc
        }
        return acc + value.score
    }, 0) / moviesArray.length
    return Math.round(avgScore * 100) / 100
    }
    

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaScore = moviesArray.filter(movie => movie.genre.includes("Drama"))
    return scoresAverage(dramaScore)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let yearArray = [...moviesArray].sort((a, b) => {
        return a.year - b.year || a.title.localeCompare(b.title)
    })
    return yearArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphabeticMovies = moviesArray.map((movie) => movie.title)
    alphabeticMovies.sort((a, b) => {
    return a.localeCompare(b)
    })
    // alphabeticMovies.map((movie) => movie.title)
    return alphabeticMovies.slice(0, 20)
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
