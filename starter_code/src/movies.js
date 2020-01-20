/* eslint no-restricted-globals: 'off' */
function getMinutes(str_) {
    const str = str_
    let minutes
    let hours
    if (str.includes("h") && str.includes("min")) {

        let arr = str.split(" ")
        hours = parseInt(arr[0].replace("h", ""))
        minutes = parseInt(arr[1].replace("min", ""))
        return hours * 60 + minutes

    } else if (str.includes("h")) {

        hours = parseInt(str.replace("h", ""))
        return hours * 60

    } else if (str.includes("min")) {
        minutes = parseInt(str.replace("min", ""))
        return minutes
    }

}

function onlyOne(arr) {

    for (let i = 0; i < arr.length; i++) {

        if (arr.lastIndexOf(arr[i]) != arr.indexOf(arr[i])) arr.splice(arr.lastIndexOf(arr[i]) - 1, 1)
    }
}

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr_) {
    let arr = [...arr_]
    let result = []

    arr = arr.sort((a, b) => {

        if (a.year > b.year) return 1
        else if (b.year > a.year) return -1
        else {

            if (a.title > b.title) return 1
            else if (a.title < b.title) return -1
        }
    })

    arr.forEach(elm => result.push(elm))

    console.log(result)

    return result
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {

    let arr2 = arr.filter(elm => (elm.director == "Steven Spielberg") && (elm.genre.includes("Drama")))
    return arr2.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {

    let arrTitles = arr.map(elm => elm.title)

    arrTitles.sort()

    if (arrTitles.length <= 20) return arrTitles
    else if (arrTitles.length > 20) return arrTitles.splice(0, 20)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {

    let result = (arr.reduce((acc, elm) => {
        if (elm.rate) return acc + elm.rate
        else return acc

    }, 0) / arr.length)

    if (result) return parseFloat(result.toFixed(2))
    else return 0
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let count = 0
    let result = arr.filter(elm => elm.genre.includes("Drama")).reduce((acc, elm) => {
        if (elm.rate) {
            count++
            return acc + elm.rate
        } else return acc
    }, 0)

    if (result) return parseFloat((result / count).toFixed(2))
    else return 0
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {

    let result = arr.map(elm => {
        const copyElm = {
            ...elm
        }
        console.log(elm.duration)
        copyElm.duration = getMinutes(elm.duration)
        return copyElm
    })
    return result
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(data) {
    if (data.length == 0) return null
    console.log("=========================================================================")
    console.log(data, "data")

    let years = data.map(elm => elm.year)
    onlyOne(years)



    let filttered = []

    years.forEach(elm => {
        filttered.push({
            "year": elm,
            "ratings": []
        })
    })

    filttered.forEach(elm => {
        data.forEach(elm2 => {
            if (elm2.year == elm.year) elm.ratings.push(elm2.rate)
        })
    })

    console.log(filttered, "filtered")

    let averages = filttered.map(elm => {
        return {
            rating: elm.ratings.reduce((acc, elm2) => acc + elm2) / elm.ratings.length,
            year: elm.year
        }
    })

    console.log(averages, "o.o")

    averages.sort((a, b) => {
        if (a.rating > b.rating) return -1
        else if (a.rating < b.rating) return 1
        else {
            if (a.year > b.year) return 1
            else if (a.year < b.year) return -1
        }
    })

    console.log(averages, "averages")

    console.log(averages[0].year, ":D", averages[0].rating)

    return `The best year was ${averages[0].year} with an average rate of ${averages[0].rating}`

}