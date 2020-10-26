// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    const newArray = movies.map(elm => {
        return elm.director
    })
    return newArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const spielbergMovies = movies.filter(elm => {
        if (elm.genre.includes('Drama') && elm.director === 'Steven Spielberg') {
            return true
        }
    })

    return spielbergMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    const ratedMovies = movies.filter(elm => {
        if (elm.hasOwnProperty('rate') === true) {
            return true
        }
    })
    if (ratedMovies.length === 0) {
        return 0
    } else {
        let totalRate = 0
        ratedMovies.forEach(elm => {
            totalRate += elm.rate
        })
        let avgRate = totalRate / movies.length

        return Math.round(avgRate * 100) / 100
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(elm => {
        if (elm.genre.includes('Drama')) {
            return true
        }
    })
    if (dramaMovies.length === 0) {
        return 0
    }
    let totalRate = 0
    dramaMovies.forEach(elm => {
        totalRate += elm.rate
    })
    let avgRate = totalRate / dramaMovies.length
    return Math.round(avgRate * 100) / 100
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const clonedMovies = JSON.parse(JSON.stringify(movies))
    const orderedMovies = clonedMovies.sort(
        (a, b) => {
            let y = a.year - b.year
            if (y != 0) {
                return y
            }
            return a.title - b.title
        })
    return orderedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const clonedMovies = JSON.parse(JSON.stringify(movies))
    clonedMovies.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    })
    const movieTitles = clonedMovies.map(elm => {
        const movieList = elm.title

        return movieList
    })
    if (movieTitles.length > 20) {
        const cutArray = movieTitles.splice(0, 20)
        return cutArray
    } else {
        return movieTitles
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    const clonedMovies = JSON.parse(JSON.stringify(movies))
    const movieDuration = clonedMovies.map(elm => {
        const time = elm.duration
        const hour = time.charAt(0)
        const hourMins = parseFloat(hour * 60)
        const mins = time.slice(3, 5)
        const totalTime = hourMins + parseFloat(mins)
        if (time.length === 2) {
            const obj = {
                ...elm,
                duration: hourMins
            }
            return obj
        } else if (time.length === 5) {
            const onlyMins = parseFloat(time.slice(0, 2))

            const obj = {
                ...elm,
                duration: onlyMins
            }
            return obj
        } else {
            const obj = {
                ...elm,
                duration: totalTime
            }
            return obj
        }
    })
    return movieDuration
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    if (movies.length === 0) {
        return null
    }

}