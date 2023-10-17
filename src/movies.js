// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director)


}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const sSmovies = moviesArray.filter(eachMovie => {
        return eachMovie.director.includes("Steven Spielberg") && eachMovie.genre.includes("Drama")
    })
    return sSmovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    } else {
        const moviescores = moviesArray.reduce((acc, eachMovie) => {
            if (typeof eachMovie.score !== "number") {
                return acc
            }

            return acc + eachMovie.score



        }, 0)

        return parseFloat((moviescores / moviesArray.length).toFixed(2))
    }
}










// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {


    const dramascor = moviesArray.filter(eachMovie => {
        if (eachMovie.genre.includes('Drama'))
            return eachMovie


    })

    return scoresAverage(dramascor)
}








// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    //const yearorder = []
    //return yearorder
    const oBY = movie.year.sort((x, y) => {
        return x - y
    })

}






// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
