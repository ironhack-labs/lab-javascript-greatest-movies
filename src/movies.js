// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {

    const allDirectorMovies = moviesArray.map(eachMovie => {
        return eachMovie.director
    })
    return allDirectorMovies
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const allSpielbergDramaMovies = moviesArray.filter(eachMovie => {
        return (eachMovie.director === 'Steven Spielberg') && (eachMovie.genre.includes('Drama'))
    })
    return allSpielbergDramaMovies.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const allFilmsScore = moviesArray.reduce((acc, eachFilm) => {
        if (!eachFilm.score) {
            eachFilm.score = 0
            return acc + eachFilm.score
        } else {
            return acc + eachFilm.score
        }
    }, 0)

    const avg = (allFilmsScore / moviesArray.length)

    return Number(avg.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const allDramaMovies = moviesArray.filter((eachMovie) => {
        return eachMovie.genre.includes("Drama")
    })
    if (allDramaMovies.length === 0) {
        return 0
    }
    const allFilmsScoreDrama = allDramaMovies.reduce((acc, eachFilm) => {
        return acc + eachFilm.score
    }, 0)
    const avg = (allFilmsScoreDrama / allDramaMovies.length)
    return Number(avg.toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderByYearCopy = JSON.parse(JSON.stringify(moviesArray))
    const orderMovies = orderByYearCopy.sort((a, b) => {
        return a.year - b.year
    })
    return orderMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const orderbyNameCopy = JSON.parse(JSON.stringify(moviesArray))
    const orderMovies = orderbyNameCopy.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })
    const moviesName = orderbyNameCopy.map((eachMovie) => {
        return eachMovie.title
    })
    return moviesName
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
