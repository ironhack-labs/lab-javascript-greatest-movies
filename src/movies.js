// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray.map((eachMovie) => {
        return eachMovie.director
    })
    return allDirectors
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
    if (moviesArray.length === 0) {
        return 0
    }
    const sumScores = moviesArray.reduce((acc, eachMovie) => {
        if (!eachMovie.score) {
            return acc
        } else {
            return acc + eachMovie.score
        }
    }, 0)

    const totalScore = sumScores / moviesArray.length
    const result = totalScore.toFixed(2)
    //console.log(+result)
    return +result
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const averageDramaMovies = moviesArray.filter((acc, eachMovie) => {
        return eachMovie.genre.includes('Drama')
    })
    console.log(averageDramaMovies.length)


}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = [...movies]
    return moviesCopy.sort((a, b) => {

    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }