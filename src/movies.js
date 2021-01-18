// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
    const onlyDirectors = array.map((elm) => {
        return elm.director
    })
    return onlyDirectors
}

console.log(getAllDirectors(movies))


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    const spielbergDramas = array.filter(elm => {
        if (elm.director.includes('Spielberg') && elm.genre.includes('Drama')) {
            return true
        } else {
            return 0
        }
    })
    return spielbergDramas.length
}
howManyMovies(movies)


console.log(howManyMovies(movies))

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (array.length === 0) {
        return 0
    }
    const totalRates = array.reduce((acc, elm) => {
        return acc + elm.rate
    }, 0)

    return Number(parseFloat(totalRates / array.length).toFixed(2))

}

ratesAverage(movies)


console.log(ratesAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    const dramas = array.filter(elm => {
        return elm.genre.includes('Drama')
    })

    return ratesAverage(dramas)
}

console.log(dramaMoviesRate(movies))


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    if (array.length === 1) {
        return array;
    }

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    const movieList = array.map((elm) => {
        return elm.title
    })
    return movieList
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average