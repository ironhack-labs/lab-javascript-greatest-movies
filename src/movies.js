// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {


    const directors = moviesArray.map(function (eachDirector) {
        return eachDirector.director
    })
    return directors



}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const directorSteven = moviesArray.filter(function (eachDirector) {
        return eachDirector.director === 'Steven Spielberg' && eachDirector.genre.includes('Drama')
    })
    return directorSteven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const sumScore = moviesArray.reduce(function (acc, eachScore) {
        if (!eachScore.score) {
            return acc + 0
        } else {
            return acc + eachScore.score
        }

    }, 0)

    if (moviesArray.length === 0) {
        return 0
    }
    // const sumTotal = sumScore.toFixed(3)
    //return parseFloat(sumTotal) / moviesArray.length
    //const sumTotal = parseFloat(sumScore).toFixed(2)
    return parseFloat((sumScore / moviesArray.length).toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter(function (eachDrama) {
        return eachDrama.genre.includes('Drama')
    })
    return scoresAverage(drama)
    // const sumDrama = moviesArray.reduce(function (acc, eachScore) 

    // const sumScore = moviesArray.reduce((acc, eachRating) => {
    //     return (acc + eachRating.score) sumScore / moviesArray.length
    // }


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copy = JSON.parse(JSON.stringify(moviesArray))
    const orderYear = copy.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year
        }
    })
    return orderYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
