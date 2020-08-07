// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {
    const allDirectors = arr.map(resultado => resultado.director)
    return allDirectors
}

getAllDirectors(movies)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    const dramaMovies = arr.filter(film => film.director === "Steven Spielberg")
    const dramaGenre = dramaMovies.filter(genero => genero.genre.includes("Drama"))
    return dramaGenre.length
}

howManyMovies(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length == 0) {
        return 0;
    }
    const sum = arr.reduce((sum, rating) => {
        return rating.rate ? sum + Number(rating.rate) : sum + 0
    }, 0)
    const avg = Number((sum / arr.length).toFixed(2))
    return avg
}
ratesAverage(movies)


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    const dramaMovies = arr.filter(film => film.genre.includes("Drama"))
    if (dramaMovies.length == 0) {
        return 0;
    }
    const sum = dramaMovies.reduce((sum, rating) => {
        return rating.rate ? sum + rating.rate : sum + 0
    }, 0)
    const avg = (sum / dramaMovies.length).toFixed(2)
    return Number(avg)
}

dramaMoviesRate(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    const movieYear = arr.map(film => film)
    return movieYear.sort((movieA, movieB) => {
        if (movieA.year > movieB.year) {
            return 1
        } else {
            return -1
        }
    })
}

orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    const movieTitle = array.map(film => film.title)
    const moviesInOrder = movieTitle.sort()
    const top20 = moviesInOrder.slice(0, 20)
    return top20
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average