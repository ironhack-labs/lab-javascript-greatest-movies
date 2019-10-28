/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

    let newArray = [...arr]

    //console.log(newArray)

    newArray.sort((a, b) => {
        if (a.year > b.year) return 1
        else if (a.year < b.year) return -1
        else if (a.year == b.year) {
            if (a.title > b.title) return 1
            else if (a.title < b.title) return -1
        }
    }
    )

    //console.log(newArray)
    return newArray



}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {

    const spilbergMovie = arr.filter(elm => elm.director == "Steven Spielberg")

    const spilbergDrama = spilbergMovie.filter(elm => elm.genre.includes("Drama"))

    return spilbergDrama.length

}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {

    let newArray2 = [...arr]

    newArray2.sort((a, b) => a.title.localeCompare(b.title))

    let justTitle = []

    newArray2.forEach(elm => {
        return justTitle.push(elm.title)
    })

    firstTwenty = justTitle.slice(0, 20)
    //console.log(firstTwenty)

    return firstTwenty

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {

    if (arr.length === 0) {

        return 0
    } else {
        const ratesAcc = arr.reduce((acc, arr) => {
            return acc + arr.rate
        }, 0)

        const totalMovies = (arr.filter(elm => elm.rate)).length

        const ratesAvg = +(ratesAcc / totalMovies).toFixed(2)

        return ratesAvg
    }
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {

    const dramaMovies = arr.filter(elm => elm.genre.includes("Drama"))

    if (dramaMovies.length === 0) {
        return 0
    } else {
        const dramaRates = dramaMovies.reduce((acc, arr) => {
            return acc + arr.rate
        }, 0)

        const numberDrama = dramaMovies.length

        const dramasAvg = +(dramaRates / numberDrama).toFixed(2)

        return dramasAvg
    }
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {


}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
