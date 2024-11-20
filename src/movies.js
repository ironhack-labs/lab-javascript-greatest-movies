// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map((movie) => movie.director)
    let filteredArray = []
    newArray.forEach((director) => {
        if (!filteredArray.includes(director)) {
          filteredArray.push(director)
        }
    })
    return filteredArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const newArray = moviesArray.filter((movie) => {
        return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    })
    return newArray.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const filteredArray = moviesArray.filter(movie => movie.score)
    const sumOfScores = filteredArray.reduce((acc, movie) => {
        return acc += movie.score
    },0)
    return (Number((sumOfScores / moviesArray.length).toFixed(2)))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"))
    if (dramaMovies.length === 0) {
        return 0
    }
    const dramaMoviesScores = dramaMovies.reduce((acc, movie) => {
        return acc += movie.score
    },0)
    return (Number((dramaMoviesScores / dramaMovies.length).toFixed(2)))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = [...moviesArray]
    const sortedArray = newArray.sort((movie1, movie2) => {
        if (movie1.year > movie2.year) {
            return 1
        } else if (movie1.year < movie2.year) {
            return -1
        } else {
            if (movie1.title > movie2.title) {
                return 1
            } else if (movie1.title < movie2.title) {
                return -1
            } else {
                return 0
            }
        }
    })
    return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArray = [...moviesArray]
    const titlesArray = newArray.map(movie => movie.title)
    const sortedArray = titlesArray.sort((title1, title2) => {
        if (title1 > title2) {
            return 1
        } else {
            return -1
        }
    })
    return sortedArray.splice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArray = structuredClone(moviesArray)
    const minutesArray = newArray.map((movie) => {
        if (movie.duration.includes("min")) {
            const durationArr = movie.duration.split(" ")
            const hours = durationArr[0].replace("h", "")
            const minutes = durationArr[1].replace("min","")
            movie.duration = Number(hours * 60) + Number(minutes)
            return movie.duration
        } else {
            movie.duration[0].replace("h", "")
            movie.duration = Number(movie.duration[0] * 60)
            return movie.duration
        }
    })
    newArray.forEach((movie, i) => {
        movie.duration = minutesArray[i]
    })
    return newArray
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
/*function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null
    }
    let bestScore = 0
    let bestYear = 0
    const nonRepeatedYears = Set(moviesArray.year)
    const sortedYears = nonRepeatedYears.sort((year1, year2) => {
        if (year1 > year2) {
            return 1
        } else if (year1 < year2) {
            return -1
        } else {
            return 0
        }
    })
    for(let i = 0; i < sortedYears.length; i++) {
        const yearMovies = moviesArray.filter((movies) => movies.year === sortedYears[i])
        const scoreAvg = yearMovies.reduce((acc, movie) => {
            acc += movie.score
        },0) / yearMovies.length
        if (scoreAvg > bestScore) {
            bestScore = scoreAvg
            bestYear = sortedYears[i]
        }
    }
    return (`The best year was ${bestYear} with an average score of ${bestScore}`)
}
*/
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null
    }
    let bestYear = 0
    let bestScore = 0
    for (let index = 0; index < moviesArray.length; index++) {
        let sameYearMovies = moviesArray.filter(function(movie) {
            return movie.year === moviesArray[index].year
        })
        let avgScore = sameYearMovies.reduce(function(count, movie) {
            return count += movie.score 
        }, 0) / sameYearMovies.length

        if (bestScore === avgScore) {
            bestYear = Math.min(bestYear, moviesArray[index].year)
        } else if (avgScore > bestScore) {
            bestScore = avgScore
            bestYear = moviesArray[index].year
        } 
        
    }
    return `The best year was ${bestYear} with an average score of ${bestScore}`
}
