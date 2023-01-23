// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((eachMovie) => {
        return eachMovie.director
    })
    return allDirectors 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const movieCount = moviesArray.filter((eachMovie) =>{
        return eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")
    }
    )
    return movieCount.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    } else {
        const scoreSum = moviesArray.reduce((acc, eachMovie) => {
            if (typeof(eachMovie.score)=== "number"){
                return acc + eachMovie.score
            } else{
                return acc
            }
        }, 0)
        const scoreAverage = scoreSum / moviesArray.length
        return Number(scoreAverage.toFixed(2))
    }

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((eachMovie)=> {
        return eachMovie.genre.includes("Drama")
    })
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    const ascendingOrder = ((a, b) => {
            return a.year - b.year
    })
    const alphabetically = ((a, b) => {
        if (a.title < b.title) {
            return -1
        }
        if (a.title > b.title) {
            return 1
        } 
    })
    moviesArrayCopy.sort(alphabetically)
    return moviesArrayCopy.sort(ascendingOrder)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    let titleMovieArray = moviesArrayCopy.map((eachMovie) => {
        return eachMovie.title
    })
    let sorted = titleMovieArray.sort()
    if (sorted.length > 20) {
        sorted = sorted.slice(0, 20)
    } 
    return sorted
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    const changedTimeMovie = moviesArrayCopy.map((eachMovie) => {
        let movieTime = eachMovie.duration.split(" ")
        let duration = movieTime.map((eachTime) => {
            let final = 0
            if (eachTime.includes("h")) {
                final += Number(eachTime.slice(0, eachTime.indexOf("h"))) * 60
            } else if (eachTime.includes("min")) {
                final += Number(eachTime.slice(0, eachTime.indexOf("m")))
            }
            return final

        })
        const eachMovieTime = duration.reduce((acc, time) => {
            return acc + time
        })
        eachMovie.duration = eachMovieTime
        return eachMovie
    }
    )
    return changedTimeMovie
}

console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    } else {
        const scoreSum = moviesArray.reduce((acc, eachMovie) => {
            if (typeof (eachMovie.score) === "number") {
                return acc + eachMovie.score
            } else {
                return acc
            }
        }, 0)
        const scoreAverage = scoreSum / moviesArray.length
        return Number(scoreAverage.toFixed(2))
    }

}


function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0){
        return null
    }
    const allYears = moviesArray.map((eachMovie) => {
        return eachMovie.year
    })
    const noRepetitionYears = [...new Set(allYears)]
    let maxAvgScore = 0
    let bestYear = 0
    const movieRealeasedYear = noRepetitionYears.map((eachYear) => {
        thisYearMovie = moviesArray.filter((eachMovie) => {
            return eachYear === eachMovie.year
        })
        thisYearScore = scoresAverage(thisYearMovie)

        if (thisYearScore > maxAvgScore) {
            maxAvgScore = thisYearScore
            bestYear = thisYearMovie[0].year
        } else if (thisYearScore === maxAvgScore){
            if (thisYearMovie[0].year < bestYear){
                bestYear = thisYearMovie[0].year 
            }
        }

        return bestYear
    })
    return `The best year was ${bestYear} with an average score of ${maxAvgScore}`

}

