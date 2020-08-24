// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const allDirectors = movies.map(elm => elm["director"])
    return allDirectors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const spielberg = movies.filter(elm => elm["director"] == "Steven Spielberg")
    const spielbergDrama = spielberg.filter(elm => elm.genre.includes("Drama"))
    return spielbergDrama.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    const rates = movies.filter(elm => elm["rate"] >= 0)
    const ratesSum = rates.reduce((acc, elm) => acc + elm["rate"], 0)
    const average = ratesSum / movies.length
    if (movies.length <= 0) {
        return 0
    } else {
        return Number(average.toFixed(2))
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(elm => elm["genre"].includes("Drama"))
    return ratesAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const moviesCopy = [...movies]
    const yearOrder = moviesCopy.sort((a, b) => {
        if (a["year"] === b["year"]) {
            return (a["title"].localeCompare(b["title"]))
        }
        return (a["year"] - b["year"])
    })
    return yearOrder
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const moviesMapCopy = movies.map(elm => elm["title"])
    const alphabeticOrder = moviesMapCopy.sort()
    if (alphabeticOrder.length > 20) {
        alphabeticOrder.splice(20)
    }
    return alphabeticOrder
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(movies) {
//     const conversionList = movies.map(elm => elm)


//     return conversionList
// }

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
