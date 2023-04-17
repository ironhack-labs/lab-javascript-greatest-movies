// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)? 

function getAllDirectors(moviesArray) {
    let directors = moviesArray.map((movie) => {
        return movie.director
    })

    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let moviesForSpielberg = moviesArray.filter((movie) => {
        return movie.director === 'Steven Spielberg'
    })
    let dramasForSpielberg = moviesForSpielberg.filter((movie) => {
        return movie.genre.includes("Drama")
    })

    return dramasForSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const sumScore = moviesArray.reduce((acc, eachMovie) => {
        if (!eachMovie.score) {
            eachMovie.score = 0
        }
        return acc + eachMovie.score
    }, 0)

    return +(sumScore / moviesArray.length).toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let moviesDrama = moviesArray.filter((movie) => {
        return movie.genre.includes("Drama")
    })

    if (moviesDrama.length === 0) {
        return 0;
    }

    let scoreDramaScore = moviesDrama.reduce((acc, eachMovie) => {
        return acc + eachMovie.score
    }, 0)
    return +(scoreDramaScore / moviesDrama.length).toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesArrayDeepCopy = JSON.parse(JSON.stringify(moviesArray))
    let moviesAscend = moviesArrayDeepCopy.sort(function (a, b) {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title)
        }
    })
    return moviesAscend
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesArrayDeepCopy = JSON.parse(JSON.stringify(moviesArray))
    let arrayTitles = moviesArrayDeepCopy.map((movie) => {
        return movie.title
    })
    let sortedTitles = arrayTitles.sort((a, b) => {
        return a.localeCompare(b);
    })
    let limitedTitles = sortedTitles.slice(0, 20);

    return limitedTitles
}

orderAlphabetically(movies)
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
