// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length
    return spielbergMovies
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0
    const filterFilms = moviesArray.filter(movie => movie.score)
    const reviewsFilms = filterFilms.reduce((acc, current) => acc + current.score, 0)
    const reviewsAvg = reviewsFilms / moviesArray.length
    return  Number(reviewsAvg.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"))
    const dramaAvg = dramaMovies.reduce((acc, current) => acc + current.score, 0) / dramaMovies.length
    return dramaMovies.length !== 0 ? Number(dramaAvg.toFixed(2)) : 0  

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const filmYears = moviesArray.map(movie => ({ year: movie.year}))
    const filmOrdered = filmYears.sort((b,a) => b.year - a.year)
    return filmOrdered
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const _moviesArray = JSON.parse(JSON.stringify(moviesArray))
    const alphaFilms = _moviesArray.map(movie => movie.title).sort()
    return alphaFilms.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if(!moviesArray.length) return null
}
