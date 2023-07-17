// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const onlyDirectors = moviesArray.map(function (eachMovie) {
        return eachMovie.director
    });
    return onlyDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const onlySpielbergDrama = moviesArray.filter(function (eachMovie) {
        return eachMovie.director.includes("Steven Spielberg") && eachMovie.genre.includes("Drama")
    })

    return onlySpielbergDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const totalScore = moviesArray.reduce(function (acc, eachMovie) {
        if (!eachMovie.score) {
            eachMovie.score = 0
        }
        return acc + eachMovie.score
    }, 0)
    // console.log(totalScore)
    const averageScore = totalScore / moviesArray.length
    // console.log(averageScore.toFixed(2))
    return Number(averageScore.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const totalDramaMovies = moviesArray.filter(function (eachMovie) {
        return eachMovie.genre.includes("Drama")
    })
    if (totalDramaMovies.length === 0) {
        return 0
    }
    const sumDrama = totalDramaMovies.reduce(function (acc, eachMovie) {
        if (!eachMovie.score) {
            eachMovie.score = 0
        }
        return acc + eachMovie.score
    }, 0)
    const averageScore = sumDrama / totalDramaMovies.length
    return Number(averageScore.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
