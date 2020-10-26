// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movArr) {

    const mappedArray = movArr.map(elm => elm.director)

    let uniqueArray = mappedArray.filter((elm1, index, elm2) => elm2.indexOf(elm1) === index)

    return uniqueArray
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(howManyArr) {

    const filteredArr = howManyArr.filter(elm => elm.director.toLowerCase() === "steven spielberg" && elm.genre.includes('Drama'))

    return filteredArr.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(ratesArr) {

    if (ratesArr.length === 0) {

        return 0

    } else {

        const ratesSum = ratesArr.reduce((acc, elm) => {

            if (typeof elm.rate === 'number') {

                return acc + elm.rate

            } else {

                return acc + 0
            }
        }, 0)

        return Math.round((ratesSum / ratesArr.length) * 100) / 100
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(dramaMovArr) {

    const moviesList = dramaMovArr.filter(elm => elm.genre.includes('Drama'))

    return ratesAverage(moviesList)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(yearMovArr) {

    const arrayCopy = [...yearMovArr]

    const sortedArray = arrayCopy.sort((movie1, movie2) => {

        if (movie1.year === movie2.year) {

            return movie1.title.localeCompare(movie2.title)

        } else {

            return movie1.year - movie2.year

        }
    })

    return sortedArray

}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(alphArr) {

    const copyArr = [...alphArr]

    const sortedArray = copyArr.sort((elm1, elm2) => {
        return elm1.title.localeCompare(elm2.title)
    })

    const only20 = sortedArray.slice(0, 20).map(elm => elm.title)
    return only20
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(hoursArr) {

    const copied = [...hoursArr]

    const duration = copied.map(elm => {
        const hours = parseInt(elm.duration.substring(0, 1) * 60)
        const minutes = parseInt(elm.duration.substring(3, 5))
        elm.duration = minutes + hours
        return elm
    })

    return duration
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(bestYearArr) {

    const copiedArr = [...bestYearArr]

    if (copiedArr.length > 0) {

    } else {

        return null

    }
}