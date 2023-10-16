// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(eachDirector => {
        return eachDirector.director
    })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielberg = moviesArray.filter(eachMovie => {
        return eachMovie.director.includes('Steven Spielberg') && eachMovie.genre.includes('Drama')
    })
    return spielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const avgScore = moviesArray.reduce((acc, eachMovie) => {
        if (!eachMovie.score) {
            eachMovie.score = 0
        }
        return acc + eachMovie.score
    }, 0)
    return Number((avgScore / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes('Drama')
    })
    if (dramaMovies.length === 0) {
        return 0
    }
    const dramaMoviesAvgScore = dramaMovies.reduce((acc, eachDramaMovie) => {
        return acc + eachDramaMovie.score
    }, 0)
    return Number((dramaMoviesAvgScore / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyMoviesArray = JSON.parse(JSON.stringify(moviesArray))
    copyMoviesArray.sort((a, b) => {
        if (a.year > b.year) {
            return 1
        }
        if (a.year < b.year) {
            return -1
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        }
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        }
    })

    return copyMoviesArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyMoviesArray = JSON.parse(JSON.stringify(moviesArray))
    copyMoviesArray.sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        }
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        }
    })
    if (copyMoviesArray.length > 20) {
        copyMoviesArray.splice(20)
    }
    return copyMoviesArray.map(eachMovie => eachMovie.title)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const minutes = moviesArray.map(eachMovie => {
        const newObject = { ...eachMovie }
        if (newObject.duration.length === 2) {
            newObject.duration = Number(newObject.duration[0] * 60)
        } else {
            let hoursToMin = newObject.duration.replace('min', '').split('h ')
            newObject.duration = Number((hoursToMin[0] * 60)) + Number(hoursToMin[1])
        }
        return newObject
    })
    return minutes

}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) {
        return null
    }
    const copyMoviesArray = JSON.parse(JSON.stringify(moviesArray))
    copyMoviesArray.sort((a, b) => {
        if (a.year > b.year) {
            return 1
        }
        if (a.year < b.year) {
            return -1
        }
    })
}
