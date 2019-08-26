/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    const contador = arr.length
    const sum = arr.reduce((acc, current) => acc + parseInt(current.rate), 0)
    const average = (sum / contador).toFixed(2)
    console.log(average)
    return parseInt(average)
}

 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    const dramaFilter = arr.filter(elem => elem.genre.includes('Drama'))
    const contador = dramaFilter.length

    if(contador > 0){
        const dramaRatesSum = dramaFilter.reduce((acc, current) => acc + parseInt(current.rate), 0)
        const averageDramaRate = dramaRatesSum / contador
        return parseInt(averageDramaRate.toFixed(2))
    } else {
        return 0
    }
    
}

dramaMoviesRate(movies)

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(arr){
    const orderList = arr.sort(function(a,b) {
        if (a.duration > b.duration){
            return 1;
        } if (a.duration < b.duration) {
            return -1
        }

        return 0
    })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    const moviesBySteven = arr.filter(elem => elem.director.includes('Steven Spielberg'))
    const dramaMoviesBySteven = moviesBySteven.filter(elem => elem.genre.includes('Drama')).length
    return dramaMoviesBySteven
  }
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    return arr
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    return arr
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {
    return null
}
