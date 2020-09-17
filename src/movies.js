// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(movies) {
    let dirArr = movies.map((i) => {
        return i.director
    })
    return dirArr
}

function cleanedArray(dirArr) {
    let cleanArr

}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let steveDrama = movies.filter((i) => {
        if (i.director === "Steven Spielberg" && i.genre.includes("Drama")) {
            return i
        }
    }).length
    return steveDrama
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0
    }
    let numOfMovies = 0
    let avgTot = movies.reduce((tot, e) => {
        if (e.rate == undefined) {
            numOfMovies += 1
            return tot
        } else {
            numOfMovies += 1
            return tot + e.rate
        }
    }, 0)

    let avg = avgTot / numOfMovies
    avg = avg.toFixed(2)
    avg = Number(avg)
    return avg
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    if (movies.length === 0) {
        return 0
    }
    let numOfMovies = 0
    let avgTot = movies.reduce((tot, e) => {
        if (e.genre.includes("Drama")) {
            numOfMovies += 1
            return tot + e.rate
        } else {
            return tot
        }
    }, 0)
    if (numOfMovies === 0) {
        return 0
    }
    let avg = avgTot / numOfMovies

    avg = avg.toFixed(2)
    avg = Number(avg)

    return avg
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    if (movies.length === 0) {
        return 0
    }
    let copyMovie = JSON.parse(JSON.stringify(movies))
    let sortedMovies = copyMovie.sort((a, b) => {
        if (a.year > b.year) {
            return 1
        } else if (a.year < b.year) {
            return -1
        } else {
            if (a.title > b.title) {
                return 1
            } else if (a.title < b.title) {
                return -1
            } else {

                return 0
            }
            return 0
        }
    })
    return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let copyMovies = JSON.parse(JSON.stringify(movies))
    let ordByAlph = copyMovies.sort((a, b) => {
        if (a.title > b.title) {
            return 1
        } else if (a.title < b.title) {
            return -1
        } else {

            return 0
        }
    }).map((i) => {
        return i.title
    })

    return ordByAlph.splice(0, 20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    let copyMovies = JSON.parse(JSON.stringify(movies))
    let hourToMinutes = copyMovies.map((i) => {
        if (i.duration.includes('h') && i.duration.includes('min') && Number(i.duration[4]) == Number) {
            let minutes = i.duration.slice(0, 1) * 60 + Number(i.duration.slice(3, 4))
            return i.duration = minutes
        } else if (i.duration.includes('h') && i.duration.includes('min')) {
            let minutes = i.duration.slice(0, 1) * 60 + Number(i.duration.slice(3, 5))
            return i.duration = minutes
        } else if (i.duration.includes('h')) {
            let minutes = i.duration.slice(0, 1) * 60
            return i.duration = minutes
        } else if (i.duration.includes('min') && Number(i.duration[1]) == Number) {
            let minutes = i.duration.slice(0, 3)
            return i.duration = minutes
        } else if (i.duration.includes('min')) {
            let minutes = Number(i.duration.slice(0, 2))
            return i.duration = minutes
        } else {
            return 0
        }
    })
    return copyMovies
}




// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    if (movies.length === 0) {
        return null
    }
    let bestYear = ''
    let bestRate = 0
    let yearArr = movies.map((i) => {
        return i.year   
    })
    let rateArr = movies.map((i) =>{
        return i.rate
    })


    
    console.log(rateArr)
    console.log(yearArr)


    return `The best year was ${bestYear} with an average rate of ${bestRate}`
}

//comment to make github work please!

