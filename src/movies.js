// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    const directors = movies.map(elm => elm.director)
    return directors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const howManyMovies = movies.filter(elm => elm.genre.includes('Drama') && elm.director === "Steven Spielberg")
    return howManyMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    const ratesAverage = movies.reduce((acc, elm) => acc + elm.rate, 0)
    return ratesAverage / movies.length
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramm = movies.filter(elm => elm.genre.includes('Drama') && elm.genre.length === 1)
    return dramm.length / movies.length

    let rataDrama = dramm.reduce((acc, elm) => acc + elm.rate, 0)
    //return rataDrama

}
/*const dramaMoviesRate = movies.genre.reduce((acc, elm) => acc + elm.drama, 0)
const genreMovie = (dramaMoviesRate / movies.genre.length)
const genreDrama = (genremovie).toFixed(2)
return dramaMoviesRate*/

console.log(dramaMoviesRate(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const orderByYearReal = [...movies]
    orderByYearReal.sort((a, b) => (a.year - b.year))

    return orderByYearReal

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const orderAlphabeticallyReal = [...movies]
    orderAlphabeticallyReal.sort((a, b) => (a.title - b.title))
    if (orderAlphabeticallyReal.length > 20) {
        orderAlphabeticallyReal.slice(0, 20)
    }


    return orderAlphabeticallyReal
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
