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
    const spielbergDramaMovies = moviesArray.filter((eachMovie) => {
        return eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")
    })
    return spielbergDramaMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const bestMoviesSum = moviesArray.reduce((acc, eachMovie) => {

        return acc + eachMovie.score
    }, 0)
    return Number((bestMoviesSum / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((eachMovie) => {
        return eachMovie.genre.includes("Drama")
    })
    if (dramaMovies.length === 0) {
        return 0
    }
    const dramaMoviesSum = dramaMovies.reduce((acc, eachDramaMovie) => {
        return acc + eachDramaMovie.score
    }, 0)
    return Number((dramaMoviesSum / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray))
    const moviesByYearName = moviesCopy.sort((a, b) => {
        if (a.year > b.year) {
            return 1
        }
        if (a.year < b.year) {
            return -1
        }
        else {
            if (a.title > b.title) {
                return 1
            }
            if (a.title < b.title) {
                return -1
            }
            else { return 0 }
        }
    })

    return moviesByYearName
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray))
    const moviesTitles = moviesCopy.map((eachTitle) => {
        return eachTitle.title
    })
    return moviesTitles.sort().slice(0, 20)
}





// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray))
    const moviesDurationNumber = moviesCopy.map((eachMovie) => {
        const numberDuration = eachMovie.duration.replace(/[^\d]/g, '')
        return numberDuration
    })

    return moviesDurationNumber

}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null
    }
    const bestMoviesSum = moviesArray.reduce((acc, eachMovie) => {

        return acc + eachMovie.score
    }, 0)
    return Number((bestMoviesSum / moviesArray.length).toFixed(2))
}

