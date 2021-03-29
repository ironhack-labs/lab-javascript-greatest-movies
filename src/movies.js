// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(allMovies) {
    const result = allMovies.map(elm => {
        return elm.director
    })
    return result
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(allMovies) {
    const result = allMovies.filter(elm => {
        if (elm.director === 'Steven Spielberg' && elm.genre.includes('Drama')) {
            return true
        }
    })
    return result.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(allMovies) {
    if (allMovies.length === 0) {
        return 0
    }
    const sumRate = allMovies.reduce((acc, elm) => {

        if (typeof elm.rate != 'number') {
            return acc
        }
        return acc + elm.rate


    }, 0)
    return parseFloat((sumRate / allMovies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(allMovies) {
    const dramaMovies = allMovies.filter(elm => {
        if (elm.genre.includes('Drama')) {
            return true
        }
    })
    return ratesAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(allMovies) {
    const moviesByear = JSON.parse(JSON.stringify(allMovies))
    moviesByear.sort(function (a, b) {
        if (a.title >= b.title) return 1;
        if (a.title <= b.title) return -1
    })
    moviesByear.sort(((a, b) => a.year - b.year));




    return moviesByear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(allMovies) {
    const moviesByTitle = JSON.parse(JSON.stringify(allMovies))
    moviesByTitle.sort(function (a, b) {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1
    })

    const print = moviesByTitle.map(elm => {
        return elm.title
    })

    return print.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
