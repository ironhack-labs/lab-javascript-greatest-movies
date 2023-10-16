// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray.map(eachMovie => {
        return eachMovie.director

    })

    return allDirectors

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const dramaSpielberg = moviesArray.filter(eachMovie => {

        return eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")

    })

    return dramaSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }
    else {
        const scores = moviesArray.reduce((acc, eachMovie) => {
            if (!eachMovie.score) {
                eachMovie.score = 0
            }
            return acc + eachMovie.score
        }, 0)
        const roundedAverage = scores / moviesArray.length


        return Number(roundedAverage.toFixed(2))
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramas = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes('Drama')
    })

    if (dramas.length === 0) {
        return 0
    }
    else {
        const dramaAverage = dramas.reduce((acc, eachMovie) => {
            return acc + eachMovie.score
        }, 0)
        const finalAverage = dramaAverage / dramas.length
        return Number(finalAverage.toFixed(2))
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    moviesArrayCopy.sort((movie1, movie2) => {
        if (movie1.year < movie2.year) {
            return -1
        }
        else if (movie1.year > movie2.year) {
            return 1
        }
        else if (movie1.year === movie2.year) {
            if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) {
                return -1
            }
            else if (movie1.title.toLowerCase() > movie2.title.toLowerCase()) {
                return 1
            }
            else { return 0 }
        }

    })
    return moviesArrayCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    moviesArrayCopy.sort((movie1, movie2) => {
        if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) {
            return -1
        }
        else if (movie1.title.toLowerCase() > movie2.title.toLowerCase()) {
            return 1
        }
        else { return 0 }
    })

    const titlesOnly = moviesArrayCopy.map(eachMovie => {
        return eachMovie.title
    }

    )
    return titlesOnly.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
