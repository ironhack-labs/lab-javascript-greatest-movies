// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
    const directorsArray = array.map(elm => elm.director)
    return directorsArray

    // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

    // const cleanDirectorArray = directorsArray.filter((elm, index) => index === array.indexOf(elm))
    // return cleanDirectorArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    const spielbergDramaFilms = array.filter(elm => elm.genre.includes('Drama') && elm.director === 'Steven Spielberg')
    return spielbergDramaFilms.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (array.length === 0) {
        return 0
    }
    const rateElm = array.filter(elm => elm.rate)
    const ratesSum = rateElm.reduce((acc, elm) => acc + elm.rate, 0)
    ratesAvg = (ratesSum / array.length)
    ratesAvgRounded = (Math.round(ratesAvg * 100)) / 100
    return ratesAvgRounded
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    const dramaList = array.filter(elm => elm.genre.includes('Drama'))
    if (dramaList.length === 0) {
        return 0
    }
    const ratesSum = dramaList.reduce((acc, elm) => acc + elm.rate, 0)
    ratesAvg = (ratesSum / dramaList.length)
    ratesAvgRounded = (Math.round(ratesAvg * 100)) / 100
    return ratesAvgRounded
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    const arrayCopy = [...array]
    const orderedArray = arrayCopy.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1
            } else if (a.title < b.title) {
                return -1
            }
        } else {
            return a.year - b.year
        }
    })
    return orderedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    const titleArray = array.map(elm => elm.title)
    const orderedArray = titleArray.sort()
    const twentyElm = orderedArray.slice(0,20)
    return twentyElm
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
    const arrayCopy = JSON.parse(JSON.stringify(array));
    arrayCopy.forEach(elm => {
        let durationInMinutes
        if (elm.duration.length <= 2) {
            const durationInHours = parseInt(elm.duration.charAt(0))
            elm.duration = durationInHours * 60
        } else if (elm.duration.length <= 5) {
            durationInMinutes = parseInt(elm.duration.substr(0,2))
            elm.duration = durationInMinutes
        } else {
            const hours = parseInt(elm.duration.charAt(0))
            durationInMinutes = (hours * 60) + parseInt(elm.duration.slice(3, 5))
            elm.duration = durationInMinutes
        }
    })
    return arrayCopy
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
    const arrayCopy = JSON.parse(JSON.stringify(array));
    const object = [{ year: 1994, rate: [9.3] }]
    if (array.length === 0) {
        return null
    } else if (array.length === 1) {
        const msg = `The best year was ${array[0].year} with an average rate of ${array[0].rate}`
        return msg
    } //else {
    //     for (i = 0; i < arrayCopy.length; i++) {
    //         for (j = 0; j < object.length; j++) {
    //             if (arrayCopy[i].year === object[j].year) {
    //                 object[i].rate.push(arrayCopy[i].rate)
    //             } else {
    //                 const newObject = { year: arrayCopy[i].year, rate: [arrayCopy[i].rate] }
    //                 object.push(newObject)
    //             }
    //         }
    //     }
    // }
    // const orderedArray = []
    // object.forEach(elm => {
    //         const ratesSum = elm.rate.reduce((acc, elm) => acc + elm, 0)
    //         ratesAvg = (ratesSum / elm.rate.length)
    //         ratesAvgRounded = (Math.round(ratesAvg * 100)) / 100
    //         const objectReduced = { year: elm.year, avgRate: ratesAvgRounded }
    //         orderedArray.push(objectReduced)
    // })
    // const sortedArray = orderedArray.sort((a, b) => b.rate - a.rate)
    // const msg = `The best year was ${sortedArray[0].year} with an average rate of ${sortedArray[0].rate}`
    // return msg
}
