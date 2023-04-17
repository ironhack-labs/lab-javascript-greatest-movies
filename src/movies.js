// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((eachDirector) => {
        return eachDirector.director
    })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spelbergMovies = moviesArray.filter((eachMovie) => {
        return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')
    })
    return spelbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0)
        return 0

    const sumScores = moviesArray.reduce((acc, eachScore) => {
        if (eachScore.score === '' || eachScore.score === undefined) {
            return acc
        }
        return acc + eachScore.score
    }, 0)
    const abc = sumScores / moviesArray.length
    const popino = abc.toFixed(2)
    const abc1 = Number(popino)
    return abc1


}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const filterMovies = moviesArray.filter((eachMovie) => {
        return eachMovie.genre.includes('Drama')
    })
    if (filterMovies.length == 0) {
        return 0
    }
    const averageDrama = filterMovies.reduce((acc, eachScore) => {
        return acc + eachScore.score
    }, 0)
    const averageRating = averageDrama / filterMovies.length
    const aveRatingDecimal = averageRating.toFixed(2)
    const aveRatingNumber = Number(aveRatingDecimal)
    return aveRatingNumber
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const realMoviesArray = JSON.parse(JSON.stringify(moviesArray))
    const orderYear = realMoviesArray.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year
        }
    })
    return orderYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const realMoviesArray = JSON.parse(JSON.stringify(moviesArray))
    const mapTitle = realMoviesArray.map((eachTitle) => {
        return eachTitle.title
    })

    mapTitle.sort()

    if (mapTitle.length > 20) {
        return mapTitle.slice(0, 20)
    }
    return mapTitle
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }








