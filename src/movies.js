/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    const newArray = [...array].sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1)
    return newArray
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
    const spielMovies = array.filter(y =>
        y.director == "Steven Spielberg" && y.genre.includes("Drama")
    )
    return spielMovies.length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    const orderedByTitle = [...array].sort((a, b) => a.title < b.title ? -1 : 1);
    let onlyTitle = orderedByTitle.slice(0, 20).map(function (a) {
        return a.title
    })
    return onlyTitle

}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

function ratesAverage(array) {
    if (array.length == 0) return 0
    const noNulls = array.filter(function (e) {
        return e.rate
    })
    const sumOfAllRates = noNulls.reduce(function (sum, movie) {
        return sum + movie.rate
    }, 0);
    return roundToTwo(sumOfAllRates / array.length)
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    const dramaMovies = array.filter(y =>
        y.genre.includes("Drama")
    )
    if (dramaMovies.length === 0) return 0
    const averageDrama = dramaMovies.reduce(function (sum, movie) {
        return sum + movie.rate
    }, 0)
    return roundToTwo(averageDrama / dramaMovies.length)
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
    return array.map(movie => {
        const originalDuration = movie.duration
        let duration = 0
        for (let value of originalDuration.split(' ')) {
            const hour = parseInt(value)
            if (value.includes('h')) {
                duration += hour * 60
            } else if (value.includes('min')) {
                duration += hour
            }
        }
        return {
            ...movie,
            duration
        }
    })
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average