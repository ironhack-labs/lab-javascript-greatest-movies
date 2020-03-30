/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
    function orderByYear(movies) {
        moviesCopy = [...movies]
        return moviesCopy.sort((a, b) => {
            if (a.year > b.year) {
                return 1
            } else if (a.year < b.year) {
                return -1
            } else {
                if (a.title > b.title) {
                    return 1
                } else if (a.title < b.title) {
                    return -1
                } else {
                    return 0
                }
            }
        })
    }
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
    
    function howManyMovies(movies) {

        const spielbergDramaMovies = movies.filter(function (movies) {
            if (movies.director.includes('Steven Spielberg') && movies.genre.includes('Drama'))
                return true
        })
        return spielbergDramaMovies.length
    }
    
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

    function orderAlphabetically(movies) {
        
        const moviesCopy = [...movies]
        return moviesCopy.sort((a, b) => {
            if (a.title > b.title) {
                return 1
            } else if (a.title < b.title) {
                return -1
            } else {
                return 0
            }
        })
        .map(movie => movie.title)
        .splice(0, 20)
    }


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

    function ratesAverage(movies) {

        if (movies.length === 0) return 0
        const sumRates = movies.reduce((acc, elm) => {
            return acc + (elm.rate || 0)
        }, 0)
        const totalAvg = sumRates / movies.length
            return Number(totalAvg.toFixed(2))
    }


// Iteration 5: Drama movies - Get the average of Drama Movies

    function dramaMoviesRate(movies) {
        const dramaMovies = movies.filter(elm => elm.genre.includes('Drama'))
        if (dramaMovies.length === 0) return 0
        const sumRates = dramaMovies.reduce((acc, elm) => {
            return acc + elm.rate
        }, 0)
        const rateAvg = sumRates / dramaMovies.length
        return Number(rateAvg.toFixed(2))
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
