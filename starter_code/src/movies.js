/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

// let orderedByYear = movies.map(function(a,b) {return a.year - b.year})

let moviesCopy = movies.map(function(element) { return element } )

orderedByYear = moviesCopy.sort(function(a,b) {return a.year - b.year})

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

let howManyMovies = moviesCopy.filter(function(element) { return element.director === "Steven Spielberg" && element.genre.includes("Drama") } )

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

let mapTitle = moviesCopy.map(function(element) { return element.title } );
let orderedAlphabetically = mapTitle.sort().slice(0, 20)
 
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

let allRates = moviesCopy.map(function(element) {return element.rate} )
ratesNotRounded = allRates.reduce(function(acc, curr) {return acc + curr} )
let ratesRounded = (ratesNotRounded / allRates.length).toFixed(2)

// Iteration 5: Drama movies - Get the average of Drama Movies

let dramaMovies = moviesCopy.filter(function(element) { return element.genre.includes("Drama") } )
let averageDrama = dramaMovies.map(el => el.rate.toFixed(2))

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes



// BONUS Iteration: Best yearly rate average - Best yearly rate average


