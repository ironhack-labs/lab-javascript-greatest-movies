// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allMovies = moviesArray.map(eachMovies => {
        return eachMovies.director
    })
    return allMovies
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovies = moviesArray.filter(eachMovies => {
        return eachMovies.genre.includes('Drama') && eachMovies.director.includes('Steven Spielberg')
    })
    return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const allScore = moviesArray.reduce((acc, eachScore) => {
        if (typeof eachScore.score !== 'number') {
            return acc
        }
        return acc + eachScore.score
    }, 0)
    return Number((allScore / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(eachMovies => {
        return eachMovies.genre.includes('Drama')
    })
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyMovies = JSON.parse(JSON.stringify(moviesArray))
    copyMovies.sort((a, b) => {
        if (a.year < b.year)
            return -1
    })
    copyMovies.sort((a, b) => {
        if (a.year === b.year)
            return -1
    })
    return copyMovies
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
