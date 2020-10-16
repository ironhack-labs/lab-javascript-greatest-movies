// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(film) {
    return film.map(name => { return name.director })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    if (array.length === 0) {
        return 0
    } else {
        const dramaFilms = array.filter(movie => movie.genre == 'Drama')
        if (dramaFilms.length === 0) {
            return 0
        } else {
            const stevenDramas = dramaFilms.filter(movie => movie.director == 'Steven Spielberg')
            return stevenDramas.length
        }

    }
}

// Esta funcion no nos responde como quisieramos

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (array.length === 0) {
        return 0
    } else {
        const ratesMovies = array.map(movie => movie.rate)
        return (ratesMovies.reduce((acc, currentVal) => acc + currentVal) / ratesMovies.length).toFixed(2)
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    const dramaMovies = array.filter((movie) => movie.genre == ‘Drama’)
    const dramaRates = dramaMovies.map(movie => { return movie.rate })
    return (dramaRates.reduce((acc, currentVal) => acc + currentVal) / dramaRates.length).toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    const orderedArray = array.sort((a, b) => a - b)

    // Sabemos que tenemos que acceder al key year del array y desde ahí ordenarlo, pensamos en crear un array 
    // de sólo los años y ordenarlo pero eso nos borraría los demás datos de cada película

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    const titles = array.map(movie => array.title)
    const orderedTitles = titles.sort((a, b) => a - b)
    const twentyTitles = orderedTitles.reduce(title => indexOf(title) <= 20)
    return twentyTitles
}

// Esta funcion tampoco la logramos hacer andar

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average