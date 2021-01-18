// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
    return array.map(elm => elm.director)
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const directorsList = new Set(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    const filteredMovies = array.filter(elm => elm.director.toLowerCase() === "steven spielberg" && elm.genre.includes('Drama'))
    return filteredMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (array.length) {
        return Math.round((((array.reduce((acc, elm) => {
            if (elm.rate) {
                return acc + elm.rate
            } else {
                return acc
            }
        }, 0)) / array.length)) * 100) / 100
    } else {
        return 0
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    const onlyDramas = array.filter(elm => elm.genre.includes('Drama'))
    return ratesAverage(onlyDramas)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    const moviesCopy = JSON.parse(JSON.stringify(array))
    moviesCopy.sort((a, b) => a.year - b.year)
    return moviesCopy
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    return array.map(elm => elm.title).sort().slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    const moviesCopy = JSON.parse(JSON.stringify(array))
    moviesCopy.map(elm => elm.duration = new Number(elm.duration.substring(0, elm.duration.lastIndexOf('h'))) * 60 + new Number(elm.duration.substring(elm.duration.lastIndexOf(' ') + 1, elm.duration.lastIndexOf('min'))))
    return moviesCopy
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {

    if (array.length) {

        const moviesCopy = JSON.parse(JSON.stringify(array)) // deep copy

        moviesCopy.sort((a, b) => a.year - b.year) // sort moviesCopy by year

        let onlyYears = new Set(moviesCopy.map(elm => elm.year)) // new array thas has only the years in movies and without the ducplicates

        let yearsRated = [] // this will be an array of objects. Each object will have properties "year" and "average", with the corresponding average ratings of movies form that year

        onlyYears.forEach(elm => {
            let currentYear = elm // for every year included in movies
            let onlyMoviesOfCurrentYear = moviesCopy.filter(elm => elm.year === currentYear) // make a new array with only the movies from that year
            let averageRatePerYear = onlyMoviesOfCurrentYear.reduce((acc, elm) => acc + elm.rate, 0) / onlyMoviesOfCurrentYear.length // and then calculate the average of the ratings of those movies
            yearsRated.push({ year: elm, average: averageRatePerYear }) // to then push both year and average into the final array of objects
        })

        yearsRated.sort((a, b) => a.average - b.average).reverse() // after that sort the final array by average and reverse it so that the firts object is the year with highest average rating

        return console.log(`The best year was ${yearsRated[0].year} with an average rate of ${yearsRated[0].average}`)

    } else {
        return null
    }

}

bestYearAvg(movies)