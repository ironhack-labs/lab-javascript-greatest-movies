// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directors = moviesArray.map((eachMovie) => {

        return eachMovie.director

    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const dramaSpielberg = moviesArray.filter((eachMovie) => {
        return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')
    })
    return dramaSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0
    const sum = moviesArray.reduce((acc, eachMovie) => {
        if (eachMovie.score === '' || eachMovie.score === undefined) {
            return acc
        }
        return acc + eachMovie.score
    }, 0)
    const avg = sum / moviesArray.length
    const roundedAvg = avg.toFixed(2)
    return Number(roundedAvg)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const drama = moviesArray.filter((eachMovie) => {

        return eachMovie.genre.includes('Drama')
    })
    if (drama.length === 0) return 0
    const score = drama.reduce((acc, eachDramaMovie) => {
        return acc + eachDramaMovie.score
    }, 0)
    const avg = score / drama.length
    const roundedAvg = avg.toFixed(2)

    return Number(roundedAvg)

    // const sum = 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));
    const sortedMovies = moviesArrayCopy.sort((a, b) => {
        if (a.year < b.year) {
            return -1
        } else if (a.year > b.year) {
            return 1
        } else {//0
            if (a.title < b.title) {
                return -1
            } else if (a.title > b.title) {
                return 1
            } else {
                return 0
            }
        }
    })
    return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    // const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));
    // const sortedTitle = moviesArrayCopy.sort((a, b) => {
    //     return b.title - a.title
    // })
    const sortedTitle = moviesArray.map((eachMovie) => {
        return eachMovie.title
    })
    sortedTitle.sort()
    return sortedTitle.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const convertedMovies = moviesArray.map((eachMovie) => {
        const dividedDuration = eachMovie.duration.split(' ')
        const hours = dividedDuration

    })


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
