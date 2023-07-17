// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map((eachMovie) => {
        return eachMovie.director

    })
    return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const StevenSpielbergDramas = moviesArray.filter((eachMovie) => {
        return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')
    })
    return StevenSpielbergDramas.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    moviesArray.forEach((eachFilm) => {

        if (!eachFilm.score) {
            eachFilm.score = 0
        }
    })

    const sumScoring = moviesArray.reduce(function (acc, eachFilm) {

        return acc + eachFilm.score
    }, 0)

    let total = parseFloat((sumScoring / moviesArray.length).toFixed(2))

    return total
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramas = moviesArray.filter((eachMovie) => {
        return eachMovie.genre.includes('Drama')
    })
    if (!dramas.length) {
        return 0
    }
    dramas.forEach((eachFilm) => {

        if (!eachFilm.score) {
            eachFilm.score = 0
        }
    })

    const sumScoring = dramas.reduce(function (acc, eachFilm) {

        return acc + eachFilm.score
    }, 0)

    let total = parseFloat((sumScoring / dramas.length).toFixed(2))

    return total



}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    moviesArrayCopy.sort((a, b) => {
        return a.year - b.year || a.title.localeCompare(b.title)
    })
    return moviesArrayCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphabeticallyOrderedMovies = JSON.parse(JSON.stringify(moviesArray))
    alphabeticallyOrderedMovies.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })

    const twentyMoviesArray = alphabeticallyOrderedMovies.slice(0, 20)
    const movieTitlesArray = twentyMoviesArray.map((eachMovie) => {
        return eachMovie.title
    })
    return movieTitlesArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes   
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
