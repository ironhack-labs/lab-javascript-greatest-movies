// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movies => movies.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaArr = moviesArray.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })
return dramaArr.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0
    let sumScores = moviesArray.reduce((acc, movie) => {
        if(movie.score) return acc + movie.score
        else return acc
    }, 0)
    averageScore = sumScores / moviesArray.length
    return Math.round(averageScore * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const filterMovies = moviesArray.filter(movie => movie.genre.includes('Drama'))
    if(!filterMovies.length) return 0
    const sumDrama = filterMovies.reduce((acc, val) => {
        if(val.score) return acc + val.score
        else return acc
    }, 0)
    averageScoreDrama = sumDrama / filterMovies.length
    return Math.round(averageScoreDrama * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const movArrCopy = moviesArray.map((x) => x)
    const yearSort = movArrCopy.sort((a, b) => a.year - b.year);
    return yearSort;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitles = moviesArray.map(movie => movie.title);
    const alphaSort = movieTitles.sort();
    const filterAlpha = alphaSort.filter((title, index) => index < 20)
    return filterAlpha;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
