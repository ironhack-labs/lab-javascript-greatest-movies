/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    //  array.forEach(elm => console.log(elm.duration))
    const yearArray = [...array]
    yearArray.sort((a, b) => {
        a.year - b.year

        if (a.year - b.year == 0) {

            if (a.title < b.title) {
                return -1
            }

            return 1

        }
        return a.year - b.year

    })

    return yearArray
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
    const splilbergDrama = array.filter(elm => elm.director == "Steven Spielberg" && elm.genre.includes("Drama"))
    return splilbergDrama.length

}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    const alphabetArray = [...array]
    alphabetArray.sort((a, b) => {
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
        return 0

    })
    let titles = []
    alphabetArray.forEach(elm => titles.push(elm.title))

    let first20 = titles.filter((elm, index) => index < 20)
    return first20
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    div = 0
    sumRating = array.reduce((acc, elm) => {
        if (elm.rate == undefined) {
            elm.rate = 0
        }
        return acc + elm.rate
    }, 0)


    array.forEach((elm, index) => {
        div++
        if (elm.rate == undefined) {

            div--
        }
    })
    // console.log(sumRating)
    // console.log(div)
    let result = sumRating / div
    if (array.length == 0) return 0
    //console.log(+result)
    return +result.toFixed(2)
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    const drama = array.filter(elm => elm.genre.includes("Drama"))
    sumRating = drama.reduce((acc, elm) => {
        return acc + elm.rate
    }, 0)

    div = 0
    drama.forEach((elm, index) => {
        div++
        if (elm.rate == undefined) div--
    })
    let result = sumRating / div
    if (drama.length == 0) return 0
    return +result.toFixed(2)

}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array1) {
    array = [...array1]
    let movieDuration = []
    let minutes = 0
    array.forEach(elm => {

        movieDuration = elm.duration.split(" ")
        console.log(movieDuration)
        movieDuration.forEach(elm2 => {


            if (elm2.includes("h")) {
                minutes = parseInt(elm2) * 60

            } else if (elm2.includes("min")) {
                minutes += parseInt(elm2)

            }


        })
        console.log(minutes)
        elm.duration = minutes



    })
    return array
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average