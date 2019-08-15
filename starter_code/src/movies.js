/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(array) {
    return array.reduce(function (acc, current) {
        return acc + Number(current.rate)
    }, 0) / array.length
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(newArray) {
    const dramaMovies = newArray.filter(function (drama) {
        return drama.genre.includes('Drama') && drama.genre.length === 1
    })
    if (dramaMovies.length === 0) {
        return 0
    } else {
        return Math.round((dramaMovies.reduce(function (acc, current) {
            return acc + Number(current.rate)
        }, 0) / dramaMovies.length) * 100) / 100

    }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(array) {
    return array.sort(function (a, b) {
        if (a.duration > b.duration) {
            return 1
        }
        if (a.duration < b.duration) {
            return -1
        }
        // Orden alfabético
        if (a.duration === b.duration) {
            const sortedByTitle = array.sort()
            return sortedByTitle
        }

    })
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    if (array.length === 0) {
        return 0
    } else {
        const dramaMovies = array.filter(function (drama) {
            return drama.genre.includes('Drama') && drama.director === 'Steven Spielberg'
        })
        return dramaMovies.length

    }
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    const sortedByTitle = array.sort()
    sortedByTitle.splice(20, sortedByTitle.length - 1)
    return sortedByTitle;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average