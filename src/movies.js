// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {

    const allDirectors = array.map(elm => elm.director)
    
    return allDirectors
    
}



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    
    const spielberg = array.filter(elm => {
        elm.director.includes(`Spielberg`) && elm.genre.includes('Drama')
    })
    return spielberg.length
}




// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(array) {
    
    const sumRates = array.reduce((acc, elm) => {
        const sum = acc + elm.rate
        const avg = sum / array.length
        return avg
    }, 0)
    return sumRates
}



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    
    const drama = array.map(elm => elm.genre.includes('Drama'))
    const rate = drama.reduce((acc, elm) => acc + elm.rate,0)
    return rate.toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const moviesCopy = JSON.parse(JSON.stringify(movies))
    moviescopy.sort(function (a, b) {
        a.year - b.year
    })
        return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
