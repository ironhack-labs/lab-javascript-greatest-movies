/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    const arrayCopy = [...array]
    arrayCopy.sort((a, b) => {
        if (a.title < b.title) {
            return -1
        } else if (a.title > b.title) {
            return 1
        } else {
            return 0
        }
    })
    arrayCopy.sort((a, b) => a.year - b.year)
    //console.log(arrayCopy)
    return arrayCopy
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    if (array.length === 0) {
        return 0
    }
    const spielbergArray = array.filter(elm => {
        if (elm.director.toLowerCase().includes("steven spielberg") && elm.genre.includes("Drama")) {
            return true
        }
    })
    return spielbergArray.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    arrayCopy = [...array]
    arrayCopy.sort((a, b) => {
        if (a.title < b.title) {
            return -1
        } else if (a.title > b.title) {
            return 1
        } else {
            return 0
        }
    })
    const onlyTitles = arrayCopy.map(elm => elm.title)
    if (onlyTitles < 20) {
        return onlyTitles
    } else {
        return onlyTitles.slice(0, 20)
    }
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    let average
    if (array.length === 0) {
        return 0
    }
    const ratedArray = array.filter(elm => elm.rate)
    const rateSum = ratedArray.reduce((acc, elm) => {
        const movieRate = +elm.rate
        return acc + movieRate
    }, 0)
    average = rateSum / array.length
    return +average.toFixed(2)
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let average
    const dramaArray = array.filter(elm => elm.genre.includes('Drama'))
    const rateSum = dramaArray.reduce((acc, elm) => {
        const dramaRate = +elm.rate
        return acc + dramaRate
    }, 0)
    average = rateSum / dramaArray.length
    if (dramaArray.length === 0) {
        return 0
    }
    return +average.toFixed(2)

}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    /*arrayCopy = [...array]
    totalMinutes = arrayCopy.map(elm => {
        splittedDuration = elm.duration.split(" ")
        //console.log(splittedDuration)
        if (splittedDuration[0].includes("h")) {
            let hours = splittedDuration[0].slice(0, indexOf("h")) * 60
            console.log(hours)
        }
        let hours = splittedDuration.slice(0, indexOf("h"))*60
        console.log(hours)
    })
 */
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(array) {
    arrayCopy = [...array]
    const moviesArray = arrayCopy.map(elm => {
        const arrResult = {
            year: elm.year,
            rate: elm.rate
        }
        return arrResult
    })
    if (moviesArray.length === 0) {
        return null
    } else if (moviesArray.length === 1) {
        sentence = `The best year was ${moviesArray[0].year} with an average rate of ${moviesArray[0].rate}`
        return sentence
    }
}