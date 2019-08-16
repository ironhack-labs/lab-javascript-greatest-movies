/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const ratesAverage = movies => movies.reduce((acc, current) => acc + current.rate, 0) / movies.length

// Iteration 2: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = movies => {
    let dramas = movies.filter((movie => movie.genre.includes('Drama')))
    if (dramas.length === 0)
        return 0
    else
        return ratesAverage(dramas)
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(arrayMovies) {
    if (arrayMovies.length > 1) {
        return arrayMovies.sort((a, b) => {
            if (a.duration == b.duration) {
                if (a.title < b.title)
                    return -1;
                if (a.title > b.title)
                    return 1;
            }
            return a.duration - b.duration;
        });
    }
    return arrayMovies;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies = movies => {
    let spielberg = movies.filter((movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'))

    if (spielberg.length === 0)
        return 0
    else
        return spielberg.length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles


const orderAlphabetically = movies => {
    let orderedList = movies.map(e => e.title)

    orderedList.sort()

    if (orderedList.length < 20)
        return orderedList
    else
    if (orderedList.length > 20) {
        let reOrderedList = orderedList.slice(0, 20)
        return reOrderedList
    }

}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => { // BASADO EN EL CÓDIGO DE JESÚS PORQUE NO NOS SALIÓ
    let newArray = movies.map((e) => {
        let newDuration = e.duration.split(' ').map((e) => {
                if (e.indexOf('h') !== -1) {
                    return parseInt(e.match(/[0-9]/g).join('')) * 60;
                } else {
                    return parseInt(e.match(/[0-9]/g).join(''));
                }
            })
            .reduce((acc, currentNumber) => acc + currentNumber);

        return {
            ...e,
            duration: newDuration
        }
    })

    return newArray;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average