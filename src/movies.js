// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// function getAllDirectors (movies) {
//     return movies.map(function (movie) {
//         return movie.director
//     }) 
// } 

function getAllDirectors(movies) {
    return movies.map(movie => {
        return movie.director
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?



function howManyMovies(movies) {
    return movies.filter(movie => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    }).length
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (movies) {

    let allRatings = movies.map (movie => {
        return movie.rate
    })

    let totalRate = allRatings.reduce((acc, currentVal) => {
    return acc + currentVal;})

    let averageRate = totalRate / movies.length
    return averageRate
}

 

// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(movies) {

let dramaMovie = movies.filter(movie => {
    return movie.genre.includes("Drama") })

let dramaRates = dramaMovie.map (movie => {
    return movie.rate })

let totalDramaRates = dramaRates.reduce ((acc, currentVal) => {
    return acc + currentVal;})

let averageRateDrama = totalDramaRates / movies.length
return averageRateDrama

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)function rates

function orderByYear (movies) {

// let movieYears = movies.map (movie => {
//     movie.year })
    

 }




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
