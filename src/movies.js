// Iteration 1: All directors? - Get the array of all directors.

// con esta de debajo la consola mostraba las peliculas pero no era valido por jasmine:
//const Alldirectors = movies.map(getAlldirectors => getAlldirectors.director)
//console.log(Alldirectors)

function getAllDirectors(movies){
    const directors = movies.map(elm => elm.director)
    return directors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const drama = movies.filter(elm => elm.director === "Steven Spielberg"
        && elm.genre.includes("Drama"))
    
    return drama.length    
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// copiado literalmente, pero creo que si lo entendí, no creo que lo hubiera 
//conseguido yo solo

function ratesAverage(movies) {
let average = movies.reduce((acc, elm) => {
    if (elm.rate) {
    return elm.rate + acc
    } else {
        return acc
     }
    },0)
    if (movies.length === 0) {
    return 0
    }
    return Math.round((average/movies.length)*100)/100
}
    
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramamovies = movies.filter(elm => elm.genre.includes("Drama"))

return ratesAverage(dramamovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const years = [...movies].sort((a, b) => {
    
        if (a.year === b.year){
            return a.title.localeCompare(b.title)
        } else {
         return a.year - b.year
            }
    })
    return years
    }
    
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const alphabetic = [...movies].sort((a, b) => a.title.localeCompare(b.title))
    const first20films = alphabetic.slice(0,20).map(movie =>movie.title)
return first20films
    }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
