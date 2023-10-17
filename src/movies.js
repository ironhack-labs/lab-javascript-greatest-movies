// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(eachMovie => {
        return eachMovie.director
    })
    return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovies = moviesArray.filter(eachMovie => {
        if (eachMovie.genre.includes('Drama') && eachMovie.director === 'Steven Spielberg') {
            return true
        }
    })
    return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0
    }
    const scoreSum = moviesArray.reduce((acc, eachMovie) => {
        if (!eachMovie.score) {
            return acc + 0
        }
        return acc + eachMovie.score
    }, 0)
    const avg = scoreSum / moviesArray.length
    return +parseFloat(avg).toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes('Drama')
    })



    const scoreDramaSum = dramaMovies.reduce((acc, eachMovie) => {
        if (eachMovie.genre.includes('Drama') && eachMovie) {
            return acc + eachMovie.score
        }
    }, 0)
    const dramaAvg = scoreDramaSum / dramaMovies.length
    if (!dramaMovies.length) {
        return 0
    }
    return +parseFloat(dramaAvg).toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    const moviesByTitle = moviesArrayCopy.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year
        }
        return (a.title).localeCompare(b.title)
    })

    return moviesByTitle
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    const moviesByTitle = moviesArrayCopy.sort((a, b) => {
        return (a.title).localeCompare(b.title)
    })
    const moviesOnlyTitle = moviesByTitle.map(eachMovie => {
        return eachMovie.title
    })

    if (moviesOnlyTitle.length > 20) {
        return moviesOnlyTitle.slice(0, 20)
    }
    return moviesOnlyTitle
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const hoursToNum = moviesArray.map(eachMovie => {
        timeArr = eachMovie.duration.replace('min', '').replace('h', '').split(' ')
        let finalTime = 0
        if (timeArr.length <= 1) {
            finalTime = timeArr[0] * 60
        } else {
            finalTime = timeArr.reduce((acc, eachData) => {
                return parseInt(acc) * 60 + parseInt(eachData)
            })
        }
        return {
            ...eachMovie,
            duration: finalTime
        }
    })
    return hoursToNum
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null
    function getAvg(year) {
        let totalMovies = 0
        let sumScore = 0
        let avg = 0
        moviesArray.forEach(eachMovie => {
            if (eachMovie.year === year) {
                totalMovies++
                sumScore += eachMovie.score
            }

        })
        return sumScore / totalMovies
    }

    const arr = moviesArray.map(eachMovie => {
        return {
            year: eachMovie.year,
            score: getAvg(eachMovie.year)
        }
    })
    let bestScore = 0
    let bestYear = 0
    arr.forEach(eachYear => {
        if (bestScore < eachYear.score) {
            bestScore = eachYear.score
            bestYear = eachYear.year
        }

    })
    return `The best year was ${bestYear} with an average score of ${bestScore}`
}
