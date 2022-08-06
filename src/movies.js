
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movie => movie.director)
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    // const dramaMovies = spielbergMovies.filter(spielberg => spielberg.genre.includes("Drama"))
    return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const averageMovieScore = moviesArray.reduce((acc, current) => acc + current.score, 0) / moviesArray.length
    return averageMovieScore
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) { 
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"))
    return dramaMovies.length
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortByYear = [...moviesArray].sort((a, b) => a.year - b.year)
    return sortByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitle = [...moviesArray].filter(movie => movie.title)
    const orderedTitle = movieTitle.sort((a, b) => a - b)
    return orderedTitle
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }