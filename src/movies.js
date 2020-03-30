/* eslint no-restricted-globals: 'off' */



// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


const orderByYear = (movies) => {
    let newArrayByYear = [...movies]
    return newArrayByYear.sort((movieA, movieB) => {
        if (movieA.year == movieB.year) {
            return movieA.title.localeCompare(movieB.title)
        } else {
            return movieA.year - movieB.year
        }
    })
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = (movies) => {
    let filteredMovies = movies.filter(elm => elm.director.includes("Steven Spielberg") && elm.genre.includes("Drama"))
    return filteredMovies.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
    let ArrayAlphabetically = [...movies]
    let resut = ArrayAlphabetically.sort((movieA, movieB) => movieA.title.localeCompare(movieB.title)).map(elm => elm.title).slice(0, 20)
    return resut
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {
    if (movies == movies.length) {
        return 0
    } else {
        const rates = movies.reduce((acc, elm) => {
            if (!elm.rate) {
                return acc += 0
            }
            return acc + elm.rate
        }, 0)
        const rounValue = Math.round((rates / movies.length) * 100) / 100;

        return rounValue
    }
}


// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
    let dramaMovies = movies.filter(elm => elm.genre.includes("Drama") && elm.genre.length == 1)
    if (dramaMovies.length == 0) { return 0 }
    else {
        let dramaRate = dramaMovies.reduce((acc, elm) => acc + elm.rate, 0)
        return (Math.round((dramaRate / dramaMovies.length) * 100) / 100)
    }
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (movies) => {
    let durationInMinutes = 0
    let mappedArray = movies.map(elm => {
        let durationMovie = elm.duration.split(" ")
        console.log("duration", durationMovie)
        if (durationMovie.length == 1) {
            if (durationMovie[0].includes('h')) {
                console.log('entra')
                durationInMinutes = parseInt(durationMovie[0]) * 60
            } else { durationInMinutes = parseInt(durationMovie[0]) }
        } else { durationInMinutes = parseInt(durationMovie[0]) * 60 + parseInt(durationMovie[1]) }
        return { ...elm, duration: durationInMinutes }
    })
    console.log('mapped', mappedArray)
    return mappedArray
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
