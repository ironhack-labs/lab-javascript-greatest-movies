// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directorsName = moviesArray.map(function (eachDirectorName) {

        return eachDirectorName.director
    })
    return directorsName
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const dramaSpielbergFilms = moviesArray.filter(function (eachspielbergFilms) {
        return eachspielbergFilms.genre.includes('Drama') && eachspielbergFilms.director.includes('Spielberg')
    })

    return dramaSpielbergFilms.length
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (!moviesArray.length) { return 0 }
    const sumScore = moviesArray.reduce(function (acc, eachMovie) {
        if (!eachMovie.score) {
            eachMovie.score = 0
        }
        return acc + eachMovie.score
    }, 0)
    const totalAverage = ((sumScore / moviesArray.length).toFixed(2))
    return parseFloat(totalAverage)
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function (eachMovie) {

        return eachMovie.genre.includes('Drama')
    })

    if (!dramaMovies.length) {
        return 0
    }

    const totalDramaMovies = dramaMovies.reduce(function (acc, eachDramaMovie) {
        if (!eachDramaMovie.genre) {
            eachDramaMovie.genre = 0
        }
        return acc + eachDramaMovie.score
    }, 0)
    const totalAverage = (totalDramaMovies / dramaMovies.length).toFixed(2)
    return parseFloat(totalAverage)
}




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const newMoviesArray = JSON.parse(JSON.stringify(moviesArray))

    newMoviesArray.sort((a, b) => {

        if (a.year > b.year) {
            return 1
        }
        if (a.year < b.year) {
            return -1
        } else {

            if (a.title > b.title) {

                return 1
            }
            if (a.title < b.title) {
                return -1
            }
        }

    })
    console.log(newMoviesArray)
    return newMoviesArray
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const newMoviesArray = JSON.parse(JSON.stringify(moviesArray))


    newMoviesArray.sort((a, b) => {

        if (a.title > b.title) {

            return 1
        }
        if (a.title < b.title) {
            return -1
        }
        return 0

    })
    const onlyTitle = newMoviesArray.map(function (eachMovie) {

        return eachMovie.title
    })


    return onlyTitle.slice(0, 20)


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
