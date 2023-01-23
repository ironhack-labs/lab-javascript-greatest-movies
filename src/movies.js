// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((eachDirector) => {
        const directorsOfMovies = eachDirector.director
        return directorsOfMovies
    })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesby = moviesArray.filter((movies) => {
        return movies.genre.includes('Drama') && movies.director === 'Steven Spielberg'
    })

    return moviesby.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    // const moviesby = moviesArray.filter((movies) => {
    //     return movies.genre.includes('Drama') && movies.director === 'Steven Spielberg'
    // })
    // return moviesby

    const moviesAverage = moviesArray.reduce((acc, movies) => {
        if (!movies.score) movies.score = 0

        return acc + movies.score
    }, 0)

    // if (moviesArray.length === 0) {
    //     return 0
    // } esto es lo mismo que lo de abajo escrito de otra forma diferente en una sola linea
    if (!moviesArray.length) return 0

    const avgScore = (moviesAverage / moviesArray.length)
    return Number(avgScore.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((movies) => {
        return movies.genre.includes('Drama')
    })

    if (!dramaMovies.length) return 0

    const avgDrama = dramaMovies.reduce((acc, movies) => {
        return acc + movies.score
    }, 0)

    const avgScore = (avgDrama / dramaMovies.length)
    return Number(avgScore.toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyMoviesArray = JSON.parse(JSON.stringify(moviesArray))

    const byYear = copyMoviesArray.sort((a, b) => {

        let orderYear = (a.year - b.year)

        if (orderYear === 0) {
            orderYear = a.title.localeCompare(b.title)
        }

        return orderYear
    })

    return byYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyMoviesArray = JSON.parse(JSON.stringify(moviesArray))
    const byTitle = copyMoviesArray.map((eachtitle) => {
        const titleSearch = eachtitle.title

        return titleSearch
    })

    let top = byTitle.sort()

    if (top.length > 20) {
        top = top.slice(0, 20)
    }

    return top

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const copyMoviesArray = JSON.parse(JSON.stringify(moviesArray))
    let duration = copyMoviesArray.map(eachMovie => {
        const copyeachMovie = {
            ...eachMovie
        }

        if (eachMovie.duration.includes("h") && eachMovie.duration.includes("min")) {
            copyeachMovie.duration = parseInt(eachMovie.duration.substr(0, 1)) * 60 + parseInt(eachMovie.duration.substr(3, 5))
            return copyeachMovie
        } else if (eachMovie.duration.includes("h")) {
            copyeachMovie.duration = parseInt(eachMovie.duration.substr(0, 1)) * 60
            return copyeachMovie
        } else if (eachMovie.duration.includes("min")) {
            copyeachMovie.duration = parseInt(eachMovie.duration.substr(-5, 2))
            return copyeachMovie
        }

    })
    return (duration)
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null
}
