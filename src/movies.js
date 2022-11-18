// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map ((movie) => movie.director)

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

if (moviesArray.length === 0) {
    return 0
}

const movieSpielberg = moviesArray.filter ((movie) => {
    return movie.director.includes("Steven Spielberg") && movie.genre.includes("Drama")
})

return movieSpielberg.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const score = moviesArray.reduce((acc, movies) => {
        return movies.score ? acc + movies.score : acc
    }, 0) 

    if (moviesArray.length === 0 ) {
        return 0
    }

    const avgMovies = score / moviesArray.length 
return Number(avgMovies.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaScore = moviesArray.filter(movie => movie.genre.includes("Drama"))
    return scoresAverage(dramaScore)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let yearArray = [...moviesArray].sort((a, b) => {
        return a.year - b.year || a.title.localCompare(b.title)
    })
    return yearArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
