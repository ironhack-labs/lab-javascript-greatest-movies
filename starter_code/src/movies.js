/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    let newArray = array.map(elm => {
        return elm
    })
    newArray.sort((a, b) => {
        if (a.year > b.year) return 1

        if (a.year < b.year) return -1

        if ((a.year == b.year) && (a.title > b.title)) return 1
        if ((a.year == b.year) && (a.title < b.title)) return -1
    })
    return newArray
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movieNum) {
    let dramaMovies = movieNum.filter(elm => elm.genre.includes("Drama") && elm.director === "Steven Spielberg")
    return dramaMovies.length
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesAlph) {
    let alphArray = moviesAlph.map(elm => {
        return elm.title
    })

    alphArray.sort((a, b) => {
        if (a > b) return 1
        if (a < b) return -1
        if (a == b) return 0
    })
    return alphArray.slice(0, 20)
}
g
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(avgRate) {

    if (avgRate.length === 0) {
        return 0;
    }
    let ratesArray = avgRate.reduce((acc, elm) => {
        return acc + elm.rate
    }, 0);
    return number(ratesArray / avgRate.length.toFixed(2))
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(dMovies) {
    let dramaMov = dMovies.filter(function (dMovie) {
        return dMovie.genre.includes("Drama")
    })
    if (dramaMov.length == 0) {
        return 0;
    } else {
        let totalDramaRates = dramaMov.reduce(function (acc, dramaMov) {
            return acc + dramaMov.rate;
        }, 0);
        return number(totalDramaRates / dramaMov.length.toFixed(2))
    }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes;

function turnHoursToMinutes(duration) {}
// BONUS Iteration: Best yearly rate average - Best yearly rate average