// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(eachMovie => {
        return eachMovie.director
    })

    return allDirectors
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const SpielbergMovies = moviesArray.filter(eachMovie => {
        return (eachMovie.director == 'Steven Spielberg')
    })

    const SpielbergDramaMovies = SpielbergMovies.filter(eachDramaMovie => {
        return (eachDramaMovie.genre.includes('Drama'))
    })

    return SpielbergDramaMovies.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length) {
        const allScores = moviesArray.reduce((acc, eachMovie) => {

            if (typeof eachMovie.score === 'number') {
                return (acc + eachMovie.score)
            } else return acc + 0
        }, 0)

        return Number((allScores / moviesArray.length).toFixed(2))

    } else return 0
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const allDramaMovies = moviesArray.filter(eachMovie => {
        return (eachMovie.genre.includes('Drama'))
    })

    if (!allDramaMovies.length) return 0

    const dramaMoviesScore = allDramaMovies.reduce((acc, eachMovie) => {
        return acc + eachMovie.score
    }, 0)

    return Number((dramaMoviesScore / allDramaMovies.length).toFixed(2))

}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const copyMoviesArray = JSON.parse(JSON.stringify(moviesArray))

    copyMoviesArray.sort((a, b) => {
        return a.year - b.year || a.title.localeCompare(b.title)
    })

    return copyMoviesArray
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const copyMoviesArray = JSON.parse(JSON.stringify(moviesArray))

    copyMoviesArray.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })

    const twentyMoviesArray = copyMoviesArray.slice(0, 20)

    const copyMoviesFiltered = twentyMoviesArray.map(eachMovie => {
        return eachMovie.title
    })

    return copyMoviesFiltered
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const copyMoviesArray = JSON.parse(JSON.stringify(moviesArray))

    const allDurations = moviesArray.map(eachMovie => {

    })
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
