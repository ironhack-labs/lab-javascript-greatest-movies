// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    noDuplicates = []
    const allDirectors = moviesArray.map(eachMovie => {

        if (noDuplicates.indexOf(eachMovie.director) === -1) {
            noDuplicates.push(eachMovie.director)
        }
        return eachMovie.director


    })
    return noDuplicates
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const totalMovies = moviesArray.filter(eachMovie => eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama'))
    return totalMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0
    const scores = moviesArray.reduce((acc, eachMovie) => {
        if (!eachMovie.score) eachMovie.score = 0
        return acc + eachMovie.score
    }, 0)
    const media = scores / moviesArray.length
    const twoDecimals = media.toFixed(2)
    return +twoDecimals
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const onlyDrama = moviesArray.filter(eachMovie => eachMovie.genre.includes('Drama'))
    return scoresAverage(onlyDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    const orderAlphabetically = moviesArrayCopy.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
    })
    const orderYears = orderAlphabetically.sort((a, b) => a.year - b.year)

    return orderYears
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    const orderAlphabetically = moviesArrayCopy.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
    })
    const newArr = []
    orderAlphabetically.forEach((elm, i) => {
        if (i < 20) newArr.push(elm.title)
    })
    return newArr
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    const newArr = moviesArrayCopy.map(eachMovie => {
        if (eachMovie.duration.includes("h") && eachMovie.duration.includes("min")) {
            moviesArrayCopy.duration = parseInt(eachMovie.duration.substr(0, 1)) * 60 + parseInt(eachMovie.duration.substr(3, 5))
            return moviesArrayCopy
        } else if (eachMovie.duration.includes("h")) {
            moviesArrayCopy.duration = parseInt(eachMovie.duration.substr(0, 1)) * 60
            return moviesArrayCopy
        }
        return duration
    })
    return newArr
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
