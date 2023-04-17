// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const finalDirectors = moviesArray.map((eachDirectors) => {
        const directorsName = eachDirectors.director
        return directorsName

    })

    return finalDirectors

}





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const spielbergMovies = moviesArray.filter((eachSpielberg) => {

        const spielbergDirector = eachSpielberg.director.includes('Spielberg') && eachSpielberg.genre.includes('Drama')
        return spielbergDirector
    })

    return spielbergMovies.length

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const sumScores = moviesArray.reduce((acc, eachMovie) => {

        if (!moviesArray.length) {

            return 0

        }

        if (eachMovie.score === '' || eachMovie.score === undefined) {

            return acc

        }

        return acc + eachMovie.score / moviesArray.length

    }, 0)

    const sumRound = sumScores.toFixed(2)

    const sumFinal = Number(sumRound)

    return sumFinal
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((eachDrama) => {

        if (!eachDrama.genre.includes('Drama')) {
            return 0
        }
        const filmsDrama = eachDrama.genre.includes('Drama')
        return filmsDrama
    })

    const sumScores = dramaMovies.reduce((acc, eachMovie) => {

        return acc + eachMovie.score / dramaMovies.length

    }, 0)


    return +sumScores.toFixed(2)


}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const movieCopy = JSON.parse(JSON.stringify(moviesArray))

    movieCopy.sort((a, b) => {

        if (a.year < b.year) {
            return -1
        }
        if (a.year > b.year) {
            return 1
        }
        if (a.title < b.title) {
            return -1
        } if (a.title > b.title) {
            return 1
        }
        return 0

    })

    return movieCopy

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const finalAlpha = moviesArray.map((eachAlpha) => {
        const titleFilms = eachAlpha.title
        return titleFilms

    })

    finalAlpha.sort()

    if (finalAlpha > 20) {
        return finalAlpha
    }

    return finalAlpha.slice(0, 20)


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
