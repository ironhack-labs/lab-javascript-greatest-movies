// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length
    return spielbergMovies
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0
    const scoreFilterArray = moviesArray.filter(movie => movie.score)
    const scoreAverage = scoreFilterArray.reduce((acc, movie) => acc + movie.score, 0) / moviesArray.length
    return Number(scoreAverage.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"))
    const dramaAverage = dramaMovies.reduce((acc, movie) => acc + movie.score, 0) / dramaMovies.length
    return dramaMovies.length !== 0 ? Number(dramaAverage.toFixed(2)) : 0
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const yearOrderArray = moviesArray.map(movie => movie).sort((a, b) => a.year !== b.year ? a.year - b.year : a.title.localeCompare(b.title))
    return yearOrderArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const _moviesArray = JSON.parse(JSON.stringify(moviesArray))
    const alphabeticalArray = _moviesArray.map(movie => movie.title).sort()
    return alphabeticalArray.splice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const _turnHoursToMinutesArray = JSON.parse(JSON.stringify(moviesArray))
    const turnHoursToMinutesArray = _turnHoursToMinutesArray.map(movie => {
        movie.duration = Number(movie.duration.split("h")[0]) * 60 + Number(movie.duration.split("h")[1].replace("min", ""))
        return movie
    })
    return turnHoursToMinutesArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null
}
