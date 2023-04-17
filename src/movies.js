// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const movieDirectors = moviesArray.map((popino) => {
        return popino.director
    })
    return movieDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const spielbergMovies = moviesArray.filter((popino2) => {
        if (popino2.director == "Steven Spielberg" && popino2.genre.includes("Drama")) {
            return popino2.director && popino2.genre
        }


    })
    return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0
    }
    const averageMovieScores = moviesArray.reduce((acc, currentValue) => {
        if (!currentValue.score) {
            return acc
        }
        return acc + currentValue.score

    }, 0)

    const result = averageMovieScores / moviesArray.length
    const redondeado = result.toFixed(2)
    const numerar = Number(redondeado)
    return numerar

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const allDramaMovies = moviesArray.filter((eachMovie) => {
        if (eachMovie.genre.includes("Drama")) {
            return eachMovie
        }

    })
    if (!allDramaMovies.length) {
        return 0
    }
    const allDramaMoviesAverage = allDramaMovies.reduce((accumulative, dramaMov) => {
        return accumulative + dramaMov.score
    }, 0)
    const result = allDramaMoviesAverage / allDramaMovies.length
    const redondeado = result.toFixed(2)
    const numerar = Number(redondeado)
    return numerar
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const realMoviesCopy = JSON.parse(JSON.stringify(moviesArray))
    if (realMoviesCopy.year === realMoviesCopy.year) {
        realMoviesCopy.sort((a, b) => {
            if (a.title > b.title) {
                return 1
            }
            if (a.title < b.title) {
                return -1
            }
            return 0
        })
        realMoviesCopy.sort((a, b) => {

            return a.year - b.year

        })
    }
    return realMoviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const realMoviesCopy = JSON.parse(JSON.stringify(movies))

    realMoviesCopy.sort((a, b) => {
        if (a.title > b.title) {
            return 1
        }
        if (a.title < b.title) {
            return -1
        }
        return 0
    })
    realMoviesCopy.length = 20

    let resultado = []
    let result = realMoviesCopy.map((var1) => {
        resultado.push(var1.title)
    })
    return resultado
}



console.log(realMoviesCopy)
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
