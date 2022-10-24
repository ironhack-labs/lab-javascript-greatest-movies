// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const allDirector = moviesArray.map((eachMovie) => {

        return eachMovie.director
    }

    )
    return allDirector
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    if (moviesArray === 0) {
        return 0
    }

    const moviesSpeilberg = moviesArray.filter(eachSpielberg => {
        return eachSpielberg.director === "Steven Spielberg" && eachSpielberg.genre.includes("Drama")
    })

    return moviesSpeilberg.length

}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {



    const average = moviesArray.reduce((acc, eachScore) => {
        return acc + eachScore.score
    }, 0)
    console.log(average)

    const averageTotal = average / moviesArray.length

    console.log(typeof +averageTotal.toFixed(2))

    return +averageTotal.toFixed(2)

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {


    const moviesDrama = moviesArray.filter(eachDrama => {
        return eachDrama.genre.includes("Drama")
    }
    )
    console.log(moviesDrama)

    return scoresAverage(moviesDrama)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const copiedMovies = JSON.parse(JSON.stringify(moviesArray))
    console.log(copiedMovies)

    copiedMovies.sort((a, b) => {
        return a.years.localeCompare(b.title)
    }
    )
    return copiedMovies




}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const onlyTitlle = moviesArray.map(eachTitle => eachTitle.title)

    onlyTitlle.sort((a, b) => {
        return a.localeCompare(b)
    }
    )
    return onlyTitlle.splice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
