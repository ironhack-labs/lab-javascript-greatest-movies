// The `movies` array from the file `src/data.js`.
/* console.log('movies: ', movies); */


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

    const allDirector = movies.map((movie) => movie.director)
    return allDirector

    /*     const cleanAllDirectors = allDirector.filter((eachElement, index) => {
            return allDirector.indexOf(eachElement) === index
        })
        return cleanAllDirectors */
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

    return movies.filter(eachMovies => eachMovies.director === 'Steven Spielberg' && eachMovies.genre.includes('Drama')).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

    if (movies.length === 0) {
        return 0
    }

    const scoreAvg = movies.reduce((acc, eachMovies) => {
        if (eachMovies.score === undefined) {
            avg = acc
        } else {
            avg = acc + eachMovies.score
        }
        return avg
    }, 0)

    return Number((scoreAvg / movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

    const dramaMovies = movies.filter((eachMovies) => {
        return eachMovies.genre.includes('Drama')
    })

    if (dramaMovies.length === 0) {
        return 0
    }

    const avgDrama = dramaMovies.reduce((acc, eachDramaMovies) => {
        return acc + eachDramaMovies.score
    }, 0)

    return Number((avgDrama / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

    const movieCopy = JSON.parse(JSON.stringify(movies))

    movieCopy.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else if (a.year === b.year) {
            if (a.title > b.title) {
                return 1
            } else {
                return -1
            }
        }
    })
    return movieCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

    const movieCopy = JSON.parse(JSON.stringify(movies))

    movieCopy.sort((a, b) => {
        if (a.title > b.title) {
            return 1
        } else {
            return -1
        }
    })

    const twentyMovies = movieCopy.splice(0, 20)
    const movieTitles = twentyMovies.map((eachTwenty) => {
        return eachTwenty.title
    })
    return movieTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        howManyMovies,
        scoresAverage,
        dramaMoviesScore,
        orderByYear,
        orderAlphabetically,
        turnHoursToMinutes,
        bestYearAvg,
    };
}