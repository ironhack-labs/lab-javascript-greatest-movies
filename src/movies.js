// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const allDirectors = movies.map(elm => {
        return elm.director
    })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let dramaSpielberg = movies.filter(elm => elm.director === 'Steven Spielberg' && elm.genre.includes('Drama'))
    return dramaSpielberg.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    let average = movies.reduce((acc, elm) => {
        if (elm.rate) {
            return elm.rate + acc
        } else {
            return acc
        }
    }, 0)
    if (movies.length === 0) {
        return 0
    }
    return Math.round((average / movies.length) * 100) / 100
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(elm => elm.genre.includes('Drama'))
    return ratesAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const order = [...movies].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year
    })

    return order
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const orderMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title))
    const first20movies = orderMovies.slice(0, 20).map(movie => movie.title)
    return first20movies
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    const newMovies = movies.map(elm => {
        let hours = elm.duration.slice(0, 1)
        let minutes = elm.duration.slice(3, 5).replace(/[a-z]/gi, '')

        if (elm.duration.charAt(1) === "h") {
            let total = (hours * 60) + Number(minutes)
            return {
                ...elm,
                duration: total
            }
        } else {
            let total2 = Number(elm.duration.slice(0, 2))
            return {
                ...elm,
                duration: total2
            }
        }

    })
    return newMovies
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average