// Iteration 1: All directors? - Get the array of all directors.


function getAllDirectors(array) {
    const directorsTotal = array.map(elm => elm.director)
    return directorsTotal
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (array) {
    const howStevenSpielberg = array.filter(elm => elm.director === 'Steven Spielberg' && elm.genre.includes('Drama'))
    return howStevenSpielberg.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {

    if (arr.length === 0) {
        return 0
    } else {
        const avgRates = arr.reduce((acc, elm) => elm.rate ? acc + elm.rate : acc, 0)
        return Number((avgRates / arr.length).toFixed(2))
    }
}

// IMPORTANTÍSIMO - CONDICIONALES TERNARIOS:

// if (a > b)
// { "mayor" }
// else { "menor" }
// a > b ? "mayor":"menor"

// EXAMPLE:
//
// const avgRates = arr.reduce((acc, elm) => {
// if (elm.rate === true){
//     return acc + elm.rate
//     } else {
//     return acc
// }
// }, 0)

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {

    const howDramaMovies = array.filter(elm => elm.genre.includes('Drama'))
    if (!howDramaMovies.length) { // ESTO ES LO MISMO QUE EL IF DE LA ITERACIÓN 3
        return 0
    } else {
        const avgDramaMovies = howDramaMovies.reduce((acc, elm) => elm.rate ? acc + elm.rate : acc, 0)
        return parseFloat((avgDramaMovies / howDramaMovies.length).toFixed(2))
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {

    const newArray = [...array]
    newArray.sort((a, b) => {
        if (a.year === b.year) {
            return (a.title < b.title ? -1 : 1)
        } else {
            return (a.year - b.year)
        }
    })
    return newArray
}

// ORDEN ALFABETICO:
// ((a, b) => (a > b) ? 1 : -1)  ascendente
// ((a, b) => (a < b) ? -1 : 1)  ascendente // ESTE HA SIDO EL ELEGIDO EN LA ITERACIÓN 5 Y 6
// ((a, b) => (a > b) ? -1 : 1)  descendente
// ((a, b) => (a < b) ? 1 : -1)  descendente


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    
    const newAlphabeticOrder = [...array]
    newAlphabeticOrder.sort((a, b) => (a.title < b.title) ? -1 : 1)

    const newArrayOrdered = newAlphabeticOrder.map(elm => elm.title)
    if (newArrayOrdered.length > 20) {
        return newArrayOrdered.splice(0, 20)
    } else {
        return newArrayOrdered
    }
}

// ORDEN ALFABETICO:
// ((a, b) => (a > b) ? 1 : -1)  ascendente
// ((a, b) => (a < b) ? -1 : 1)  ascendente // ESTE HA SIDO EL ELEGIDO EN LA ITERACIÓN 5 Y 6
// ((a, b) => (a > b) ? -1 : 1)  descendente
// ((a, b) => (a < b) ? 1 : -1)  descendente



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    const newArray = [...array]
    newArray.forEach(elm => {
        const newDuration = parseInt(elm.duration[0] * 60) + parseInt(elm.duration.slice(3, 5))
        const hoursToMinutes = { ...elm, newDuration: newDuration }
        return hoursToMinutes
    })
}


//         if (newDuration > 31 && newDuration < 341) {
//     const hoursToMinutes = { ...elm, duration: newDuration }

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
    return null
}
