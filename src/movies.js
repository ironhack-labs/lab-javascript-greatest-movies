// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(e => e.director)
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenSpielberg = moviesArray.filter(e => e.genre.includes('Drama') && e.director === 'Steven Spielberg')
    return stevenSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0

    const notNumber = moviesArray.filter(e => {

        if (typeof e.score === 'number') {
            return e
        }
    })

    const average = notNumber.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0) / moviesArray.length
    console.log('PRUEBA PRIMERA', average)
    const average1 = average.toFixed(2)
    const final = parseFloat(average1)

    return final

}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    moviesDrama = moviesArray.filter(e => e.genre.includes('Drama'))
    averageMoviesDrama = moviesDrama.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0) / moviesDrama.length
    averageMoviesDramaParse = parseFloat(averageMoviesDrama.toFixed(2))
    if (moviesDrama.length === 0) {
        return 0
    } else return averageMoviesDramaParse
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const arrayCopy = [...moviesArray]
    arrayCopy.sort((a, b) => {
        if (a.year > b.year) {
            return 1
        }
        if (a.year < b.year) {
            return -1
        }
        if (a.year = b.year) {
            if (a.title < b.title) return - 1 //  1 here (instead of -1 for ASC)
            if (a.title > b.title) return 1 // -1 here (instead of  1 for ASC)
            if (a.title === 0) return 0
        }
    })
    return arrayCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const arrayCopy = [...moviesArray]
    const onlyTitle = arrayCopy.map(e => e.title)
    return onlyTitle.sort().slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const arrayCopy = [...moviesArray]
    return arrayCopy
    const newArrayCopy = newArrayCopy.map(e => e.duration.replace('min', '') && e.duration.replace('h', ''))

    // arrayCopy.replace('min', '')
    // arrayCopy.replace('h', '')
    // console.log(arrayCopy)
    // return arrayCopy
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
