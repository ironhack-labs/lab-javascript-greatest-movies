// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray.map((eachMovie) => {
        console.log(eachMovie.director)
        return eachMovie.director
    })

    return allDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const stevenSpielbergDramaMovies = moviesArray.filter(eachMovie => {
        return eachMovie.director.includes("Steven Spielberg") && eachMovie.genre.includes("Drama")
    })

    console.log(stevenSpielbergDramaMovies)

    return stevenSpielbergDramaMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (!moviesArray.length) {
        return 0
    }

    const scoresSum = moviesArray.reduce((acc, eachMovie) => {
        if (!eachMovie.score) {
            return acc + 0
        }
        return acc + eachMovie.score
    }, 0)

    return Number((scoresSum / moviesArray.length).toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes("Drama")
    })

    if (!dramaMovies.length) {
        return 0
    }

    const dramaScoresSum = dramaMovies.reduce((acc, eachMovie) => {
        if (!eachMovie.score) {
            return acc + 0
        }
        return acc + eachMovie.score
    }, 0)

    return Number((dramaScoresSum / dramaMovies.length).toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    moviesArrayCopy.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1
            }
        }
        return a.year - b.year
    })

    return moviesArrayCopy
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const moviesTitles = moviesArray.map(eachMovie => {
        return eachMovie.title
    })

    const moviesTitlesTop20 = moviesTitles.sort().slice(0,20)
    
    return moviesTitlesTop20
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    moviesArrayCopy.forEach(eachMovie => {

        console.log("Antes del cambio - ",eachMovie.duration)

        const indexH = eachMovie.duration.indexOf("h")
        console.log("Index 'h': ", indexH)

        hours = Number(eachMovie.duration.slice(0, indexH))
        console.log("Horas: ", hours)


        const indexMin = eachMovie.duration.indexOf("min")
        console.log("Index 'min': ", indexMin)

        minutes = Number(eachMovie.duration.slice(-indexMin, -3))
        console.log("Minutos: ", minutes)

        eachMovie.duration = hours * 60 + minutes
        console.log("Despues del cambio - ",eachMovie.duration)

        console.log("----------")
    });

    return moviesArrayCopy
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    if (!moviesArray.length) {
        return null
    }
    
}
