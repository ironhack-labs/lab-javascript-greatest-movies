// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directArr = moviesArray.map(arElement => arElement.director)
    return directArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const sadEstefano = moviesArray.filter(eachMovie => {
        return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')
    })
    return sadEstefano.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const sumScores = moviesArray.reduce((acc, eachMovie) => {
        if (!eachMovie.score) {
            return acc + 0
        }
        else { return acc + eachMovie.score }
    }, 0)

    let avgScore = sumScores / moviesArray.length
    return +parseFloat(avgScore).toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const filteredArray = moviesArray.filter((movie) => {
        return movie.genre.includes('Drama')
    })
    if (filteredArray.length === 0) {
        return 0
    } else {
        const sumScoresDrama = filteredArray.reduce((acc, eachMovie) => {
            if (!eachMovie.score) {
                return acc + 0
            }
            else { return acc + eachMovie.score }
        }, 0)

        let avgScoreD = sumScoresDrama / filteredArray.length
        return +parseFloat(avgScoreD).toFixed(2)
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray))
    const sortedMovies = moviesCopy.sort((a, b) => {
        if (a.year === b.year) {
            return (a.title).localeCompare(b.title)
        }
        return a.year - b.year
    })
    return sortedMovies

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopyT = JSON.parse(JSON.stringify(moviesArray))
    const sortedTitles = moviesCopyT.sort((a, b) => {
        return (a.title).localeCompare(b.title)
    })
    const justTitles = sortedTitles.map(movies => {
        return movies.title
    })

    if (justTitles.length >= 20) {
        return justTitles.splice(0, 20)
    }
    return justTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
