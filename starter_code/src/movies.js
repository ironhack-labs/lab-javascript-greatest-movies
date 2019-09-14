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
    return ratesAverage(movies.filter(movie => movie.genre.includes('Drama')))
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
function turnHoursToMinutes(movies) {
    let cloneMovies = movies.map(movie => Object.assign({}, movie)) // Deep copy of movies
    const newMovies = cloneMovies.map(movie => {
        movie.duration = durationInMinutes(movie.duration.toString().split(' ')) // Update movie duration
        return movie
    })
    return newMovies
}

function durationInMinutes(durationArray) {
    let totalDuration = 0
    if (durationArray.length === 2) {
        // Duration like => '1h 33min'
        const hoursInMinutes = durationArray[0].replace('h', '') * 60
        const minutes = durationArray[1].replace('min', '')
        totalDuration = Number(hoursInMinutes) + Number(minutes);
    } else {
        if (durationArray[0].includes('h')) {
            // Duration like => '1h'
            totalDuration = durationArray[0].replace('h', '') * 60
        } else {
            // Duration like => '33min'
            totalDuration = durationArray[0].replace('min', '')
        }
    }

    return Number(totalDuration)
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    if (movies.length === 0) {
        return null
    }

    const years = getYears(movies) // array

    // Se separan las películas por años
    const yearMovies = years.map(year => {
        return movies.filter(movie => movie.year === year) // [[{},{}], [{},{}]....]
    })

    // Se coge la media de todos los años
    const finalArrayMovies = []
    const yearMoviesAverage = yearMovies.forEach(yearMoviesArray => {
        finalArrayMovies.push(ratesAverage(yearMoviesArray))
    })

    // Se saca el máximo de todos los años
    const maxRateMovie = Math.max(...finalArrayMovies)
    const maxYearsAverageIndex = finalArrayMovies.indexOf(maxRateMovie)
    const bestYear = years[maxYearsAverageIndex]
    const bestYearMsg = `The best year was ${bestYear} with an average rate of ${maxRateMovie}`
    return bestYearMsg
        
}

function getYears(movies) {
    let years = []
    movies.forEach(movie => {
        // Si no encuentra el elemento en el array, le hace push
        if (years.find(el => el === movie.year) === undefined) {
            years.push(movie.year)
        }
    })
    return years
}