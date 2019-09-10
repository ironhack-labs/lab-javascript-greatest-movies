/* {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  }*/

/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const ratesAverage = movies => {
    if (movies.length === 0) return 0

    const rates = movies.reduce((acc, movie) => {
        return acc + Number(movie.rate)
    }, 0)
    return Math.round((rates / movies.length) * 100) / 100
}

// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {
    const arrDramaMovies = []
    const dramaMovies = movies.filter(movie => {
        if (movie.genre.includes('Drama')) {
            arrDramaMovies.push(movie)
        }
    })

    //  Por si no hay del género Drama
    if (arrDramaMovies.length === 0) {
        return 0
    }

    return ratesAverage(arrDramaMovies)
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration = movies => {

    return movies.sort((a, b) => {
        if (a.duration < b.duration) {
            return -1
        } else if (a.duration > b.duration) {
            return 1
        } else {
            return a.title < b.title ? -1 : 1
        }
    })

}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    const arrFilter = movies.filter(movie =>
        movie.genre.includes('Drama') &&
        movie.director === 'Steven Spielberg')
    return arrFilter.length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    if (movies.length <= 20) {
        return movies.map(movie => movie.title).sort();
    }
    const moviesOrder = movies.map(movie => movie.title).sort().splice(0, 20);
    return moviesOrder;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
// haciendo un map, devolver el tiempo en minutos. Puede venir de una de esas 3 formas
// '1h 33min'
// '3h'
// '45min'
// BONUS Iteration: Best yearly rate average - Best yearly rate average
