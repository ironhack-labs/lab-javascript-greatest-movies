/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

let moviesCopy = [...movies]

function orderByYear(moviesArray) {
    let sortYear = moviesArray.sort(function (a, b) {
        return a.year - b.year || a.title.localeCompare(b.title)
    })
    return [...sortYear]
}
orderByYear(moviesCopy)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    const hasDrama = movies.filter(elm => elm.genre.includes("Drama") && elm.director.includes("Steven Spielberg"))
    return hasDrama.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies) {
    let orderedMovies = movies.map(elm => elm.title).sort((a, b) => a.localeCompare(b))
    let firstTwenty = orderedMovies.splice(0, 20)
    return firstTwenty
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesToRate) {

    if (moviesToRate.length == 0) {
        return 0
    }
    else {
        const rate = moviesToRate.filter(elm => elm.rate).reduce((acc, elm) => acc + elm.rate, 0)
        const averageRate = rate / moviesToRate.length
        const averageWithDecimals = averageRate.toFixed(2)
        return +averageWithDecimals

    }
}

// Iteration 5: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(moviesToRate) {

    let dramaMovie = moviesToRate.filter(elm => elm.genre.includes("Drama"))

    if (dramaMovie.length === 0) {
        return 0
    }
    else {
        let accRates = dramaMovie.reduce((acc, elm) => acc + elm.rate, 0)
        let withDecimals = (accRates / dramaMovie.length).toFixed(2)
        return +withDecimals
    }
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

/*

Me lo copie de Luis para estudiarlo, no lo resolvi yo

function turnHoursToMinutes(theMovies) {
    let h = 0
    let m = 0
    let minutes = theMovies.map(element => {
        if (element.duration.includes("h")) {
            h = Number(element.duration[0])
        }
        if (element.duration.includes("min")) {
            m = Number(element.duration.slice(element.duration.length - 5, element.duration.length - 3))
        }
        let minutes = h * 60 + m
        return {
            ...element,
            duration: minutes
        }
    })
    return minutes
}

*/

// BONUS Iteration: Best yearly rate average - Best yearly rate average


