// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    return moviesArray.map(elm => elm.director)
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function unifyDirectorsArray(directorsArray) {
    const unifiedDirectorsArray = []
    directorsArray.forEach(elm => {
        if (!unifiedDirectorsArray.includes(elm)) {
            unifiedDirectorsArray.push(elm)
        }
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const wantedDirector = 'Steven Spielberg'
    const wantedGenre = 'Drama'
    filteredArray = moviesArray.filter(elm => (elm.director === wantedDirector) && (elm.genre.includes(wantedGenre)))
    return filteredArray.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArray) {
    if (moviesArray.length === 0) return 0
    const summedAverages = moviesArray.reduce((acc, elm) => {
        if (!elm.rate) {
            return acc
        }
        return acc + elm.rate
    }, 0)
    const avg = summedAverages / moviesArray.length
    return Number(avg.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
    if (moviesArray.length === 0) return 0
    const dramaArray = moviesArray.filter(elm => elm.genre.includes('Drama'))
    if (dramaArray.length === 0) return 0
    const dramaArraySum = dramaArray.reduce((acc, elm) => {
        if (!elm.rate) {
            return acc
        }
        return acc + elm.rate
    }, 0)
    const avg = dramaArraySum / dramaArray.length
    return Number(avg.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sorted = [...moviesArray]
    sorted.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year
    })
    return sorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedArray = [...moviesArray]
    sortedArray.sort((a, b) => a.title.localeCompare(b.title))
    const titlesArray = sortedArray.map(elm => elm.title)
    return titlesArray.filter((elm, idx) => {
        if (idx < 20) {
            return elm
        }
    })
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const hoursRegExp = /(\d*)(?:h)/
    const minsRegExp = /(\d*)(?:min)/
    let durationInMinutes = 0
    const newArr = JSON.parse(JSON.stringify(moviesArray))
    return newArr.map(elm => {
        durationInMinutes = 0
        if (hoursRegExp.test(elm.duration)) {
            durationInMinutes += 60 * elm.duration.match(hoursRegExp)[1]
        }
        if (minsRegExp.test(elm.duration)) {
            durationInMinutes += Number(elm.duration.match(minsRegExp)[1])
        }
        elm.duration = durationInMinutes
        return elm
    })
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
// const testArr = [{
//         "title": "The Shawshank Redemption",
//         "year": 1994,
//         "director": "Frank Darabont",
//         "duration": "2h 22min",
//         "genre": [
//             "Crime",
//             "Drama"
//         ],
//         "rate": 9.3
//     },
//     {
//         "title": "The Godfather",
//         "year": 1972,
//         "director": "Francis Ford Coppola",
//         "duration": "2h 55min",
//         "genre": [
//             "Crime",
//             "Drama"
//         ],
//         "rate": 9.2
//     },
//     {
//         "title": "The Godfather: Part II",
//         "year": 1974,
//         "director": "Francis Ford Coppola",
//         "duration": "3h 22min",
//         "genre": [
//             "Crime",
//             "Drama"
//         ],
//         "rate": 9
//     },
// ]

function bestYearAvg(testArr) {
    if (testArr.length === 0) return null
    const years = {}
    let bestYear
    let avgArray
    testArr.map(elm => {
        if (!years.hasOwnProperty(elm.year)) {
            years[elm.year] = [elm.rate]
        } else {
            years[elm.year].push(elm.rate)
        }
        avgArray = Object.entries(years).map(elm => {
            const sum = elm[1].reduce((acc, elm) => acc + elm)
            return Number((sum / elm[1].length).toFixed(2))
        })
        const bestAvgIndex = avgArray.indexOf(Math.max(...avgArray))
        console.log(years)
        bestYear = Object.keys(years)[bestAvgIndex]


    })
    const answer = `The best year was ${bestYear} with an average rate of ${Math.max(...avgArray)}`
    return answer
}