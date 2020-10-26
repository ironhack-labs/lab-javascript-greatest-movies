// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
    let allDirectors = []
    allDirectors = array.map(elm => elm.director)
    return allDirectors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

//function cleanDirectorsArr() {}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    let arrayDramaSpielberg = array.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama"))
    return arrayDramaSpielberg.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    const allRates = array.map(elm => elm.rate)
    if (array.length === 0) {
        return 0
    } else {
        const sumRates = allRates.reduce((acc, elm) => acc + elm, 0)
        const totalRate = (sumRates / array.length).toFixed(2)
        return parseFloat(totalRate)
    }
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    const dramaMovies = array.filter(elm => elm.genre.includes("Drama"))
    if (dramaMovies.length === 0) {
        return 0
    } else {
        const dramaMoviesRate = ratesAverage(dramaMovies)
        return parseFloat(dramaMoviesRate)
    }
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    const moviesCopy1 = [...array]
    moviesCopy1.sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1 )
    return moviesCopy1

    //Solución de internet - necesito una explicación porque no entiendo que está pasando con la ? y los :
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    const moviesCopy2 = [...array]
    const sortedMovies = moviesCopy2.sort((a, b) => (a.title > b.title) ? 1 : -1)
    const sortedTitles = sortedMovies.map(elm => elm.title)
    if (sortedTitles.length < 20) {
        return sortedTitles
    } else {
        return sortedTitles.slice(0, 20)
    }
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    const moviesCopy3 = [...array]
    moviesCopy3.forEach(elm => {
        const newDuration = parseInt(elm.duration[0] * 60) + parseInt(elm.duration.slice(3, 5))
         let modifiedDuration = {}
        if (elm.duration.length === 2) {
            modifiedDuration = {...elm}
        } else if (elm.duration.length === 5) {
            modifiedDuration = {...elm}
        } else if (newDuration > 31 && newDuration < 341) {
            modifiedDuration = { ...elm, duration: newDuration }
        } return modifiedDuration
    })
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
    if (array.length === 0) {
        return null
    } else {

    }
}






// ORDEN NUMERICO:
// ((a, b) => a - b)  ascendente
// ((a, b) => b - a)  descendente


// ORDEN ALFABETICO:
// ((a, b) => (a > b) ? 1 : -1)  ascendente
// ((a, b) => (a < b) ? -1 : 1)  ascendente
// ((a, b) => (a > b) ? -1 : 1)  descendente
// ((a, b) => (a < b) ? 1 : -1)  descendente