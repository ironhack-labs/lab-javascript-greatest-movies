// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = function(movies) {
    const moviesDirector = movies.map(movie => movie.director)
        // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
    return moviesDirector.filter((director, index) => moviesDirector.indexOf(director) === index)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = movies => movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') !== -1).length

// Iteracion 2: Other solution for multiples genres and directors
// function howManyMovies(movies, nameDirector, genre) {
// return movies.filter((movie) => movie.director === nameDirector && movie.genre.indexOf(genre) !== -1).length
// }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = movies => !movies.length ? 0 : Number((movies.filter(movie => movie.rate).reduce(function(acumulartor, current) { return acumulartor + (!current.rate ? 0 : current.rate) }, 0) / movies.length).toFixed(2))


// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = function(movies) {
    const dramaFilms = movies.filter(movie => movie.genre.indexOf('Drama') !== -1 && movie.genre.length === 1)
    if (!dramaFilms.length) {
        return 0
    }
    const reduceDramaFilms = dramaFilms.reduce(
        function(acumulartor, current) {
            return acumulartor + (!current.rate ? 0 : current.rate)
        }, 0)

    return Number((reduceDramaFilms / dramaFilms.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const compareByYearOrTitle = (a, b) => a.year === b.year ? [a, b].sort((a, b) => a.title > b.title ? -1 : 1) : a.year > b.year ? -1 : 1

const orderByYear = movies => movies.length === 1 ? movies : movies.sort(compareByYearOrTitle).reverse().slice()

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const compareByTitleStrings = function(a, b) {
    return a > b ? 1 : -1
}

const orderAlphabetically = function(movies) {
    const moviesTitlesString = []
    for (let movie of movies) {
        moviesTitlesString.push(Object.values(movie).toString())
    }
    moviesTitlesString.sort(compareByTitleStrings)

    return moviesTitlesString.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average