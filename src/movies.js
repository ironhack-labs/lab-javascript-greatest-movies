// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorArr = moviesArray.map((eachMovie) => {
        return eachMovie.director
    })
    return directorArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const onlySpielbergDramaFilms = moviesArray.filter((eachMovie) => {
        return eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")
    })
    return onlySpielbergDramaFilms.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0
    }
    const scoreSum = moviesArray.reduce((acc, eachMovie) => {
        if (!eachMovie.score) {
            eachMovie.score = 0
        }
        return acc + eachMovie.score
    }, 0)

    return Number((scoreSum / moviesArray.length).toFixed(2))





}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((eachMovie) => {
        return eachMovie.genre.includes("Drama")
    })

    if (!dramaMovies.length) {
        return 0
    }
    const dramaScoreSum = dramaMovies.reduce((acc, eachMovie) => {
        if (!eachMovie.score) {
            eachMovie.score = 0
        }
        return acc + eachMovie.score
    }, 0)


    return Number((dramaScoreSum / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    copyMoviesArr = JSON.parse(JSON.stringify(moviesArray))

    copyMoviesArr.sort(function (a, b) {
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

    return copyMoviesArr

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    copyMoviesArr = JSON.parse(JSON.stringify(moviesArray))

    copyMoviesArr.sort((a, b) => {
        if (a.title > b.title) {
            return 1
        }
        if (a.title < b.title) {
            return -1
        }
        return 0
    })

    const twentyAlphabeticMovies = copyMoviesArr.filter((eachMovie, index) => {
        return index < 20
    })
    const onlyStringsArr = []
    twentyAlphabeticMovies.forEach((eachTwentyMovies) => {
        onlyStringsArr.push(eachTwentyMovies.title)
    })
    return onlyStringsArr
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const minuteTimed = moviesArray.map((eachMovie) => {
        eachMovie.duration = Number(moviesArray.duration.slice(0, 1)) * 60 + Number(moviesArray.duration.slice(3, 5))
    })
    console.log(minuteTimed)
    return minuteTimed
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
