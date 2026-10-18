// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray
    .map(movie => movie.director)
    .filter((director, index, array) => index === array.indexOf(director))
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray
    .filter(movie => movie.genre.includes("Drama"))
    .filter(movie => movie.director === "Steven Spielberg").length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    return moviesArray
    .map(movie => movie.score)
    .reduce((acc, el, index, arr) => {
        if (typeof(el) === typeof(1)) {
        acc += el
        }
        if (index === arr.length - 1) {
            acc = (acc/arr.length).toFixed(2)
        }
        return +acc
    }, 0)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    return moviesArray
    .filter(movie => movie.genre.includes("Drama"))
    .map(movie => movie.score)
    .reduce((acc, el, index, arr) => {
        if (typeof(el) === typeof(1)) {
        acc += el
        }
        if (index === arr.length - 1) {
            acc = (acc/arr.length).toFixed(2)
        }
        return +acc
    }, 0)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray
    .map(movie => movie)
    .sort((a,b) => {
        if (a.year !== b.year) {
            return a.year - b.year
        } else {
            return a.title.localeCompare(b.title, "en")
        }   
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray
    .map(movie => movie)
    .map(movie => movie.title)
    .sort((a,b) => a.localeCompare(b, "en"))
    .filter((movie, index) => index <= 19)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        let durationArr = movie.duration.split(" ").map((time) => parseInt(time))
        let newDuration = 0
        if (durationArr.length === 2) {
            newDuration = (durationArr[0]*60) + durationArr[1]
            } else {
            newDuration = (durationArr[0]*60)
            }
        return {
        ...movie,
        duration: newDuration
        }
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    
    if (moviesArray.length === 0) {
        return null
    }
    
    let highestScore = 0
    let year = 0
    return moviesArray.reduce((acc, el, index, arr) => {
        let scoreAverageperYear = 0
        let countYears = 0
        arr.forEach((movie, index, arr2) => {
            if (el.year === movie.year) {
                scoreAverageperYear += movie.score
                countYears += 1
            }
            if (index === arr2.length - 1) {
                scoreAverageperYear = scoreAverageperYear/countYears
            } 
        })
        if (scoreAverageperYear > highestScore) {
            year = el.year
            highestScore = scoreAverageperYear 
        } else if (scoreAverageperYear === highestScore) {
            if (el.year < year) {
                year = el.year
            } else {
                year = year
            }
        }

        acc = `The best year was ${year} with an average score of ${highestScore}`
        console.log(acc)
        return acc
    }, "")
}
