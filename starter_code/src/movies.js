/* eslint no-restricted-globals: 'off' */

function toFixed2(number) {
    return parseFloat(number.toFixed(2))
}
// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(moviesArr) {
    return toFixed2(moviesArr.reduce((total, movie) => total += parseFloat(movie.rate), 0) / moviesArr.length)
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArr) {
    let dramaMovies = moviesArr.filter(m => m.genre.includes('Drama'))
    return toFixed2(dramaMovies.reduce((total, movie) => total += (movie.rate || 0), 0) / dramaMovies.length) || 0
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(moviesArr) {
    return moviesArr.sort((m1, m2) => {
        let duration = m1.duration - m2.duration
        return duration || m1.title.localeCompare(m2.title)
    })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(moviesArr) {
    return moviesArr.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
    return moviesArr.sort((m1, m2) => m1.title.localeCompare(m2.title)).slice(0, 20).filter(e => e).map(e => e.title)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
    let moves = moviesArr.map(movie => {
        let movieCopy = Object.assign({}, movie)
        movieCopy.duration = movieCopy.duration.split(' ').reduce((t, s) => t += (s.includes('h')) ? parseInt(s.replace(/h/g, '')) * 60 : parseInt(s.replace(/min/g, '')), 0)
        return movieCopy
    })
    return moves
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(moviesArr) {
    if (moviesArr.length === 0) return null

    const years = Array(...new Set(moviesArr.map(movie => movie.year)))
    
    let yearObj = years.reduce((bestYear, year) => {
        let thisYear = { year, avg: ratesAverage(moviesArr.filter(m => m.year == year)) }
        return (bestYear.avg === thisYear.avg) ? (bestYear.year < thisYear.year && bestYear) || thisYear : (bestYear.avg < thisYear.avg) ? thisYear : bestYear
    }, { year: undefined, avg: 0 })

    return `The best year was ${yearObj.year} with an average rate of ${yearObj.avg}`
}