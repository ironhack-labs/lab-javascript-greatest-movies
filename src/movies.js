// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movies) => {
        return movies.director
    })

    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const steven = moviesArray.filter((movies) => {

        return movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')
    })

    return steven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    // const cleanArray = moviesArray.filter((elm) => {
    //     if (typeof elm.score === 'number') {
    //         return elm
    //     }
    // })


    if (moviesArray.length === 0) {
        return 0
    }

    const media = moviesArray.reduce((acc, eachScore) => {

        if (!eachScore.score) {

            return acc
        }
        else {

            return acc + eachScore.score
        }
    }, 0)

    const average2 = parseFloat((media / moviesArray.length).toFixed(2))

    return average2
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const drama = moviesArray.filter((movies) => {

        return movies.genre.includes('Drama')

    })

    return scoresAverage(drama)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const orderByYearClone = JSON.parse(JSON.stringify(moviesArray))

    orderByYearClone.sort((a, b) => {
        if (a.year == b.year) {
            return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year
        }
    })

    return orderByYearClone


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const orderAlphabeticallyClone = JSON.parse(JSON.stringify(moviesArray))

    const result = orderAlphabeticallyClone.sort((a, b) => a.title.localeCompare(b.title)).map(elm => elm.title)

    return result.slice(0, 20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
