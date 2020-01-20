/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
    let newArray = [...arr].sort ((a, b) => {
     if (a.year > b.year) return 1
     else return -1;
 })
 return newArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    let howMany = arr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama") !== -1);
    return howMany.length;
}   

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
let orderAlphabetically = [...arr].sort ((a, b) => {
    if (a.title > b.title) return 1;
    else return -1;
})
orderAlphabetically.splice(20)
return orderAlphabetically.map(movie => movie.title)

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
if (arr.length > 0){
let ratesFilter = arr.filter (e => e.rate);
let rates = ratesFilter.reduce ((ac, cu) => ac += cu.rate, 0) / arr.length;
return +rates.toFixed(2);
} return 0
}
//Ej: let totalGrams = beer.ingredients.hops.reduce((ac, hop) => ac += hop.amount.value, acumulatorInitialValue)

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
    let dramaMovies = [...arr].filter (e => e.genre.indexOf("Drama") !== -1);
    if (dramaMovies.length > 0) {
    let dramaRates = dramaMovies.reduce ((ac, cu) => ac += cu.rate, 0) / dramaMovies.length;
    return +dramaRates.toFixed(2);
    } return 0
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
}



// BONUS Iteration: Best yearly rate average - Best yearly rate average

