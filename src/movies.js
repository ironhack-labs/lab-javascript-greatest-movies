// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const allDirectors = movies.map(elem => {
        return elem.director
    })
    return allDirectors
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const dramaSpielbergMovies = movies.filter(elem => {
        return elem.director === "Steven Spielberg" && elem.genre.includes("Drama")

    })
    const totaldramaSpielbergMovies = dramaSpielbergMovies.length
    return totaldramaSpielbergMovies

}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(movies) {

    if (movies.length === 0) {
        return 0
    } else {
        const totalMovies = movies.length
        const sumRates = movies.reduce((acc, elm) => acc + elm.rate, 0)
        return Math.round((sumRates / totalMovies) * 100) / 100
    }

}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    if (movies.length === 0) {
        return 0
    } else {
        const dramaMovies = movies.filter(elem => {
            return elem.genre.includes("Drama")
        })
        const totalDramaMovies = dramaMovies.length
        const sumRatesDramaMovies = dramaMovies.reduce((acc, elm) => acc + elm.rate, 0)
        return parseFloat(sumRatesDramaMovies / totalDramaMovies)
    }

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    const moviesOrderByYear = [...movies].sort((a, b) => {

        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1
            } else {
                return -1
            }
        } else {
            return a.year - b.year
        }
    })
    return moviesOrderByYear

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies) {

    const moviesOrderByYear = [...movies].sort((a, b) => {

        if (a.title < b.title) {
            return -1
        }
        if (a.title > b.title) {
            return 1
        }
        return 0
    })

    const titleOrderMovies = moviesOrderByYear.map(elem => {
        return elem.title
    })

    if (titleOrderMovies.length < 20) {
        return titleOrderMovies
    } else {
        const titles20 = titleOrderMovies.slice(0, 20)
        return titles20
    }
   

}


    


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average