// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directorAll = moviesArray.map((eachmovie) => {
        return eachmovie.director
    })
    return directorAll
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenMovies = moviesArray.filter(function (eachMovies) {
        return eachMovies.genre.includes('Drama') && eachMovies.director.includes('Steven Spielberg')
    })
    return stevenMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }

    const scoreTotal = moviesArray.reduce(function (acc, eachMovies) {
        if (!eachMovies.score) {
            eachMovies.score = 0
        }
        return acc + eachMovies.score
    }, 0);

    const averTotal = scoreTotal / moviesArray.length

    const roundout = averTotal.toFixed(2)
    return parseFloat(roundout)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramMovies = moviesArray.filter(function (eachMovies) {
        return eachMovies.genre.includes('Drama')
    })
    //return dramnMovies.length

    const scoreTotal = dramMovies.reduce(function (acc, eachMovies) {
        return acc + eachMovies.score
    }, 0);

    const dramTotal = scoreTotal / moviesArray.length

    const roundout = dramTotal.toFixed(2)
    return parseFloat(roundout)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newOrderCopy = JSON.parse(JSON.stringify(moviesArray))

    const sorted = newOrderCopy.sort((x, y) => {
        if (x.year === y.year) {
            return x.title.localeCompare(y.titulo)
        }
        else return x.year - y.year
    })
    return sorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newOrderAlphCopy = JSON.parse(JSON.stringify(moviesArray))

    const sorted = newOrderAlphCopy.sort((x, y) => {
        if (x.title < y.title) {
            return -1
        }
        if (x.title > y.title) {
            return 1
        }
        return 0
    })
    const titleFirst20 = newOrderAlphCopy.slice(0, 20).map((movies) => {
        return movies.title
    })
    return titleFirst20

}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
