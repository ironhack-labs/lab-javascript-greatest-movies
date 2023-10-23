// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielberg = moviesArray.filter(movie => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    })
    return spielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const totalScore = moviesArray.reduce((sum, movie) => {
        if (movie.score !== undefined) {
            return sum + movie.score
        } else {
            return sum
        }
    }, 0)

    const average = (totalScore/moviesArray.length)
    const averageRounded = Number(average.toFixed(2))
    return averageRounded
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => {
        return movie.genre.includes('Drama')
    });

    if (dramaMovies.length === 0) {
        return 0
    };

    const totalDrama = dramaMovies.reduce((sum, movie) => {
        if (movie.score !== undefined) {
            return sum + movie.score
        } else {
            return sum
        }
    }, 0)

    const averageDrama = (totalDrama/dramaMovies.length)
    const averageDramaRounded = Number(averageDrama.toFixed(2))
    return averageDramaRounded
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const cloneArray = [...moviesArray]
    cloneArray.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year
        }
    })
    return cloneArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titleOnly = moviesArray.map(movie => movie.title)
    const cloneArray = [...titleOnly]
    cloneArray.sort((a, b) => a.localeCompare(b))
    if (cloneArray.length > 20) {
        return cloneArray.slice(0, 20)
    } else {
        return cloneArray
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
