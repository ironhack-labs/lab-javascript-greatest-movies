
// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    const movieDirector = movies.map(movie => movie.director)
    return movieDirector
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const dramasSpielberg = movies.filter(elem => {
        return (elem.director === "Steven Spielberg") && elem.genre.includes("Drama");
    })

    return dramasSpielberg.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    let average
    if (movies.length === 0) {
        return 0
    }
    const ratedArray = movies.filter(elm => elm.rate)
    const rateSum = ratedArray.reduce((acc, elm) => {
        const movieRate = + elm.rate
        return acc + movieRate
    }, 0)
    average = rateSum / movies.length
    return + average.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movie) {
    let average
    const dramaArray = movie.filter(elm => elm.genre.includes('Drama'))
    const rateSum = dramaArray.reduce((acc, elm) => {
        const dramaRate = +elm.rate
        return acc + dramaRate
    }, 0)
    average = rateSum / dramaArray.length
    if (dramaArray.length === 0) {
        return 0
    }
    return + average.toFixed(2)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const moviesCopy = [...movies]
    moviesCopy.sort((a, b) => {
        if (a.title < b.title) {
            return -1
        } else if (a.title > b.title) {
            return 1
        } else {
            return 0
        }
    })
    moviesCopy.sort((a, b) => a.year - b.year)
    //console.log(moviesCopy)
    return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    moviesCopy = [...movies]
    moviesCopy.sort((a, b) => {
        if (a.title < b.title) {
            return -1
        } else if (a.title > b.title) {
            return 1
        } else {
            return 0
        }
    })
    const onlyTitles = moviesCopy.map(elm => elm.title)
    if (onlyTitles < 20) {
        return onlyTitles
    } else {
        return onlyTitles.slice(0, 20)
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
