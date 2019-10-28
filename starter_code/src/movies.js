/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

let moviesCopy = [...movies]

function orderByYear(moviesArray) {
    let sortYear = moviesArray.sort(function(a, b) { 
       return a.year - b.year || a.title.localeCompare(b.title)
    })

    return [...sortYear]
}

orderByYear(moviesCopy)

/*
function orderByYear(movies) {
    let moviesorder = [...movies];
    const orderByYear = moviesorder.sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      } else {
        return a.year - b.year;
      }
    });
    return orderByYear;
   }
   console.log(orderByYear);

*/


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    let dramaSpielberg = movies.filter(elm => elm.genre.includes("Drama") && elm.director.includes("Steven Spielberg"))
    return dramaSpielberg.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(lasMovies) {

    let order = lasMovies.map(elm => elm.title).sort((a,b) => a.localeCompare(b))
    let firstTwenty = order.splice(0, 20)
    
    return firstTwenty
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

console.log(movies)

function ratesAverage(theMovies) {

    if (theMovies.length == 0) {
        return 0
    } else {
    let rates = theMovies.filter(elm => elm.rate).reduce((acc, elm) => acc + elm.rate, 0)
    let averageRate = rates / theMovies.length
    let averageRateWithDecimals = averageRate.toFixed(2)

    return +averageRateWithDecimals
    }
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(theMovies) {
 
    let dramaMovie = theMovies.filter(elm => elm.genre.includes("Drama"))

    if (dramaMovie.length === 0) {
        return 0
    } else {
    let dramaRates = dramaMovie.reduce((acc, elm) => acc + elm.rate, 0)
    let dramaAverageRateWithDecimals = (dramaRates / dramaMovie.length).toFixed(2)

    return +dramaAverageRateWithDecimals
    }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

let duration = movies.map(elm => elm.duration)
let hours = movies.map(elm => elm.duration.substring(0,1))
let minutes = movies.map(elm => elm.duration.substring(3,2))
console.log(duration)
console.log(hours)
console.log(minutes)

 



function turnHoursToMinutes(theMovies) {
/*
THIS IS NOT MINE
   
    
    let h = 0
    let m = 0

    let minutes = theMovies.map(element => {
        if (element.duration.includes("h")) {
            h = Number(element.duration[0])
        }
        if (element.duration.includes("min")) {
            m = Number(element.duration.slice(element.duration.length - 5, element.duration.length - 3))
        }
        let minutes = h * 60 + m
        return  {
            ...element,
            duration: minutes
        }
    })
    return minutes 
*/
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average
