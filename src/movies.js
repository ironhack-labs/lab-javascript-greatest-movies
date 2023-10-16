// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map((eachMovie) => {
        return eachMovie.director
    })
    return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray !== 0) {
        const filteredMovies = moviesArray.filter((eachMovie) => {
            if (eachMovie.director.toLowerCase() === 'steven spielberg' && eachMovie.genre.includes('Drama')) {
                return true
            }
            else {
                return false
            }
        })
        if (filteredMovies.length === 0) {
            return 0
        }
        else {
            return filteredMovies.length
        }
    }
    else {
        return 0
    }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length !== 0) {
        const totalScore = moviesArray.reduce((accumulator, eachMovie) => {
            if (typeof eachMovie.score !== 'number') {
                return accumulator
            }
            else {
                return accumulator + eachMovie.score
            }
        }, 0)
        const averageScore = totalScore / moviesArray.length
        return Number(averageScore.toFixed(2))
    }
    else {
        return 0
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const filteredMovies = moviesArray.filter((eachMovie) => {
        if (eachMovie.genre.includes("Drama")) {
            return true
        }
        else {
            return false
        }
    })
    if (filteredMovies.length !== 0) {
        return scoresAverage(filteredMovies)
    }
    else {
        return 0
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesByYear = [...moviesArray]
    moviesByYear.sort((movie1, movie2) => {
        if (movie1.year < movie2.year) {
            return -1
        }
        else if (movie1.year > movie2.year) {
            return 1
        }
        else if (movie1.year === movie2.year) {
            if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) {
                return -1
            }
            else if (movie1.title.toLowerCase() > movie2.title.toLowerCase()) {
                return 1
            }
            else {
                return 0
            }
        }
    })
    return moviesByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesByTitle = [...moviesArray]
    moviesByTitle.sort((movie1, movie2) => {
        if (movie1.title.toLowerCase() < movie2.title.toLowerCase()) {
            return -1
        }
        else if (movie1.title.toLowerCase() > movie2.title.toLowerCase()) {
            return 1
        }
        else {
            return 0
        }
    })
    const titleMovie = moviesByTitle.map((eachMovie) => {
        return eachMovie.title
    })
    return titleMovie.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesWithMinutesDuration = moviesArray.map((eachMovie) => {
        const digits = eachMovie.duration.replace('min', '').split('h ')
        const hours = parseInt(digits[0])
        const minutes = parseInt(digits[1])
        let minutesDuration
        if (digits.length > 1) {
            minutesDuration = hours * 60 + minutes
        }
        else {
            minutesDuration = hours * 60
        }
        const result = {
            ...eachMovie,
            duration: minutesDuration
        }
        return result
    })
    
    return moviesWithMinutesDuration
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length !== 0) {
        let bestPuntuation = 0
        let cont = 0
        let moviesByYear = orderByYear(moviesArray)
        let year = moviesByYear[0].year
        moviesByYear.map((eachMovie) => {
            console.log()
            if (eachMovie.year !== year) {
                if (cont > bestPuntuation) {
                    bestPuntuation = cont
                    year = eachMovie.year
                }
            }
            else {
                cont += eachMovie.score
            }
        })
        const bestYearMovies = moviesByYear.filter((eachMovie) => {
            if (eachMovie.year === year) {
                return true
            }
            else {
                return false
            }
        })
        const bestAverage = scoresAverage(bestYearMovies)

        console.log(`The best year was ${year} with an average score of ${bestAverage}`)
        return `The best year was ${year} with an average score of ${bestAverage}`
    }
    else {
        return null
    }
}
