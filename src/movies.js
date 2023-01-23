// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(element => {
        return element.director
    })
    console.log(allDirectors)
    // BONUSISH
    // allDirectors.reduce((acc, element) => {
    //     if (element.)
    //     return acc.includes(element)
    // })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramas = moviesArray.filter(element => {
        return (element.director === 'Steven Spielberg') && (element.genre.includes('Drama'))
    })
    return spielbergDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const scores = moviesArray.reduce((acc, element) => {
        if (!element.score) element.score = 0
        return acc + element.score
    }, 0)
    const roundedAverage = scores / moviesArray.length
    return +roundedAverage.toFixed(2)       // + transforms string into integer, equals to Number()
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaArray = moviesArray.filter(element => {
        return element.genre.includes('Drama')
    })
    const dramaScores = dramaArray.reduce((acc, element) => {
        if (!element.score) element.score = 0
        return acc + element.score
    }, 0)
    if (dramaArray.length === 0) return 0
    const roundedDramaScores = dramaScores / dramaArray.length
    return Number(roundedDramaScores.toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray))
    const moviesCopyNames = moviesCopy.map(element => {
        return element.title
    })
    moviesCopy.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year
        } else {
            return moviesCopyNames.indexOf(a.moviesCopyNames - b.moviesCopyNames)
        }
    })
    // moviesCopy.sort((a, b) => {
    //     return a.year - b.year
    // })
    // moviesCopy.sort((a, b) => {
    //     return a.title - b.title
    // })
    console.log(moviesCopy)
    // moviesCopy.year.sort()
    // console.log(moviesCopy)
    return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray))
    const moviesCopyTitles = moviesCopy.map(element => {
        return element.title
    })
    const moviesCopyTitleOrdered = moviesCopyTitles.sort()

    const slicedTitlesArray = moviesCopyTitleOrdered.slice(0, 20)
    return slicedTitlesArray

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray))

    moviesCopy.map(element => {
        const duration = element.duration
        const hours = Number(duration.slice(0, 1))  //  TO DO: STUDY INDEX POSITIONS & indexOf !!!
        console.log(hours)
        const minutes = Number(duration.slice(3, -3))   //  TO DO: STUDY INDEX POSITIONS & indexOf !!!
        // console.log(minutes)
        element.duration = (hours * 60) + minutes
        return element
    })


    return moviesCopy
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null
    }
}
