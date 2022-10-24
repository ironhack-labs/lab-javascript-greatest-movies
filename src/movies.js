// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const movies = moviesArray.map(eachDirector => {
        const allDirectors = eachDirector.director
        return allDirectors
    })
    return movies
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielberg = moviesArray.filter(eachSpielberg => {
        return eachSpielberg.director.includes('Steven Spielberg') && eachSpielberg.genre.includes('Drama')
    })
    return spielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const result = moviesArray.reduce((acc, eachScore) => {
        if (!eachScore.score) {
            return acc
        } else {
            return acc + eachScore.score
        }
    }, 0)

    if (moviesArray.length === 0) {
        return 0
    }

    const average = result / moviesArray.length
    const twoDecimals = Number(average.toFixed(2))

    return twoDecimals
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(eachDrama => {

        if (eachDrama.genre.includes('Drama')) {
            return eachDrama
        }
    })

    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    const orderAscending = moviesArrayCopy.sort((a, b) => {
        if (a.year < b.year) {
            return -1
        }
        if (a.year == b.year) {
            return -1
        }
    })

    return orderAscending
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphabeticOrder = JSON.parse(JSON.stringify(moviesArray))

    alphabeticOrder.sort((a, b) => {
        if (a.title < b.title) {
            return -1
        }
    })

    const twentyOrder = alphabeticOrder.map(eachTitle => {
        return eachTitle.title
    })
    return twentyOrder.slice(0, 20)
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
