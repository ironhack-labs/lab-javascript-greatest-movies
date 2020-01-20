/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {


    const ordereredByLetter = [...arr].sort((a, b) => {

        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year
        }
        // if (a = b) {

        //     return ordereredByLetter
        // } else {
        //     ordereredByDate = [...arr].sort((a, b) => a.year - b.year)

        //     return ordereredByDate
        // }
    })
    return ordereredByLetter
}
orderByYear(movies)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    const steveMovies = arr.filter(elm => elm.director == "Steven Spielberg" && elm.genre.includes("Drama"))


    return steveMovies.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    const ordereredByName = [...arr].sort((a, b) => a.title.localeCompare(b.title))
    const onlyThetitle = arr.title
    console.log(onlyThetitle)
    return ordereredByName.slice(0, 20)


}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    const Avg = arr.reduce((acc, media) => acc + media.rate, 0)

    if (arr.length === 0) {
        return 0
    } else {
        return Number((Avg / arr.length).toFixed(2))
    }
}
ratesAverage(movies)
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    const dramaMovies = arr.filter(elm => elm.genre.includes("Drama"))
    const mediaDramaMovies = dramaMovies.reduce((acc, mediadr) => acc + mediadr.rate, 0)
    if (dramaMovies.length == 0) {
        return 0
    } else {
        return Number((mediaDramaMovies / dramaMovies.length).toFixed(2))
    }
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    const changeTime = arr.map(hours => Number(hours.duration) * 60)

}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg() {

}