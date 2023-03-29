// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(MoviesArray) {
    const directorNames = MoviesArray.map((movie) => {
        const directorName = movie.director

        return directorName
    })
    return directorNames
}

// Iteration 2: Steven Spielberg.The best ? - How many drama movies did STEVEN SPIELBERG direct ?

function howManyMovies(moviesArray) {
    const stevenDrama = moviesArray.filter((movie) => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    })
    return stevenDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const moviesScore = moviesArray.reduce((acc, movie) => {
        return acc + movie.score
    }, 0)

    let scoreAvr = moviesScore / moviesArray.length
    let scoreAvrRound = +scoreAvr.toFixed(2)
    return scoreAvrRound
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {

    const dramaMovie = moviesArray.filter((movie) => {
        return movie.genre.includes('Drama')
    })
    const dramaScore = dramaMovie.reduce((acc, movie) => {
        return acc + movie.score
    }, 0)

    let scoreAvr = dramaScore / dramaMovie.length


    let scoreAvrRound = +scoreAvr.toFixed(2)
    return scoreAvrRound
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray))

    const movieYears = moviesCopy.sort((a, b) =>
        a.year - b.year)

    return movieYears
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray))

    const movieTitle = moviesCopy.map((movie) => {
        return movie.title
    })
    const movieList = movieTitle.sort()
    return movieList.slice(0, 20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
