// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const allDirectors = movies.map(elm => {
        return elm.director
    })
    return allDirectors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const allStevenFilms = movies.filter(elm => {
        return elm.director.includes('Steven Spielberg') && elm.genre.includes ('Drama')
    })
    return allStevenFilms.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    const sumRates = movies.reduce((acc, elm) => acc + elm.rate, 0)
    const avrRates = sumRates / movies.length
    const avrFloat = parseFloat(avrRates.toFixed(2))
    console.log(avrFloat)
    return avrFloat
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const filmsDrama = movies.filter(elm => {
        return elm.genre.includes('Drama')
    })
    const sumRatesDrama = filmsDrama.reduce((acc, elm) => acc + elm.rate, 0)
    const avrRatesDrama = sumRatesDrama / filmsDrama.length
    const avrFloat = parseFloat(avrRatesDrama.toFixed(2))
    return avrFloat
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const moviesCopy = [...movies]
    moviesCopy.sort(function (a, b) {
        if (a.year > b.year) {
            return 1

        } else if (a.year < b.year) {
            return -1

        } else {

            moviesCopy.sort(function (a, b) {
                if (a.title > b.title) {
                    return 1
                } else if (a.title < b.title) {
                    return -1
                } else {
                    return 0
                }
            })

        return 0
        }
    
    })
    return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const firstTwentyTitles = movies.slice(0,20)
    console.log (firstTwentyTitles)
    firstTwentyTitles.sort(function (a, b) {
        if (a.title > b.title) {
            return 1

        } else if (a.title < b.title) {
            return -1
        
        } else {
          return 0
        }
    })
    return firstTwentyTitles
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
