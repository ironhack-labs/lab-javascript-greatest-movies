// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(function (movies) {
        return movies.director
    })
    return directors 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenSpielberg = moviesArray.filter(function(director) {
        if (director.director === "Steven Spielberg" && director.genre.includes("Drama")) {
            return true;
        } else {
            return false
        }
        })
        return stevenSpielberg.length
}
    
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const averageScore = moviesArray.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.score / moviesArray.length
    }, 0)
    return Math.round(averageScore * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovie = moviesArray.filter(function(dramaScore) {
        return dramaScore.genre.includes("Drama")
    })
    if (dramaMovie.length === 0) {
        return 0
    }
    const averageScore = dramaMovie.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.score
    }, 0)
    const totalScore = averageScore / dramaMovie.length
    return Math.round(totalScore * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
