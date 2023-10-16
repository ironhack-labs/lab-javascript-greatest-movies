// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const result = moviesArray.map(eachMovie => {
        return eachMovie.director
    })
    return result
}

//Iteration 1. BONUS

function getAllUniqueDirectors(moviesArray) {
    const result = moviesArray.map(eachMovie => {
        return eachMovie.director
    })

    const finalResult = result.filter((eachDirector, index) => {
        return result.indexOf(eachDirector) === index
    })
    return finalResult
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaBySpielberg = moviesArray.filter(eachMovie => {
        return eachMovie.director.includes("Spielberg") && eachMovie.genre.includes("Drama")
    })
    return dramaBySpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0
    } else {
        const totalScore = moviesArray.reduce((acc, eachMovie) => {
            if (!eachMovie.score) {
                return acc
            }
            return acc + eachMovie.score
        }, 0)
        let avgString = (totalScore / moviesArray.length).toFixed(2)
        return Number.parseFloat(avgString)
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes("Drama")
    })
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = JSON.parse(JSON.stringify(moviesArray))
    const sortedArray = newArray.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1
            } else {
                return -1
            }
        }
        return a.year - b.year
    })
    return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesTitles = moviesArray.map(eachMovie => eachMovie.title)
    moviesTitles.sort((a, b) => {
        if (a > b) {
            return 1
        } else {
            return -1
        }

    })
    return moviesTitles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesDurationMins = moviesArray.map(eachMovie => {
        const onlyDigits = eachMovie.duration.replace("h", "").replace("min", "").split(" ")

        let minutes = 0
        if (onlyDigits.length <= 1) {
            minutes = onlyDigits[0] * 60
        } else {
            minutes = onlyDigits.reduce((acc, time) => {
                return parseInt(acc) * 60 + parseInt(time)
            })
        }
        return {
            ...eachMovie,
            duration: minutes
        }

    })
    return moviesDurationMins
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null
    }
    let objectYears = [{ year: 1994, totalScore: [0] }]

    let arr = moviesArray.map(movie => {

        let yearExists = objectYears.find(e => e.year === movie.year)
        if (yearExists) {
            yearExists.totalScore.push(movie.score)
            console.log("Entrando en IF")
        } else {
            console.log("entrando en else el año es ", movie.year)
            objectYears.push({
                year: movie.year,
                totalScore: [movie.score]
            })
        }
    })

    objectYears.forEach(year => {
        let sum = 0
        sum += year.totalScore.reduce((a, b) => a + b)
        let avg = sum / year.totalScore.length
        year.totalScore = avg
    })

    let highYear = 0
    let highScore = 0

    objectYears.forEach(eachyear => {
        if (eachyear.totalScore > highScore) {
            highScore = eachyear.totalScore
            highYear = eachyear.year
        }
    })
    let messge = "The best year was " + highYear + " with an average score of " + highScore
    return messge
}
