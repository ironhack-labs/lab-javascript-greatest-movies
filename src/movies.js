// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map((movie) => movie.director)
    let filteredArray = []
    newArray.forEach((director) => {
        if (!filteredArray.includes(director)) {
          filteredArray.push(director)
        }
    })
    return filteredArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const newArray = moviesArray.filter((movie) => {
        return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    })
    return newArray.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const filteredArray = moviesArray.filter(movie => movie.score)
    const sumOfScores = filteredArray.reduce((acc, movie) => {
        return acc += movie.score
    },0)
    return (Number((sumOfScores / moviesArray.length).toFixed(2)))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"))
    if (dramaMovies.length === 0) {
        return 0
    }
    const dramaMoviesScores = dramaMovies.reduce((acc, movie) => {
        return acc += movie.score
    },0)
    return (Number((dramaMoviesScores / dramaMovies.length).toFixed(2)))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
