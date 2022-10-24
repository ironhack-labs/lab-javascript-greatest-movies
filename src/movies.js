// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directors = moviesArray.map((eachMovie) => {
        const directorName = eachMovie.director
        return directorName
    })

    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const SpielbergFilter = moviesArray.filter((eachMovie) => {

        const spielbergMovies = eachMovie.director == 'Steven Spielberg'
        // console.log(spielbergMovies)
        const dramaMovies = eachMovie.genre.includes('Drama')
        // console.log(dramaMovies)
        const spielbergDramas = spielbergMovies && dramaMovies
        // console.log(spielbergDramas)
        return spielbergDramas
    })

    return SpielbergFilter.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const averageScore = moviesArray.reduce((acc, eachMovie) => {
        return acc + eachMovie.score
    }, 0)
    return averageScore / moviesArray.score.length

}
// console.log(averageScore / moviesArray.score.length)




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (dramaMovies) {
        const dramaScore = moviesArray.reduce((acc, eachMovie) => {
            return acc + eachMovie.score
        }, 0)
    }
    // console.log(dramaScore / dramaScore.length)
    return dramaScore / dramaScore.length

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
