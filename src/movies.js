// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = arrayOfMovies => arrayOfMovies.map(movie => movie.director)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arrayOfMovies) {
    const moviesList = arrayOfMovies.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama"))

    return moviesList.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrayOfMovies) {
    if (arrayOfMovies.length === 0) {
        return 0
    } else {
        const sumRates = arrayOfMovies.reduce(function (acc, elm) {
            return acc + elm.rate;
        }, 0)

        return Math.round((sumRates / arrayOfMovies.length) * 100) / 100;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arrayOfMovies) {

    const drama = arrayOfMovies.filter(elm => elm.genre.includes("Drama"))
    const sumDramaRates = drama.reduce(function (acc, elm) {
        return acc + elm.rate;
    }, 0);

    return sumDramaRates / drama.length;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(arrayOfMovies) {
    const moviesCopy = [...arrayOfMovies]
    const orderedMovies = moviesCopy.sort((a, b) => a.year - b.year)
    return orderedMovies
}





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arrayOfMovies) {
    const moviesCopy2 = [...arrayOfMovies]
    const orderedMoviesTitle = moviesCopy2.sort((a, b) => a.title - b.title)
    if (orderedMoviesTitle.length <= 20) {
        return orderedMoviesTitle
    } else {
        return orderedMoviesTitle(0, 19)
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
