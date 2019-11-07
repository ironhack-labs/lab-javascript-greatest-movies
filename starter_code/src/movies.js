/* eslint no-restricted-globals: 'off' */
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let orderByYearArr = arr.slice().sort((a, b) => {
        // Sort by year
        // If the first item has a higher number, move it down
        // If the first item has a lower number, move it up
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;

        // If the year number is the same between both items, sort alphabetically
        // If the first item comes first in the alphabet, move it up
        // Otherwise move it down
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
    })
    return orderByYearArr
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    if (arr !== undefined && arr !== []) {
        let stevenMovies = arr.slice().filter(movie => (movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")))
        return stevenMovies.length
    }
    return 0
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    let titleArr = []
    if (arr !== undefined && arr !== []) {
        let sortedArr = arr.slice().sort((a, b) => {
            if (a.title > b.title) return 1
            if (a.title < b.title) return -1
        })
        if (sortedArr.length < 20) {
            for (let i = 0; i < sortedArr.length; i++) {
                titleArr.push(`${sortedArr[i].title}`)
                console.log(sortedArr[i].title)
            }
        } else {
            for (let i = 0; i < 20; i++) {
                titleArr.push(`${sortedArr[i].title}`)
                console.log(sortedArr[i].title)
            }
        }
    }
    return titleArr
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if (arr.length !== 0) {
        let averageRate = arr.slice().reduce((a, b) => {
            if (b.rate === undefined) return a
            else return a + b.rate
        }, 0)
        averageRate = averageRate / arr.length
        return Number(averageRate.toFixed(2))
    }
    return 0
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    let dramaMovies = arr.slice().filter(movie => (movie.genre.includes("Drama")))
    if (dramaMovies.length !== 0 && dramaMovies.rate !== NaN) {
        let averageRate = dramaMovies.reduce((a, b) => {
            if (b.rate === undefined) return a
             return a + b.rate
        }, 0)
        averageRate = averageRate / dramaMovies.length
        return Number(averageRate.toFixed(2))
    }
    return 0
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    let hours = 0, minutes = 0
    let parsedTimeArr = arr.map( el => {
        hours = (el.duration.includes('h')) ? Number(el.duration.substring(0, el.duration.indexOf('h'))) * 60 : 0
        minutes = (el.duration.includes('min')) ? Number(el.duration.substring(el.duration.length - 5, el.duration.length - 3)) : 0
        el.duration = hours + minutes
        return el
    })
    return parsedTimeArr
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {
    if (arr.length !== 0) {
        let yearsArr = []
        let bestMoviesAvg = []
        for (let i = 0; i < arr.length; i++) {
            yearsArr.push(Number(arr[i].year))
        }
        let yearUnique = yearsArr.slice()

        yearUnique.forEach((el) => {
            let avg = filterByYear(arr, el)
            bestMoviesAvg.push({
                "year": el,
                "average": avg
            })
        })

        bestMoviesAvg.sort((a, b) => {
            if (a.average > b.average) return -1;
            if (a.average < b.average) return 1;
            if (a.year > b.year) return 1;
            if (a.year < b.year) return -1;
        })

        return `The best year was ${bestMoviesAvg[0].year} with an average rate of ${bestMoviesAvg[0].average}`
    }
    return null
}

function filterByYear(arr, year) {
    let ratesArr = []
    let yearMovies = arr.slice().filter(movie => (movie.year === year))
    console.log(yearMovies)
    for (let i = 0; i < yearMovies.length; i++) {
        ratesArr.push(Number(yearMovies[i].rate))
    }
    console.log(ratesArr)
    let averageRate = ratesArr.reduce((a, b) => {
        if (b === undefined) return a
        else return a + b
    }, 0)
    averageRate = averageRate / ratesArr.length
    return Number(averageRate.toFixed(2))
}