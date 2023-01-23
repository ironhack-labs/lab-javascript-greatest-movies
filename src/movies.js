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
    if (!moviesArray.length) return 0
    const dramaSpielberg = moviesArray.filter(eachMovie => {
        return eachMovie.director.includes("Steven Spielberg") && eachMovie.genre.includes("Drama")
    })
    return dramaSpielberg.length

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0
    const scores = moviesArray.reduce((acc, eachMovie) => {
        if (!eachMovie.score) { eachMovie.score = 0 }
        return acc + eachMovie.score

    }, 0)
    let scoreAvg = scores / moviesArray.length
    scoreAvg = +scoreAvg.toFixed(2)



    return scoreAvg
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes("Drama")
    })
    if (!dramaMovies.length) return 0
    const dramaScores = dramaMovies.reduce((acc, eachDrama) => {
        return acc + eachDrama.score
    }, 0)
    let dramaScoresFinal = dramaScores / dramaMovies.length

    return +dramaScoresFinal.toFixed(2)
    //const scoreDrama = moviesArray.reduce((acc, eachMovie) => {
    //   if (eachMovie.genre.includes("Drama")) {
    //      return acc + eachMovie.score
    //  }

    //   return scoreDrama
    //  })


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(movies))

    const sortedArray = moviesArrayCopy.sort((a, b) => {
        // return a.year - b.year
        let orderByYear = (a.year - b.year)
        if (orderByYear === 0) {
            orderByYear = (a.title.localeCompare(b.title))

        }
        return orderByYear
    })



    return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    const titleMovies = moviesArrayCopy.map((eachMovie) => {

        return eachMovie.title

    })
    let titleMoviesAlph = titleMovies.sort()
    // const titleMoviesCopy = JSON.parse(JSON.stringify(titleMovies))
    // const orderALphMovies = titleMoviesCopy.sort((a, b) => {
    //     return a.title - b.title
    // })
    if (titleMoviesAlph.length > 20) return titleMoviesAlph.slice(0, 20)


    return titleMoviesAlph

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
