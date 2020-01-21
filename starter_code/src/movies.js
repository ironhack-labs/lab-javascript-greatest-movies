/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (arr) => {
    const filmOrdered = [...arr].sort((a, b) => {
        if (a.year === b.year)
            return a.title.localeCompare(b.title)
        else
            return a.year - b.year
    })

    return filmOrdered
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = (arr) => {

    const spielbergMovies = arr.filter(eachFilm => {
        if (eachFilm.director === "Steven Spielberg" && eachFilm.genre.includes("Drama"))
            return true
    })
    return spielbergMovies.length

}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = arr => {
    const arrTitles = []
    arr.forEach(eachMovie => arrTitles.push(eachMovie.title))
    arrTitles.sort()
    return arrTitles.slice(0, 20)
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = arr => {
    const rates = arr.map(eachMovie => eachMovie.rate || 0)
    const sumRates = rates.reduce((acc, rate) => acc + rate, 0)
    if (rates.length > 0) {
        const average = sumRates / rates.length
        return parseFloat(average.toFixed(2))
    } else
        return 0
}
// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = arr => {
    const dramaRates = arr.filter(eachFilm => {
        if (eachFilm.genre.includes("Drama"))
            return true
    })
    return ratesAverage(dramaRates)
}

dramaMoviesRate(movies)
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = arr => {
    const durationFilms = [...arr].map(eachFilm => {
        let durationFilm = eachFilm.duration.split(" ")
        let hours = parseFloat(durationFilm[0])
        let minutes = 0
        if (durationFilm[1]) {
            minutes = parseFloat(durationFilm[1])
        }
        let allTime = (hours * 60) + minutes
        durationFilm.duration = allTime
    })
    return durationFilms
}
console.log(movies)

turnHoursToMinutes(movies)

// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = arr => {
    if (arr.length === 0)
        return null
}