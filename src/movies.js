// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((eachDirectors) => {
        // console.log(eachDirectors.director)
        return (eachDirectors.director)

    })
    return allDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesSteven = moviesArray.filter((eachMoviesSteveen) => {
        // console.log(eachMoviesSteveen.director)
        return eachMoviesSteveen.director === 'Steven Spielberg' && eachMoviesSteveen.genre.includes('Drama')
    })
    return moviesSteven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }
    const scoresMovies = moviesArray.reduce((acc, eachAvg) => {
        if (!eachAvg.score) {
            return acc
        }
        else {
            return eachAvg.score + acc
        }

    }, 0)
    const totalScore = scoresMovies / moviesArray.length
    const total = totalScore.toFixed(2)
    return +total

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const moviesDramaT = moviesArray.filter((eachDrama) => {
        const moviesDrama = eachDrama.genre.includes('Drama')
        return moviesDrama

    })
    return scoresAverage(moviesDramaT)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderByYearCopy = [...moviesArray]
    orderByYearCopy.sort((a, b) => {
        if (a.year < b.year) {
            return -1
        }
        if (a.title < b.title) {
            return -1
        }
        else if (a.year > b.year) {
            return 1
        }
        else if (a.tittle > b.tittle) {
            return 1
        }

        else
            return 0

    })
    return orderByYearCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderByTittleCopy = [...moviesArray]
    orderByTittleCopy.sort((a, b) => {
        if (a.title < b.title) {
            return -1
        }
        else if (a.title > b.title) {
            return 1
        }
        else return 0
    })
    const onlyTitle = orderByTittleCopy.map((eachTitle) => {
        return eachTitle.title
    })
    const FirstTitles = onlyTitle.slice(0, 20)
    return FirstTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const turnHoursToMinutesCopy = [...moviesArray]
    // console.log(turnHoursToMinutesCopy)
    const minutesMovie = turnHoursToMinutesCopy.map((eachMinutes) => {
        return eachMinutes.duration

    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
