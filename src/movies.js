// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movie => movie.director)
    return allDirectors


}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesDrama = moviesArray.filter(movie => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')

    })
    return moviesDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const sumScores = moviesArray.reduce((acc, eachMovie) => {
        if (!eachMovie.score) eachMovie.score = 0
        return acc + eachMovie.score
    }, 0)

    let newsum = sumScores / moviesArray.length
    let new2Sum = Number(newsum.toFixed(2))
    return new2Sum


}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 1) {
        return moviesArray[0].score
    }

    const moviesDrama = moviesArray.filter(movie => {
        return movie.genre.includes('Drama')
    })
    return scoresAverage(moviesDrama)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copymoviesArray = JSON.parse(JSON.stringify(moviesArray))
    copymoviesArray.sort((a, b) => {
        let titleMovies = (a.year - b.year)

        if (titleMovies === 0) {
            return a.title.localeCompare(b.title)

        }
        return titleMovies
    })

    return copymoviesArray

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyAlphabetically = JSON.parse(JSON.stringify(moviesArray))
    const allTitle = moviesArray.map(movie => movie.title)
    let newAllTitle = allTitle.sort()
    if (newAllTitle.length > 20) {
        return newAllTitle.slice(0, 20)
    }
    return newAllTitle

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
