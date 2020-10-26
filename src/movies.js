// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    const directors = movies.map(elm => elm.director)
    return directors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const howManyMovies = movies.filter(elm => elm.genre.includes('Drama') && elm.director === "Steven Spielberg")
    return howManyMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    if (!movies.length) {

        return 0

    }

    else {

        const sumTotalRates = movies.filter(elm => elm['rate'] !== undefined).reduce((acc, elm) => acc + elm['rate'], 0)

        const average = parseFloat((sumTotalRates / movies.length).toFixed(2))

        return average
    }
}



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    const dramaMovies = movies.filter(elm => elm.genre.includes('Drama'))

    if (!dramaMovies.length) {

        return 0

    } else {

        const sumTotalRates = dramaMovies.reduce((acc, elm) => acc + elm.rate, 0)

        const average = parseFloat((sumTotalRates / dramaMovies.length).toFixed(2))

        return average
    }
}

/*const dramaMoviesRate = movies.genre.reduce((acc, elm) => acc + elm.drama, 0)
const genreMovie = (dramaMoviesRate / movies.genre.length)
const genreDrama = (genremovie).toFixed(2)
return dramaMoviesRate*/


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    const copyOfMovies = [...movies]

    const sortMoviesByYearAndName = copyOfMovies.sort((a, b) => {

        let order = a['year'] - b['year']

        if (!order) {

            order = a['title'].localeCompare(b['title'])

        }

        return order

    })

    return sortMoviesByYearAndName

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

    const copyOfMovies = [...movies]

    const moviesOrderedByName = copyOfMovies.map(elm => elm['title'])

    moviesOrderedByName.sort()

    if (moviesOrderedByName.length > 20) {

        moviesOrderedByName.splice(20)

        return moviesOrderedByName

    }

    return moviesOrderedByName

}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

