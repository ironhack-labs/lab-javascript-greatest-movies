/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let moviesArray = [...movies]
    moviesArray.sort((a, b) => {
        if (a.year < b.year) {
            return -1
        }
        if (a.year === b.year && a.title < b.title) {
            return -1
        }
        return 1
    })
    return moviesArray
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(elem) {
    return elem.filter((movie) => movie.genre.includes(`Drama`) && movie.director === `Steven Spielberg`).length;
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
/*function orderAlphabetically(movies) {
    return movies.map(movie => movie.title).slice(0, 20)
}*/
function orderAlphabetically(movies) {
    let titles = movies.map(movie => movie.title);
    return titles.sort().splice(0, 20);
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length == 0)
        return 0
    return +(movies.reduce((acc, elm) => {
        return acc + elm.rate
    }, 0) / movies.length).toFixed(2)
}



// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(peliculas) {
    if (peliculas.length == 0) {
        return 0;
    }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average

