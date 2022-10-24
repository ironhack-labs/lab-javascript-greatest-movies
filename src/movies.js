// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => movie.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) { return 0 }
    const scoredMovies = moviesArray.filter((movie) => movie.score)
    console.log(scoredMovies)
    const totalScore = scoredMovies.reduce((acc, movie) => acc + movie.score, 0)
    const avgScore = totalScore / moviesArray.length
    return Number(avgScore.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"))
    if (dramaMovies.length === 0) return 0
    let totalScoreDramaMovies = dramaMovies.reduce((acc, movie) => acc + movie.score, 0)
    let avgScoreDramaMovies = totalScoreDramaMovies / dramaMovies.length
    return +avgScoreDramaMovies.toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderByYear = moviesArray.slice().sort((a, b) => a.year - b.year).sort(function (a, b) {
        if (a.year === b.year) return a.title.localeCompare(b.title)
    })
    return orderByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderAbc = moviesArray.map((moviesArray) => moviesArray.title).sort((a, b) => a.localeCompare(b))
    return orderAbc.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const copy = JSON.parse(JSON.stringify(moviesArray))
    const hoursToMinutes = copy.map((object) => {
        let hours = object.duration.slice(0, 1)
        let minutes = object.duration.slice(3, 5)
        object.duration = Number(hours) * 60 + Number(minutes)
        return object
    })
    return hoursToMinutes
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
