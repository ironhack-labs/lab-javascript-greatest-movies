// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (movies) => {

    const directorsList = movies.map(elm => elm.director)

    return directorsList
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr) {

    if (moviesArr.length === 0 || moviesArr != 'Steven Spielberg') {
        return 0
    }

    if (moviesArr.genre.includes('Drama')) {
        return 1
    } else if (resultMovies === 'Steven Spielberg') {
        return 2
    }

    let resultMovies = movies.filter((eachMovie) => {
        return eachMovie.genre.includes('Drama') && eachMovie.director === 'Steven Spielberg'
    })

    return resultMovies.length

}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArr) {

    const listedRates = movies.map(elm => elm.rate)

    const sumRates = listedRates.reduce((acc, elm) => {
        return acc + elm
    })
    const divRates = (sumRates / movies.length)

    let totalRates = (Math.round(divRates * 100) / 100)

    return totalRates

}



// Iteration 4: Drama movies - Get the average of Drama Movies


const dramaMoviesRate = (eachMovie) => {

    const moviesDramaList = movies.filter(function (elm) {
        return elm.genre.includes('Drama')
    })


    const averageMoviesList = moviesDramaList.map(elm => elm.rate)
    const sumRates = averageMoviesList.reduce((acc, elm) => {
        return acc + elm
    })

    const divRates = sumRates / averageMoviesList.length

    return divRates
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(eachMovie) {

    const moviesDateList = movies.map(elm => elm.year)

    const moviesDateOrdered = moviesDateList.sort(function (a, b) {
        if (a < b) {
            return 1
        }
    })

    return moviesDateOrdered

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(eachMovie) {

    const moviesList = movies.map(elm => elm.title)
    const orderedMovies = moviesList.sort(function (a, b) {
        if (a < b) {
            return -1
        }
        if (b > a) {
            return 1
        }
        return 0
    })



    if (orderedMovies.length <= 20) {
        return orderedMovies
    } else {
        return orderedMovies.slice(0, 19).map(elm => elm)
    }
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {

    const durationList = movies.map(elm => elm.duration)
    const shortedList = durationList
    console.log(durationList)


}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(moviesArr) {

    if (moviesArr.length === 0) {
        return null
    }

}