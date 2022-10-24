// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => {
        return movie.director
    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(movie => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })
    return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    } else {
        const onlyNumbers = moviesArray.filter(movie => {
            return typeof movie.score == "number";
        })
        let ratingSum = onlyNumbers.reduce((acc, movie) => {
            return acc + movie.score
        }, 0)
        return parseFloat((ratingSum / moviesArray.length).toFixed(2))
    }

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => {
        return movie.genre.includes("Drama")
    })
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const clonedArray = JSON.parse(JSON.stringify(moviesArray));
    clonedArray.sort((a, b) => {
        if (a.year != b.year) {
            return a.year - b.year
        } else {
            return a.title.localeCompare(b.title)
        }

    })
    return clonedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitles = moviesArray.map(movie => {
        return movie.title
    })
    movieTitles.sort((a, b) => {
        return a.localeCompare(b)
    })
    return movieTitles.slice(0, 20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const durationTransformed = moviesArray.map(movie => {
        let totalMinutes = 0
        movie.duration.split(" ").forEach((duration) => {
            if (duration.includes("h")) {
                totalMinutes += parseInt(duration) * 60
            } else {
                totalMinutes += parseInt(duration)
            }
            return totalMinutes
        })
        return { ...movie, duration: totalMinutes }
    })
    return durationTransformed
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    if (moviesArray.length === 0) return null

    if (moviesArray.length === 1) return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`

    moviesArray.sort((a, b) => {
        return a.year - b.year
    })

    let currentYear = 0
    let biggestAverage = 0
    let bestYear = 0

    moviesArray.forEach((movie) => {
        let currentYear = movie.year
        let sameYearFilms = moviesArray.filter((films) => {
            return currentYear == films.year
        })
        if (scoresAverage(sameYearFilms) > biggestAverage) {
            biggestAverage = scoresAverage(sameYearFilms)
            bestYear = currentYear
        }
    })
    return `The best year was ${bestYear} with an average score of ${biggestAverage}`
}
