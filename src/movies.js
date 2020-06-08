// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = function getAllDirectors(movies) {
    return movies.map(movie => movie.director);

};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movies) {
    if (movies.length === 0) {
        return 0
    }
    const moviesFilter = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
    return moviesFilter.length

}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    let average = movies.reduce((acc, elm) => {
        if (elm.rate) {
            return elm.rate + acc
        } else {
            return acc
        }
    }, 0)
    if (movies.length === 0) {
        return 0
    }
    return Math.round((average / movies.length) * 100) / 100

}

// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(movie => movie.genre.includes('Drama'))
    if (dramaMovies.length === 0) {
        return 0;
    }
    let suma = dramaMovies.reduce((ac, movie) => {
        return ac + movie.rate
    }, 0);
    return Number((suma / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const moviesCopy = [...movies]
    moviesCopy.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        }
        if (a.year < b.year) {
            return -1;
        }
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
            return 0
        }
    })

    return moviesCopy

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const titleMovies = movies.map(movie => movie.title)
    const order = titleMovies.sort().slice(0, 20)


    return order
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
