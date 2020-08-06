// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(peliculas) {
    return peliculas.map(function(pelicula) {
        return pelicula.director;
    })
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(peliculas) {
    return peliculas.filter(pelicula => (pelicula.director === "Steven Spielberg" && pelicula.genre.indexOf("Drama") > -1)).length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(peliculas) {
    if (!peliculas.length) return 0
    let sum = 0;
    peliculas.forEach(function(pelicula) {
        if (pelicula.rate)
            sum += pelicula.rate
    })
    console.log((sum / peliculas.length).toFixed(2))
    return parseFloat((sum / peliculas.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(peliculas) {
    const dramaMovie = peliculas.filter(pelicula => (pelicula.genre.indexOf("Drama") > -1))
    return ratesAverage(dramaMovie)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(peliculas) {
    const sortedPeliculas = [...peliculas];
    sortedPeliculas.sort((a, b) => {
        if (a.year - b.year)
            return a.year - b.year
        else {
            if (a.title < b.title) return -1
            else if (a.title > b.title) return 1
            else return 0
        }
    })
    return sortedPeliculas
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(peliculas) {
    const sortedPeliculas = [...peliculas];
    let tituloPeliculas = sortedPeliculas.map(function(pelicula) {
        return pelicula.title
    })
    tituloPeliculas.sort((a, b) => {
        if (a < b) return -1
        else if (a > b) return 1
        else return 0
    })
    if (tituloPeliculas.length > 20) {
        tituloPeliculas = tituloPeliculas.slice(0, 20)
    }
    return tituloPeliculas
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average