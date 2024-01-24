// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(eachMovie => {
        return eachMovie.director
    })
    const uniqueDirectorSet = new Set(allDirectors)
    const unifiedDirectors = Array.from(uniqueDirectorSet)
    return unifiedDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesSpielberg = moviesArray.filter(eachMovie => {
        return eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")
    })
    return moviesSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const allScores = moviesArray.reduce((acc, eachMovie) => {
        return acc + eachMovie.score
    }, 0)
    const scoresAverage = allScores / moviesArray.length
    const roundedAvg = scoresAverage.toFixed(2)
    return parseFloat(roundedAvg)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const allDramaMovies = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes("Drama")
    })
    if (allDramaMovies.length === 0) {
        return 0
    }
    const scoreSum = allDramaMovies.reduce((acc, eachMovie) => {
        return acc + eachMovie.score
    }, 0)
    const average = (scoreSum / allDramaMovies.length).toFixed(2)
    return parseFloat(average)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));
    const byYear = moviesArrayCopy.sort((movie1, movie2) => {
        if (movie1.year === movie2.year) {
            return movie1.title.localeCompare(movie2.title)
        }
        return movie1.year - movie2.year
    })
    return byYear

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
