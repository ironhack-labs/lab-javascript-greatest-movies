/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let moviesCopy = [...movies]

    let orderedArr = moviesCopy.sort((a, b) => {
        // Si a es menor que b
        // Retornamos -1 para que ponga a 'a' en un indice menor que b (lo deja igual)
        if (a.year < b.year) {
            return -1
            // Su a es mayor que b
            // Retornamos 1 para que ponga a b en un indice menor que b
        } else if (a.year > b.year) {
            return 1
            // En el caso de que ninguna de los anteriores se cumpla (serian iguales)
            // Los ordenamos por titulo con la misma logica que antes
        } else {
            if (a.title < b.title) {
                return -1
            } else {
                return 1
            }
        }
    })
    return orderedArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    // Comprobamos si el array esta vacio, en el caso que si retornamos 0
    if (movies.length == 0) {
        return 0
    }
    // Usamos el metodo filter para retornar solo las peliculas que cumplan la condicion
    // Que el director sea Steven Spielberg y el Genero Drama se encuentre en el array de generos
    let filteredArr = movies.filter(movie => {
        if (movie.director == "Steven Spielberg" && (movie.genre.includes("Drama"))) {
            return true
        }
    })
    // Retornamos el numero de peliculas que ha devuelto el filter
    let result = filteredArr.length
    return result
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let moviesCopy = [...movies]
    // Ordenamos las peliculas en orden ascendente
    let orderedArr = moviesCopy.sort((a, b) => {
        if (a.title > b.titlle) {
            return 1
        } else if (a.title < b.title) {
            return -1
        }
    })
    // Del array ordenado solo cogemos los titulos
    let result = orderedArr.map(movie => movie.title)
    // Del array resultante solo retornamos los 20 primeros
    return result.splice(0, 20)
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length == 0) {
        return 0
    }
    // Con el metodo reduce hacemos un acumulado de las valoraciones
    let moviesAvrRateSum = movies.reduce((acum, movie) => {
        if (!movie.rate) {
            movie.rate = 0
        }
        return acum + movie.rate
    }, 0)
    // El acumulado lo dividimos entre el numero de peliculas
    moviesAvrRate = moviesAvrRateSum / movies.length
    // Retornamos la media con dos decimales
    return parseFloat(moviesAvrRate.toFixed(2))
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    // Hacemos un array solo con las peliculas de Drama
    let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"))
    // Si no hay peliculas de drama retornamos 0
    if (dramaMovies.length == 0) {
        return 0
    }
    // Sumamos todas las valoraciones de ese array
    let dramaMoviesRatesSum = dramaMovies.reduce((acum, movie) => {
        if (!movie.rate) {
            movie.rate = 0
        }
        return acum + movie.rate
    }, 0)
    // El acumulado lo dividimos entre el numero de peliculas
    let dramaMoviesRateAvr = dramaMoviesRatesSum / dramaMovies.length
    // Retornamos la media con dos decimales
    return parseFloat(dramaMoviesRateAvr.toFixed(2))
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    let newMoviesArr = [...movies]
    // Recorremos las peliculas y comprobamos el formato
    let moviesNumberHours = newMoviesArr.map(movie => {
        if (typeof movie.duration == 'number') {
            movie.duration = movie.duration + ""
        }
        if (movie.duration.includes("min") && movie.duration.includes("h")) {
            let hours = movie.duration.slice(0, 1)
            let minutes = movie.duration.slice(2, movie.duration.length - 3)
            let movieDurationMin = (parseInt(hours * 60) + parseInt(minutes))
            let movieDurationProp = {
                duration: movieDurationMin
            }
            return movieDurationProp
        } else if (!movie.duration.includes("min")) {
            let hours = movie.duration.slice(0, 1)
            let movieDurationMin = parseInt(hours * 60)
            let movieDurationProp = {
                duration: movieDurationMin
            }
            return movieDurationProp
        } else if (!movie.duration.includes("h")) {
            let minutes = movie.duration.slice(0, 2)
            let movieDurationMin = parseInt(minutes)
            let movieDurationProp = {
                duration: movieDurationMin
            }
            return movieDurationProp
        }
    })
    return moviesNumberHours
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
    if (movies.length == 0) {
        return null
    }

    let object = movies.reduce((acc, b) => {
        if (acc[b.year]) {
            acc[b.year].push(b.rate)
        } else {
            acc[b.year] = [b.rate]
        }
        return acc
    }, {})

    object.forEach(elem => {
        console.log(elem)
    });

    //console.log(object)

}
// {
//     "title": "The Shawshank Redemption",
//     "year": 1994,
//     "director": "Frank Darabont",
//     "duration": "2h 22min",
//     "genre": [
//         "Crime",
//         "Drama"
//     ],
//     "rate": 9.3
// }