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

    const spielbergDramaMovies = moviesArray.filter(eachMovie => {
        return eachMovie.director === "Steven Spielberg" && eachMovie.genre.indexOf('Drama') >= 0
    })

    return spielbergDramaMovies.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (!moviesArray.length) {
        return 0
    }

    const totalSumScores = moviesArray.reduce((acc, eachMovie) => {

        if (!eachMovie.score) {
            return acc
        }
        return acc + eachMovie.score
    }, 0)

    let average = totalSumScores / moviesArray.length
    average = Math.round(average * 100) / 100

    return average
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {


    const dramaMovies = moviesArray.filter(eachMovie => {
        return eachMovie.genre.indexOf('Drama') >= 0
    })

    if (!dramaMovies.length) {
        return 0
    }

    const totalSumScores = dramaMovies.reduce((acc, eachMovie) => {

        if (!eachMovie.score) {
            return acc
        }
        return acc + eachMovie.score
    }, 0)

    let average = totalSumScores / dramaMovies.length
    average = Math.round(average * 100) / 100

    return average

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesArrayCopy = moviesArray.slice()

    const moviesByYear = moviesArrayCopy.sort((a, b) => {
        if (a.year < b.year || (a.year === b.year && a.title < b.title)) {
            return -1
        }
        if (a.year > b.year) {
            return 1
        }
        if (a.year === b.year && a.title === b.title) {
            return 0
        }
    })


    return moviesByYear

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const moviesArrayCopy = moviesArray.slice()

    moviesArrayCopy.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });


    if (moviesArrayCopy.length < 20) {

        let first20MoviesByAlphabeticalOrder = []

        moviesArrayCopy.forEach(eachMovie => {
            let titleOfMovie = eachMovie.title
            first20MoviesByAlphabeticalOrder.push(titleOfMovie)
        })

        return first20MoviesByAlphabeticalOrder

    }

    if (moviesArrayCopy.length >= 20) {

        let first20MoviesByAlphabeticalOrder = []


        for (let i = 0; i < 20; i++) {
            let titleOfMovie = moviesArrayCopy[i].title
            first20MoviesByAlphabeticalOrder.push(titleOfMovie)
        }

        return first20MoviesByAlphabeticalOrder
    }


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const newMoviesArray = moviesArray.slice()

    newMoviesArray.forEach(eachMovie => {

        if (eachMovie.duration.length === 8) {

            const newDuration = eachMovie.duration[0] * 60 + eachMovie.duration.substring(3, 5) * 1
            eachMovie.duration = newDuration

        }

        if (eachMovie.duration.length < 8) {
            const newDuration = eachMovie.duration[0] * 60 + eachMovie.duration.substring(3, 4) * 1
            eachMovie.duration = newDuration
        }

        if (eachMovie.duration.length === 2) {
            const newDuration = eachMovie.duration[0] * 60
            eachMovie.duration = newDuration
        }


    })


    return newMoviesArray

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {


}
