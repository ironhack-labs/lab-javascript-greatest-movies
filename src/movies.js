// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(element => element.director)
    return directors
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMoviesSpielberg = moviesArray.filter(element => {
        const stevenSpilberg = element.director.toLowerCase() === 'steven spielberg'
        const drama = element.genre.includes('Drama')
        const movies = stevenSpilberg && drama
        return movies
    })
    return dramaMoviesSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0
    const scoreAvg = moviesArray.reduce((acc, element) => {
        if (!element.score) element.score = 0
        return acc + element.score
    }, 0)
    const totalAvg = (scoreAvg / moviesArray.length)
    return +totalAvg.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const allDramaMovies = moviesArray.filter(elm => {
        return elm.genre.includes('Drama')
    })
    if (!allDramaMovies.length) return 0
    const dramaScoreAvg = allDramaMovies.reduce((acc, elm) => {
        return acc + elm.score
    }, 0)
    return +(dramaScoreAvg / allDramaMovies.length).toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    const moviesOrdered = moviesArrayCopy.sort((a, b) => {
        if (a.title < b.title) return -1
        else if (a.title > b.title) return 1
    })
    const moviesOrderedYear = moviesOrdered.sort((a, b) => {
        return a.year - b.year
    })
    return moviesArrayCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    const titles = moviesArray.map(element => element.title)
    const orderAlphabetically = titles.sort((a, b) => {
        return a.localeCompare(b)
    })
    return orderAlphabetically.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    const duration = moviesArrayCopy.map(element => {
        const copyElement = {
            ...element
        }
        if (element.duration.includes("h") && element.duration.includes("min")) {
            copyElement.duration = parseInt(element.duration.substr(0, 1)) * 60 + parseInt(element.duration.substr(3, 5))
            return copyElement
        } else if (element.duration.includes("h")) {
            copyElement.duration = parseInt(element.duration.substr(0, 1)) * 60
            return copyElement
        }
    })
    return duration
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    const orderedByYear = orderByYear(moviesArrayCopy)
    const finalArr = []
    orderedByYear.forEach(elm => {
        let year = elm.year
        const sameYearArr = orderedByYear.filter(sameYear => sameYear.year === year)
        let totalScore = 0
        sameYearArr.forEach(elm => totalScore += elm.score)
        const yearFilms = {
            year: year,
            score: totalScore / sameYearArr.length
        }
        return finalArr.push(yearFilms)
    })
    finalArr.sort((a, b) => b.score - a.score)
    console.log(finalArr)
    return `The best year was ${finalArr[0].year} with an average score of ${finalArr[0].score}`
}
