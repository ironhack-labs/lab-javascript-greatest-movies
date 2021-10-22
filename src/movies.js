// Iteration 1: All directors? - Get the array of all directors.
// import { movies } from "./movies"
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    let allDirectors = []

    movies.map(function (movie) {
        return allDirectors.push(movie.director)
    })

    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const spielberg = movies.filter(function (movie) {
        return (
            movie.director === "Steven Spielberg" &&
            movie.genre.includes("Drama")
        )
    })

    return spielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length === 0) {
        return 0
    }

    let scores = movies.map(function (movie) {
        if (!movie.score) {
            return 0
        }

        return movie.score
    })

    let totalScore = scores.reduce(function (acc, value) {
        return acc + value
    })

    return Math.round((totalScore / movies.length) * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const drama = movies.filter(function (movie) {
        return movie.genre.includes("Drama")
    })

    if (drama.length === 0) {
        return 0
    }

    const filteredDrama = drama
        .map(function (dramaMovie) {
            return dramaMovie.score
        })
        .reduce(function (acc, val) {
            return acc + val
        })

    return Math.round((filteredDrama / drama.length) * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const moviesSorted = [...movies].sort(function (a, b) {
        return a.year - b.year || a.title.localeCompare(b.title)
    })

    return moviesSorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const moviesSorted = [...movies]
        .sort(function (a, b) {
            return a.title.localeCompare(b.title)
        })
        .map(function (movie) {
            return movie.title
        })
        .slice(0, 20)

    return moviesSorted
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    const newTimes = [...movies].map(movie => {
        const duration = movie.duration.split(" ")

        let minutes = 0

        for (time of duration) {
            time.includes("h")
                ? (minutes += parseInt(time) * 60)
                : (minutes += parseInt(time))
        }

        return {
            ...movie,
            duration: minutes,
        }
    })

    return newTimes
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
    if (movies.length === 0) {
        return null
    }

    const movieYear = movies.map(function (movie) {
        console.log(movie.year)
        return movie.year
    })

    const movieScore = movies.map(function (movie) {
        return movie.score
    })

    if (movies.length === 1) {
        return `The best year was ${movieYear} with an average score of ${movieScore}`
    }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
    module.exports = {
        getAllDirectors,
        howManyMovies,
        scoresAverage,
        dramaMoviesScore,
        orderByYear,
        orderAlphabetically,
        turnHoursToMinutes,
        bestYearAvg,
    }
}
