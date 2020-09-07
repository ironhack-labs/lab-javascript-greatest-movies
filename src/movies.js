// Iteration 1: All directors? - Get the array of all directors.

//let getAllDirectors = (movies) => {
function getAllDirectors(movies) {
    return movies.map(movie => movie.director)
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// let howManyMovies = (movies) => {}
function howManyMovies(movies) {

    let spielbergDramaMovies = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))

    return spielbergDramaMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0
    }

let filteredList = movies.filter(movie => movie.rate != undefined)
    let sum = filteredList.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.rate
    }, 0)
    let average = sum / movies.length
    return Math.round(average * 100)/100
}

// let sum = 0
//movie.forEach(movie => {
//sum += movie.rate })


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"))
    return ratesAverage(dramaMovies)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let duplicate = movies.slice()
    let sortedArray = duplicate.sort((movieA, movieB) =>
    {
        if (movieA.year === movieB.year) {
            if (movieA.title < movieB.title) { return -1; }
            if (movieA.title > movieB.title) { return -1; }
        } else {
            return movieA.year - movieB.year
        }
    })
    return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
   let title = movies.slice().map(movie => movie.title)
   
    let sortedArray = title.sort((movieA, movieB) => {
    
    if (movieA < movieB) { return -1; }
    if (movieA > movieB) { return 1; }
    })
    return sortedArray.slice(0,20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
