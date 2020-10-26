// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = arrayOfMovies => {
    const directorsArr = arrayOfMovies.map(movie => movie.director)
    return directorsArr
}
//console.log(getAllDirectors(movies))

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectorsDuplicates = arrayOfMovies => {
    const duplicatesArr = new Set(directorsArr)
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = arrayOfMovies => {
    const results = arrayOfMovies.filter(elm => elm.genre.includes("Drama") && elm.director.includes("Steven Spielberg"))
    return results.length
}
//console.log(results)


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = arrayOfMovies => {
    const rateSum = arrayOfMovies.reduce((acc, elm) => acc + elm.rate, 0)
    console.log(rateSum)
    if (arrayOfMovies.length === 0) {
        return 0
    } else if (arrayOfMovies.rate === 0) {
        return acc + elm.rateSum, 0
    } else {
        return parseFloat((rateSum / arrayOfMovies.length).toFixed(2))
    }
}


// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = arrayOfMovies => {
    const rateSum2 = arrayOfMovies.filter(elm => elm.genre.includes("Drama"))
    console.log(rateSum2)
    const rateSum3 = rateSum2.reduce((acc, elm) => acc + elm.rate, 0)
    return parseFloat((rateSum3 / arrayOfMovies.length).toFixed(2))
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = arrayOfMovies => {
    const orderOfMovies = arrayOfMovies.slice()
    orderOfMovies.sort(function (a, b) {
        if (a.year < b.year) {
            return -1
        } else if (a.year > b.year) {
            return +1
        } else {
            return a.title.localeCompare(b.title)
        }
    })
    return orderOfMovies
}
console.log(orderByYear(movies))



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = arrayOfMovies => {
    const movieTitles = arrayOfMovies.map(movie => movie.title)
    const movieTitlesOrdered = movieTitles.sort((a, b) => a.localeCompare(b))
    return movieTitlesOrdered.slice(0, 20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = arrayOfMovies => {
    const movieDuration = arrayOfMovies.map(movie => movie.duration)
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = arrayOfMovies => {
}
