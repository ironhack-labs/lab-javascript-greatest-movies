// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((eachMovie) => {

        return eachMovie.director
    })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let count = 0
    const dramaSpielbergMovies = moviesArray.filter((eachMovie) => {

        if (eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')) {
            count++
            return true
        } else
            return false

    })
    return count
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0
    }

    const avgScore = moviesArray.reduce((acc, eachMovie) => {
        if (!eachMovie.score) {
            eachMovie.score = 0
        }
        return acc + eachMovie.score
    }, 0)
    return Number((avgScore / moviesArray.length).toFixed(2))


}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((eachMovie) => {
        return eachMovie.genre.includes('Drama')

    })

    if (!dramaMovies.length) {
        return 0
    }



    const averageDrama = dramaMovies.reduce((acc, eachMovie1) => {
        return acc + eachMovie1.score
    }, 0)
    return Number((averageDrama / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    moviesArrayCopy.sort((a, b) => a.year - b.year)
    const arrangedByTitle = moviesArrayCopy.sort((a, b) => {
        if (a.year === b.year && a.title < b.title) {
            return -1;
        }
        if (a.year === b.year && a.title > b.title) {
            return 1;
        }
        else {
            return 0
        }
    })
    return arrangedByTitle

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesArrayCopy2 = moviesArray.map((eachMovie) => {
        return eachMovie.title
    })
    if (moviesArrayCopy2.length > 20) {
        moviesArrayCopy2 = moviesArrayCopy2.slice(0, 20)
    }
    return moviesArrayCopy2.sort()
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }




