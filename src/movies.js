// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {

    const onlyDirectorsArray = moviesArray.map((eachFilm) => {
        return eachFilm.director
    })
    return onlyDirectorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenDramaFilms = moviesArray.filter((eachFilm) => {
        return eachFilm.director === "Steven Spielberg" && eachFilm.genre.includes("Drama")
    })
    const stevenDramaFilmsNumber = stevenDramaFilms.length
    return stevenDramaFilmsNumber
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }

    const onlyScoresArray = moviesArray.reduce((cont, eachFilm) => {
        let score = eachFilm.score
        if (typeof score === "undefined" || isNaN(score)) {
            score = 0
        }
        return cont + score

    }, 0)
    return +(onlyScoresArray / moviesArray.length).toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMoviesArray = moviesArray.filter(eachFilm => eachFilm.genre.includes("Drama"))


    if (dramaMoviesArray.length === 0) {
        return 0
    }

    const dramaMoviesSum = dramaMoviesArray.reduce((cont, eachFilm) => {
        return cont + eachFilm.score
    }, 0)
    console.log(dramaMoviesSum)
    const avgDramaScore = dramaMoviesSum / dramaMoviesArray.length

    return Number(avgDramaScore.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    const sorteredFilmsByYear = moviesArrayCopy.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year
        } else {
            return a.title.localeCompare(b.title)
        }
    })
    return sorteredFilmsByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const alphabeticArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    const alphabetecallyOrderedArray = alphabeticArrayCopy.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })

    const top20Films = alphabetecallyOrderedArray.slice(0, 20)
    const top20FilmsTitles = top20Films.map(eachFilm => eachFilm.title)
    return top20FilmsTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const newMoviesArray = moviesArray.map((eachMovie) => {
        const splitedDurations = eachMovie.duration.split(" ")
        const filmsFuckingDuration = splitedDurations.reduce((cont, eachDuration) => {
            if (eachDuration.includes("h")) {
                return cont + parseInt(eachDuration) * 60
            } else if (eachDuration.includes("min")) {
                return cont + parseInt(eachDuration)
            }
        }, 0)

        return {
            duration: filmsFuckingDuration
        }
    })
    return newMoviesArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {



}


