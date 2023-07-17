// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map((eachDirector) => {
        return eachDirector.director
    })
    return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovies = moviesArray.filter((eachDrama) => {
        if (eachDrama.genre.includes('Drama') && eachDrama.director.includes('Steven Spielberg')) {
            return eachDrama
        }
    })
    return dramaMovies.length

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const sumScores = moviesArray.reduce((acc, eachScore) => {
        if (!eachScore.score) {
            eachScore.score = 0
        }

        return acc + eachScore.score
    }, 0)

    const average = parseFloat((sumScores / moviesArray.length).toFixed(2))
    if (moviesArray.length === 0) {
        return 0
    }
    else
        return average
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((eachDrama) => {
        if (eachDrama.genre.includes("Drama")) {
            return eachDrama
        }
    })
    const dramaScore = dramaMovies.reduce((acc, eachScore) => {
        return acc + eachScore.score
    }, 0)
    const average = parseFloat((dramaScore / dramaMovies.length).toFixed(2))
    if (dramaMovies.length === 0) {
        return 0
    }
    else
        return average
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    moviesArrayCopy.sort((a, b) => {

        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        }
        else {
            return a.year - b.year
        }
    })
    return moviesArrayCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    moviesArrayCopy.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    })
    const moviesMap = moviesArrayCopy.slice(0, 20).map((moviemap) => {
        return moviemap.title
    }
    )
    return moviesMap
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }