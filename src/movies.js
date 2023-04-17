// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsList = moviesArray.map((eachMovie) => {
        return eachMovie.director
    })
    return directorsList
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramaList = moviesArray.filter((eachMovie) => {
        return eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")
    })
    return spielbergDramaList.length
}


// Iteration 3: 
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const sumScores = moviesArray.reduce((acc, eachMovie) => {
        if (eachMovie.score) {
            return acc + eachMovie.score
        } else {
            return acc
        }
    }, 0)

    return Math.round((sumScores * 100) / moviesArray.length) / 100
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((eachMovie) => {
        return eachMovie.genre.includes("Drama")
    })
    if (dramaMovies.length === 0) {
        return 0
    }
    const dramaScores = dramaMovies.reduce((acc, eachScore) => {
        return acc + eachScore.score
    }, 0)
    const dramaAverage = dramaScores / dramaMovies.length
    const dramaAverageRounded = dramaAverage.toFixed(2)
    const dramaAverageNumber = Number(dramaAverageRounded)
    return dramaAverageNumber
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    const releaseYearOrder = moviesArrayCopy.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year
        }
    })
    return releaseYearOrder
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    const moviesNamesList = moviesArrayCopy.map((eachTitle) => {
        return eachTitle.title
    })
    moviesNamesList.sort()
    if (moviesNamesList.length > 20) {
        return moviesNamesList.slice(0, 20)
    }

    return moviesNamesList
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }



