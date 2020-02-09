/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    let copiedArray = array.slice()
    let sortedArray = copiedArray.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        } else {
            return -1;
        }
    })
    return sortedArray;
}


// do it again
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
    let dramaMovies = array.filter(movie => movie.genre.includes('Drama'))
    let stevenDramaMovies = dramaMovies.filter(movie => movie.director == 'Steven Spielberg')
    if (!dramaMovies.length) {
        return dramaMovies.length;
    }
    return stevenDramaMovies.length
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    let copiedArray = array.slice()
    let sortedArrayAlpha = copiedArray.map(movie => movie.title).sort()
    let firstElements = sortedArrayAlpha.slice(0, 20)
    return firstElements;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    let moviesRatesArr = array.filter(movie => movie.rate)
    let averageMoviesRatesArr = moviesRatesArr.reduce((sum, el) =>
        sum + el.rate, 0
    ) / array.length
    if (!moviesRatesArr.length) {
        return moviesRatesArr.length;
    }
    let averageRoundedTwoDecimals = Math.round(averageMoviesRatesArr * 100) / 100
    return averageRoundedTwoDecimals
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    let dramaMovies = array.filter(movie =>
        (movie.genre == 'Drama')
    )
    if (!dramaMovies.length) {
        return dramaMovies.length;
    }
    let sumDramaMoviesRates = dramaMovies.reduce((sum, el) => sum + el.rate, 0) / dramaMovies.length
    return Math.round(sumDramaMoviesRates * 100) / 100
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


// BONUS Iteration: Best yearly rate average - Best yearly rate average