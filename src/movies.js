// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(elem => {
        return elem.director
    })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDirectedArray = moviesArray.filter(elem => {
        return elem.director.includes('Steven Spielberg') && elem.genre.includes('Drama')
    })
    return spielbergDirectedArray.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }


    const onlyScores = moviesArray.reduce((acc, elem) => {
        if (!elem.score) elem.score = 0
        return acc + elem.score
    }, 0)


    const movieAverage = onlyScores / moviesArray.length
    // console.log(typeof +movieAverage.toFixed(2))
    return Number(movieAverage.toFixed(2))

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaArray = moviesArray.filter(elem => {
        return elem.genre.includes('Drama')
    })

    if (dramaArray.length === 0) return 0

    const dramaArraySum = dramaArray.reduce((acc, elem) => {
        if (!elem.score) elem.score = 0
        return acc + elem.score
    }, 0)

    const dramaArrayAvg = dramaArraySum / dramaArray.length
    // console.log(Number(dramaArrayAvg.toFixed(1)))
    return Number(dramaArrayAvg.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    const moviesArrayTitles = moviesArrayCopy.filter(elem => {
        return elem.title
    })

    // console.log(moviesArrayTitlesCopy)

    moviesArrayCopy.sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year
        else return moviesArrayTitles.indeOf(a.moviesArrayTitles - b.moviesArrayTitles)
    })

    // console.log(moviesArrayCopy)                                  //¡¿No salen los titulos?!

    return moviesArrayCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    const moviesArrayTitles = moviesArrayCopy.map(elem => {
        return elem.title
    })

    moviesArrayTitles.sort()

    return moviesArrayTitles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    const moviesArrayCopyDuration = moviesArray.map(elem => {
        return elem.duration.split('h')
    })



    const hoursInMinutes = +(moviesArrayCopyDuration[0]) * 60              //NO CHANGE

    console.log(hoursInMinutes)

    console.log(moviesArrayCopyDuration)




    const splitedMoviesArrayCopyDuration = moviesArrayCopyDuration.map(elem => {
        return elem[1].slice()                                                            //¡¡¡¡¡REMOVE('MIN')!!!!!
    })

    console.log(splitedMoviesArrayCopyDuration)





    // moviesArrayCopy.duration = 

    return moviesArrayCopyDuration

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }


