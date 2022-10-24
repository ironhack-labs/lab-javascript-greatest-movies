// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(elem => elem.director)
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) return 0
    const stevenSpielbergDrama = moviesArray.filter(elem => {
        return elem.director === 'Steven Spielberg' && elem.genre.includes('Drama')
    })
    return stevenSpielbergDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0
    const haveScore = moviesArray.filter(elem => {
        if (typeof elem.score === 'number') {
            return elem
        }
    })
    // console.log(haveScore)
    const sum = haveScore.reduce((acc, elem) => acc + elem.score, 0)
    const avg = sum / moviesArray.length
    const result = avg.toFixed(2)
    // console.log(typeof result)
    return (+result)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const includesDrama = moviesArray.map(elem => {
        if (!elem.genre.includes('Drama')) return 0
    })

    const dramaMovies = moviesArray.filter(elem => elem.genre.includes('Drama'))
    const avg = scoresAverage(dramaMovies)

    return avg

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const arrCopy = JSON.parse(JSON.stringify(moviesArray))

    const orderedByYear = arrCopy.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year
        }
    })
    // console.log(orderedByYear)
    return orderedByYear

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const arrCopy = JSON.parse(JSON.stringify(moviesArray))
    const orderedAlphabetic = arrCopy.sort((a, b) => a.title.localeCompare(b.title)).map(elem => elem.title)
    // console.log(orderedAlphabetic)
    return orderedAlphabetic.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const result = moviesArray.map(elem => {
        let totalMin = 0
        elem.duration.split(' ').forEach(elem => {
            if (elem.includes('h')) {
                totalMin += parseInt(elem) * 60
            } else {
                totalMin += parseInt(elem)
            }
            console.log(totalMin)
            return totalMin
        })
        return {
            ...elem,
            duration: totalMin
        }

    })

    return result

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
