// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const movieDirector = movies.map(movie => movie.director)
    return movieDirector
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const moviesSpielberg = movies.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama"))
    return moviesSpielberg.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0
    } else {
        const movieRateTotal = movies.reduce((acc, elm) => acc + elm.rate, 0)
        const movieWithoutRate = movies.filter(elm => elm.rate === null || undefined || '') // I tried to take off the movies without rate but it doesn't seem working.
        const movieRateAvg = (movieRateTotal-movieWithoutRate) / (movies.length-movieWithoutRate.length)
        const roundedmovieRateAvg = Number(movieRateAvg.toFixed(2))
        return roundedmovieRateAvg
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramamovie = movies.filter(elm => elm.genre.includes("Drama"))
    if (dramamovie.length === 0) {
        return 0
    } else {
        const totalDramaMovieRate = dramamovie.reduce((acc, elm) => acc + elm.rate, 0)
        const avgDramaMovieRate = totalDramaMovieRate/dramamovie.length
        const roundedDramaMovieRate = Number(avgDramaMovieRate.toFixed(2))
        return roundedDramaMovieRate
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const moviescopy = JSON.parse(JSON.stringify(movies))
    moviescopy.sort(function(a, b) {
        if (a.year === b.year) { // I tried that for ordering the titles alphabetically if the years were the same but it doesn't seem working
            moviescopy.sort((a, b) => {
            let fa = a.title,
            fb = b.title

            if (fa < fb) {
            return -1
            }
            if (fa > fb) {
            return 1
            }
            return 0
        }) 
        } else {
            return a.year - b.year
        }
    })
    return moviescopy
}        

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const moviesTitle = movies.map(elm => elm.title)
    moviesTitle.sort((a, b) => {
        let fa = a.toLowerCase(),
            fb = b.toLowerCase()

        if (fa < fb) {
            return -1
        }
        if (fa > fb) {
            return 1
        }
        return 0
    })
    return moviesTitle.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    const movieDuration = movies.map(elm => {
        const movieTime= elm.duration
        const removeMin = movieTime.slice(0, -3)
        const timeRaw = removeMin.split('h')
        const convertMinute = (+timeRaw[0]) * 60 + (+timeRaw[1])
        return convertMinute 
    })
    return movieDuration // For some reason this doesn't work
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
    if (movies.length === 0) {
        return null
    } else {
        const newArray = movies.map(elm => {
            const rateByYear = elm.rate / elm.year
            function sortingRatebyYear () {
                rateByYear.sort()
            } 
        })
        return newArray
    }
}