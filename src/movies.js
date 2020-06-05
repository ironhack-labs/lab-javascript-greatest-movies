
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (movies) => [... new Set(movies.map(({ director }) => director))]

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => movies.filter(({ director, genre }) => director === "Steven Spielberg" && genre.includes("Drama")).length

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {
    if (movies.length === 0) {
        return 0
    }
    const totalRate = movies.reduce((acc, { rate }) => {
        if (!rate) {
            return acc + 0
        }
        return acc + rate
    }, 0)
    return parseFloat((totalRate / movies.length).toFixed(2))
}
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
    const onlyDramaMovies = movies.filter(({ genre }) => genre.includes('Drama'))
    return ratesAverage(onlyDramaMovies)
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
    if (movies.length === 1) {
        return movies
    }
    const willSortMovies = [...movies].sort((movieA, movieB) => {
        if (movieA.year < movieB.year) {
            return -1;
        }
        if (movieA.year > movieB.year) {
            return 1;
        }
        if (movieA.title < movieB.title) {
            return -1
        }
        if (movieA.title > movieB.title) {
            return 1;
        }
        return 0
    })

    return willSortMovies
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
    const willSortMoviesAlphabetically = movies.map(({ title }) => title)
    return willSortMoviesAlphabetically.sort((titleA, titleB) => {
        if (titleA > titleB) {
            return 1;
        } else if (titleA < titleB) {
            return -1;
        } else {
            return 0;
        }
    }).slice(0, 20)
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
