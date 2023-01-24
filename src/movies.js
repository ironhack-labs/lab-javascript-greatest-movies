// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray.map((elm) => {
        return elm.director
    })

    return allDirectors

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const spielbergDramaMovies = moviesArray.filter((elm) => {
        return elm.genre.includes('Drama') && elm.director === 'Steven Spielberg'
    })

    const numberOfSpielberDramaMovies = spielbergDramaMovies.length

    return numberOfSpielberDramaMovies
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length) {

        const allScores = moviesArray.reduce((acc, elm) => {
            if (!elm.score) {
                elm.score = 0
            }
            return acc + elm.score
        }, 0)

        const avgScore = allScores / moviesArray.length

        return Number(avgScore.toFixed(2))
    }

    return 0

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(elm => {
        return elm.genre.includes('Drama')
    })

    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesByYear = JSON.parse(JSON.stringify(moviesArray))

    moviesByYear.sort((a, b) => {
        return a.year - b.year || a.title.localeCompare(b.title)
    })

    return moviesByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    moviesArray.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })

    const moviesByAlphabeticalOrder = []


    moviesArray.map(elm => {
        if (moviesArray.indexOf(elm) < 20) {
            moviesByAlphabeticalOrder.push(elm.title)
        }
    })


    return moviesByAlphabeticalOrder
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const moviesTime = JSON.parse(JSON.stringify(moviesArray))

    moviesTime.map(elm => {

        const durationInNumber = 0
        if (elm.duration.includes("h") && elm.duration.includes("min")) {
            elm.duration = parseInt(elm.duration.substr(0, 1)) * 60 + parseInt(elm.duration.substr(3, 5))
        }
        else if (elm.duration.includes("h")) {
            elm.duration = parseInt(elm.duration.substr(0, 1)) * 60
        }
        else if (elm.duration.includes("min")) {
            elm.duration = parseInt(elm.duration.substr(-5, 2))
        }

    })

    return moviesTime
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    const arrayCopy = JSON.parse(JSON.stringify(moviesArray))

    if (arrayCopy.length) {

        // const years = []
        // const yearRates = []
        // arrayCopy.map(elm => {

        //     if (!years.includes(elm.year)) {
        //         years.push(elm.year)
        //         yearRates.push({
        //             year: elm.year,
        //             rates: 
        //         })
        //     } else {

        //     }

        // })

    }

    return null
}
