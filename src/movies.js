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

    const dramaSS = moviesArray.filter(eachMovie => {

        return eachMovie.director.toLowerCase() === 'steven spielberg'
            && eachMovie.genre.includes('Drama')

    })
    console.log(dramaSS)


    return dramaSS.length

}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const sumScores = moviesArray.reduce((acc, eachMovie) => {
        return acc + eachMovie.score
    }, 0)


    const total = sumScores / moviesArray.length
    const totalFixed = total.toFixed(2)

    console.log(totalFixed)
    return + totalFixed   // para cambiar un string a numero se puede poner un + por delante   

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes('Drama')
            && eachMovie.score
    })

    const dramaScores = dramaMovies.reduce((acc, eachDramaMovie) => {
        return acc + eachDramaMovie.score
    }, 0)

    return dramaScores / dramaMovies.length

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    const moviesByYear = moviesArrayCopy.sort((a, b) => a.year - b.year)

    console.log(moviesByYear)

    const moviesByName = moviesByYear.sort((a, b) => a.title - b.title)

    console.log(moviesByName)

    return moviesByName

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    const allTitle = moviesArrayCopy.map(eachMovie => {
        return eachMovie.title
    })

    const movieByTitle = allTitle.sort()

    if (movieByTitle > 20) {
        return movieByTitle.slice(0, 21)

    }
    return movieByTitle


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    let copy = JSON.parse(JSON.stringify(moviesArray))
    let duration = copy.map(elm => {
        const copyElm = {
            ...elm
        }

        if (elm.duration.includes("h") && elm.duration.includes("min")) {
            copyElm.duration = parseInt(elm.duration.substr(0, 1)) * 60 + parseInt(elm.duration.substr(3, 5))
            return copyElm
        } else if (elm.duration.includes("h")) {
            copyElm.duration = parseInt(elm.duration.substr(0, 1)) * 60
            return copyElm
        } else if (elm.duration.includes("min")) {
            copyElm.duration = parseInt(elm.duration.substr(-5, 2))
            return copyElm
        }
    })
    return duration

    // const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    // const hora = moviesArrayCopy.duration

    // const parts = hora.split('')

    // const duratioByminutes = parseInt(parts[0]) * 60 + parseInt(parts[1])

    // console.log(duratioByminutes)

    // return duratioByminutes

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
