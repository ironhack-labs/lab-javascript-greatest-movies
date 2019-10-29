/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const newYearOrder = [...movies]

    newYearOrder.sort((a, b) => {

        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year
        }
    })
    return newYearOrder
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    const dramaSpielberg = movies.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama"))
    return dramaSpielberg.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let alphaOrder = movies.map(elm => elm.title).sort((a, b) => a.localeCompare(b))
    const top20Alpha = alphaOrder.splice(0, 20)
    return top20Alpha;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) return 0
    const rateMovie = movies.filter(elm => elm.rate).reduce((acc, elm) => acc + elm.rate, 0)
    let result = rateMovie / movies.length
    return +result.toFixed(2);
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramaMov = movies.filter(elm => elm.genre.includes("Drama"))
    if (dramaMov < 1) return 0
    let dramaRate = dramaMov.filter(elm => elm.rate).reduce((acc, elm) => acc + elm.rate, 0)
    let finalRate = dramaRate / dramaMov.length
    return +finalRate.toFixed(2)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average