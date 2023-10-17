// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movieArray) {
    const directors = movieArray.map(eachDirector => {
        return eachDirector.director

    })
    return directors
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const Drama = moviesArray.filter(eachDrama => {
        return eachDrama.genre.includes('Drama') && eachDrama.director.includes('Steven Spielberg')
    }
    )
    return Drama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const sumTotalScores = moviesArray.reduce((acc, eachScores) => {
        if (typeof eachScores.score !== "number") {
            return acc
        }
        return acc + eachScores.score
    }, 0)
    return Number((sumTotalScores / moviesArray.length).toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const Drama = moviesArray.filter(eachDrama => {
        return eachDrama.genre.includes('Drama')
    })
    return scoresAverage(Drama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { }
const copymovies = JSON.parse(JSON.stringify(copiamovies))
const yearsOrder = moviesArray.sort



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
