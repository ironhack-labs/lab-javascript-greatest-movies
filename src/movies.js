// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directors = moviesArray.map((eachDirector) => {
        const directors = eachDirector.director

        return directors
    })

    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {


    const spielbergDramaMovies = moviesArray.filter((eachDramaMovie) => {

        return eachDramaMovie.genre.includes('Drama') && eachDramaMovie.director.includes('Steven Spielberg')

    })
    return spielbergDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (!moviesArray.length) {
        return 0
    }

    const sum = moviesArray.reduce((acc, eachScore) => {

        if (!eachScore.score) {

            eachScore.score = 0
        }

        return acc + eachScore.score





    }, 0)

    return Number((sum / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {


    const dramaMovies = moviesArray.filter((eachDramaMovie) => {

        return eachDramaMovie.genre.includes('Drama')

    })

    if (!dramaMovies.length) {

        return 0
    }

    const dramaMoviesScore = dramaMovies.reduce((acc, eachScore) => {



        if (!eachScore.score) {

            eachScore.score = 0
        }

        return acc + eachScore.score
    }, 0)

    return Number((dramaMoviesScore / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedArray = JSON.parse(JSON.stringify(moviesArray))

    sortedArray.sort(function (a, b) { return a.year - b.year })

    return sortedArray

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const sortedArray = JSON.parse(JSON.stringify(moviesArray))


    sortedArray.sort(function (a, b) {
        let titleA = a.title.toLowerCase()
        let titleB = b.title.toLowerCase()

        return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
    })

    return sortedArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
