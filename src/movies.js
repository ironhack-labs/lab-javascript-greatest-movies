// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const { stringify } = require("querystring")

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray.map(eachMovie => {

        return eachMovie.director

    })


    return allDirectors

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const stevenSpielberMovies = moviesArray.filter(eachMovie => {
        return eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")
    })


    if (stevenSpielberMovies.length > 0) {
        return stevenSpielberMovies.length
    } else {
        return 0
    }


}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    } else {
        const sum = moviesArray.reduce((acc, eachNumber) => {
            if (typeof eachNumber.score != "number") {
                eachNumber.score = 0
            }
            return acc + eachNumber.score

        }, 0)

        const avg = sum / moviesArray.length
        return Number(avg.toFixed(2))
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((eachMovie) => {
        return eachMovie.genre.includes("Drama")
    })

    const sumDrama = dramaMovies.reduce((acc, eachMovie) => {
        return acc + eachMovie.score
    }, 0)

    if (dramaMovies.length === 0) {
        return 0
    } else {
        const avg = sumDrama / dramaMovies.length
        return Number(avg.toFixed(2))
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copiedArray = JSON.parse(JSON.stringify(moviesArray))
    const orderedArray = copiedArray.sort((a, b) => {
        if (a.year > b.year) {
            return 1
        } else {
            return -1
        }
    })

    return orderedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copiedArray = JSON.parse(JSON.stringify(moviesArray))
    console.log(copiedArray)


    const titleArray = copiedArray.map(eachMovie => {
        return eachMovie.title
    })

    const orderedArray = titleArray.sort()

    if (orderedArray.length > 20) {
        const smallArray = orderedArray.splice(0, 20)
        return smallArray
    } else {
        return orderedArray
    }

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const copiedArray = JSON.parse(JSON.stringify(moviesArray))

    const minutedArray = copiedArray.forEach(eachMovie => {
        let hours = eachMovie.duration.split('h ')
        hours = hours.substring(hours.length - 2, hours.length - 1)
        let minutes = hours[0] * 60 + hours[1]
        eachMovie.duration = minutes
        return eachMovie
    });

    console.log(minutedArray.duration)

    const sortedArray = minutedArray.sort((a, b) => {
        if (a.duration > b.duration) {
            return 1
        } else {
            -1
        }
    })

    return sortedArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    const copiedArray = JSON.parse(JSON.stringify(moviesArray))

    const arrayYears = copiedArray.reduce((acc, eachMovie) => {
        const year = eachMovie.year
        if (!acc.year) {
            acc.year = []
        } else {
            let scoreYear = 0
            acc.year.push(moviesArray)
            scoreYear += acc.score
            return acc
        }
    })




}
