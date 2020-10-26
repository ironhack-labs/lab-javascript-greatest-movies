// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const directors = movies.map(elm => elm.director)
    return directors
}
console.log(getAllDirectors)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const spielbergMovies = movies.filter(elm => elm.genre.includes('Drama') && elm.director === 'Steven Spielberg')
    return spielbergMovies.length
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0
    }
    const selectedMovies = movies.filter(elm => elm.rate)

    const avrMovies = selectedMovies.reduce((acc, elm) => acc + elm.rate, 0)
    const result = (avrMovies / movies.length).toFixed(2)
    const digits = parseFloat(result)
    return digits
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {

    const selectedMovies = movies.filter(elm => elm.genre.includes('Drama'))
    if (selectedMovies.length === 0) {
        return 0
    }

    const avrMovies = selectedMovies.reduce((acc, elm) => (acc + elm.rate), 0)
    const result = (avrMovies / selectedMovies.length).toFixed(2)
    const digits = parseFloat(result)
    console.log('This is the average', digits)
    return digits
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const moviesCopy = [...movies]
    moviesCopy.sort((a, b) => a.year - b.year)
    // if (a.year === b.year) {
    //     if (a.title > b.title) {
    //         return 1
    //     }
    //     else if (a.title < b.title) {
    //         return -1
    //     }
    // }
    return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const moviesCopy = [...movies]
    const moviesTitle = moviesCopy.map(elm => elm.title)
    const moviesOrder = moviesTitle.sort()
    const top20 = moviesOrder.slice(0, 20)
    return top20
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    const moviesCopy = [...movies]
    const time = moviesCopy.map(elm => {
        let hours = elm.duration.charAt(0)
        let hoursConverted = hours * 60
        let minutes = elm.duration.slice(3, 5)
        let totalMinutes = hours + minutes
        let finalNumber = parseInt(totalMinutes)
        const obj = {
            ...elm,
            duration: finalNumber
        }
        return obj
    })
    return time
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    if (movies.length === 0) {
        return null
    }
    // const moviesCopy = [...movies]
    // const time = moviesCopy.map(elm => {
    //     let years = movies.filter(elm => elm.year)
    //     let avrPerYear = year / 
    //     return avrPerYear
    // }
    // return time
    // console.log("The best year was <YEAR> with an average rate of <RATE>")
}