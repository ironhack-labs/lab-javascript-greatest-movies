// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorArray = moviesArray.map(function (movies) {
        return movies.director
    })
    return directorArray
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaFilms = moviesArray.filter(function (movies) {
        return movies.genre.includes('Drama') && movies.director.includes('Steven Spielberg')
    })
    return dramaFilms.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }

    const sumScore = moviesArray.reduce(function (acc, movies) {
        if (!movies.score) {
            movies.score = 0
        }
        return acc + movies.score
    }, 0)

    scoresAvg = Number((sumScore / moviesArray.length).toFixed(2))

    return scoresAvg
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovie = moviesArray.filter(function (eachMovies) {
        return eachMovies.genre.includes('Drama')
    })
    const scoresAvg = dramaMovie.reduce(function (acc, eachDrama) {
        return acc + eachDrama.score
    }, 0)
    if (!scoresAvg) {
        return 0
    }
    return Number((scoresAvg / dramaMovie.length).toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray))
    const years = moviesCopy.sort(function (a, b) {
        return a - b
    })
    const yearsReverse = years.reverse()
    return yearsReverse
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray))
    const titles = moviesCopy.sort(function (a, b) {
        return a - b
    })

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
