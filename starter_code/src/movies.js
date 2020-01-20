/* eslint no-restricted-globals: 'off' */
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let moviesOrder = [...movies]
    let newArray = []
    newArray = moviesOrder.sort((a, b) => a.year - b.year)
    //if (a.year == b.year) { moviesOrder.sort((a, b) => a.title - b.title) }


    return (newArray)
}





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arrDrama) {

    let dramaMovies = arrDrama.filter(mov => mov.genre.includes("Drama") && mov.director == "Steven Spielberg")
    console.log(dramaMovies)
    return dramaMovies.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(arrTitle) {

    let alphaMovies = [...movies]
    let twentyMovies = alphaMovies.slice(0, 20)
    let title = twentyMovies.map(eachMovies => eachMovies.title)

    let order = title.sort()
    return (title)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage() {
    copyRate = [...movies]
    let averageArray = []
    let ratesAv = copyRate.reduce((acc, mov) => acc + mov.rate, 0)
    let div = ratesAv / copyRate.length
    let math = div.toFixed(2)
    averageArray = math
    return (averageArray)
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate() {
    copyDrama = [...movies]
    dramaArray = []
    let averageDrama = copyDrama.reduce((acc, mov) => acc + mov.genre.includes("Drama"), 0)
    let dram = averageDrama / copyDrama.length
    dramaArray = dram
    return (dramaArray)
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
