/* eslint no-restricted-globals: 'off' */


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let moviesArray = [...movies]
    moviesArray.sort((a, b) => {
        if (a.year < b.year) {
            return -1
        }
        if (a.year === b.year && a.title < b.title) {
            return -1
        }
        return 1
    })
    return moviesArray
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(moviesArray) {
    return moviesArray.filter((moviesArray) => {
        return moviesArray.director == 'Steven Spielberg' && moviesArray.genre.indexOf('Drama') != -1
    }).length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newMovies = [...moviesArray]
    newMovies.sort((a, b) => {
        if (a.title < b.title) {
            return -1
        }
        return 1
    })
    let twenty = []
    let limit = 20
    if (newMovies.length < 20) {
        limit = newMovies.length
    }
    for (let i = 0; i < limit; i++) {
        twenty.push(newMovies[i].title)
    }
    return twenty
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArray) {
    let sum = moviesArray.reduce((elm, value) => {
        return elm + (value.rate)
    }, 0)
    let average = sum / moviesArray.length

    return average
}




// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
    let dramaFilter = moviesArray.filter(elm => {
        return elm.genre.includes("Drama")
    })
    if (isNaN(ratesAverage(dramaFilter))) {
        return 0
    }
    let average = ratesAverage(dramaFilter)
    return average
}



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    let hours = [...movies]
    let hoursArray = []
    hours.filter(elm => elm.duration)
    return hoursArray
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(moviesArray) {

}
