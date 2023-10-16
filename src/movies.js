// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const variable1 = moviesArray.map(parametro1 => {
        //console.log(argumento1)
        //console.log(argumento1.director)
        return parametro1.director
    })
    return variable1
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const variable = moviesArray.filter(parametro2 => {
        if (parametro2.director === 'Steven Spielberg')
            return parametro2
    })
    const variable3 = variable.filter(parametro3 => {
        if (parametro3.genre.includes('Drama'))
            return parametro3
    })

    //console.log(variable3.length)
    return variable3.length
}





// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0

    }

    const variable = moviesArray.reduce((acc, sum) => {
        if (typeof sum.score !== 'number') {
            return acc
        }
        return acc + sum.score
    }, 0)

    return parseFloat((variable / moviesArray.length).toFixed(2))

    //console.log(variable)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {


    const variable3 = moviesArray.filter(parametro3 => {
        if (parametro3.genre.includes('Drama'))
            return parametro3
    })

    return scoresAverage(variable3)



}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const copi = JSON.parse(JSON.stringify(moviesArray))


    copi.sort((a, b) => {
        if (a.year < b.year) {
            return -1
        }
    })
    copi.sort((a, b) => {
        if (a.year === b.year) {
            return -1
        }
    })


    return copi
    console.log(copi)


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const copi = JSON.parse(JSON.stringify(moviesArray))


    copi.sort((a, b) => {
        if (a.title < b.title) {
            return -1
        }
    })

    // console.log(copi)
    return copi.splice(0, 20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
