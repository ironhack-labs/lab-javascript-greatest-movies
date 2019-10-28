/* eslint no-restricted-globals: 'off' */



// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    let newArray = array.map(elm => {
        return elm
    })
    newArray.sort((a, b) => {

        if (a.year > b.year) return 1
        if (a.year < b.year) return -1
        if (a.year === b.year) {
            if (a.title > b.title) return 1
            if (a.title < b.title) return -1
        }
    })
    return newArray
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    let dramaSpielberg = array.filter(elm => elm.genre.includes("Drama") && elm.director === "Steven Spielberg")
    return dramaSpielberg.length
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let arrayTitle = array.map(elm => {             //mapear el original y devolver los titulos solo
        return elm.title
    })
    let order = arrayTitle.sort((a, b) => {         //ordenar alfabeticamente

        if (a > b) return 1
        if (a < b) return -1
    })

    let first20 = order.slice(0, 20)                    //top 20 titulos
    return first20

}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (array.length == 0) return 0

    let totalRate = array.filter(elm => elm.rate).reduce((acc, elm) => acc + elm.rate, 0)
    let averageRate = totalRate / array.length

    return parseFloat(averageRate.toFixed(2))
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    if (array.length == 0) return 0

    let drama = array.filter(elm => elm.genre.includes("Drama"))
    let rateDrama = drama.reduce((acc, elm) => acc + elm.rate, 0)
    let averageDrama = rateDrama / array.length

    return parseFloat(averageDrama.toFixed(2))

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    let arrayDuration = array.map(elm => {     
        return elm.duration
    })
    
    // let convertDuration = parseInt(elm.duration)
   
    return convertDuration
    

}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
