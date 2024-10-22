// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(eachMovies => eachMovies.director)
    return allDirectors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const newAllDirectors = getAllDirectors(moviesArray)
    return [...new Set(newAllDirectors)]
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenSpilbergMovies = moviesArray.filter(eachMovies => {
        return eachMovies.director === 'Steven Spielberg' && eachMovies.genre.includes('Drama')
    })
    return stevenSpilbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (movies.length === 0) {
        return 0
    }
    const totalScore = moviesArray.reduce((acc, eachMovies) => {
        return acc + eachMovies.score
    }, 0)
    const average = totalScore / movies.length

    return Math.round(average * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(eachMovies => {
        return eachMovies.genre.includes('Drama')
    })
    if (dramaMovies.length === 0) {
        return 0
    }
    const scoreDrama = moviesArray.reduce((acc, eachMovies) => {
        return acc + eachMovies.score
    }, 0)

    return scoreDrama / dramaMovies.length
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = moviesArray.slice()
    const orderMovies = moviesCopy.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year
    })
    return orderMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newMoviesCopy = moviesArray.slice()
    const sortedTitles = newMoviesCopy.sort((a, b) => {
        return a.title.localeCompare(b.title)
    }).map(movie => movie.title)
    return sortedTitles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
