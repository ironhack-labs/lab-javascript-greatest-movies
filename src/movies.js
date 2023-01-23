// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(eachMovie => {
        return eachMovie.director
    })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const allSpielberg = moviesArray.filter(eachMovie => {
        return eachMovie.director == 'Steven Spielberg'
    })

    const allDrama = allSpielberg.filter(eachMovie => {
        return eachMovie.genre.includes("Drama")
    })

    return allDrama.length
}




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length > 0) {
        const sumRates = moviesArray.reduce((acc, eachRate) => {
            if (typeof eachRate.score === 'number') {
                return acc + eachRate.score
            }
            return acc + 0
        }, 0);

        const aveScore = sumRates / moviesArray.length
        return +(aveScore.toFixed(2))

    } else {
        return 0

    }

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {



    const dramaMovies = moviesArray.filter(eachDrama => {
        return eachDrama.genre.includes('Drama')
    })
    const sumRates = dramaMovies.reduce((acc, eachRate) => {
        if (typeof eachRate.score === 'number') {
            return acc + eachRate.score
        }
        return acc + 0
    }, 0);

    const aveScore = sumRates / dramaMovies.length
    return +(aveScore.toFixed(2))
}




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const cloneMovies = JSON.parse(JSON.stringify(moviesArray));
    cloneMovies.sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year
        return a.title.localeCompare(b.title)
    });

    return cloneMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const cloneAlpha = JSON.parse(JSON.stringify(moviesArray))

    cloneAlpha.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })

    const newAlpha = cloneAlpha.slice(0, 20)

    const newTop = newAlpha.map(eachTitle => {
        return eachTitle.title
    })

    return newTop

}






// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
