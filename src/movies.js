// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsMoviesArray = moviesArray.map(movie => {
        return movie.director
    })
    
    const cleanDirectors = []
    directorsMoviesArray.forEach(director => {
        if(!cleanDirectors.includes(director)){
            cleanDirectors.push(director)
        } else return
    })

    return cleanDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const spielbergMovies = moviesArray.filter(movie => {

        const director = movie.director.toLowerCase()
        return director === 'steven spielberg'
    })

    const spielbergDramaMovies = spielbergMovies.filter(movie => {
        const drama = movie.genre.indexOf('Drama')
        return drama > -1
    })

    return spielbergDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (!moviesArray.length) {
        return 0
    }

    const totalScore = moviesArray.reduce((acc, movie) => {
        if (!movie.score) {
            movie.score = 0
        }
        return acc + movie.score
    }, 0)

    const scoreAvg = totalScore / moviesArray.length

    return +scoreAvg.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(movie => {
        const drama = movie.genre.indexOf('Drama')
        return drama > -1
    })

    if (!dramaMovies.length) {
        return 0
    }

    const totalScore = dramaMovies.reduce((acc, movie) => {
        return acc + movie.score
    }, 0)

    const scoreAvg = totalScore / dramaMovies.length

    return +scoreAvg.toFixed(2)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = JSON.parse(JSON.stringify(moviesArray))

    newArray.sort((a, b) => {
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
        else return 0;
    })

    newArray.sort((a, b) => {
        return a.year - b.year
    })

    return newArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArray = JSON.parse(JSON.stringify(moviesArray))

    newArray.sort((a, b) => {
        if (a.title < b.title) { return -1 }
        if (a.title > b.title) { return 1 }
        return 0;
    })

    const titlesArray = newArray.map(movie => {
        return movie.title
    })

    return titlesArray.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArray = JSON.parse(JSON.stringify(moviesArray))

    let minutesArray = newArray.map(movie => {
        const newMovie = {
            ...movie
        }

        if (movie.duration.includes("h") && movie.duration.includes("min")) {
            newMovie.duration = parseInt(movie.duration.substr(0, 1)) * 60 + parseInt(movie.duration.substr(3, 5))
            return newMovie
        } else if (movie.duration.includes("h")) {
            newMovie.duration = parseInt(movie.duration.substr(0, 1)) * 60
            return newMovie
        } else if (elm.duration.includes("min")) {
            newMovie.duration = parseInt(movie.duration.substr(-5, 2))
            return newMovie
        } return newMovie
    })
    return minutesArray
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    const newArray = JSON.parse(JSON.stringify(moviesArray))

    if (!moviesArray.length) {
        return null
    }

    const orderedByYear = orderByYear(newArray)
    const finalArray = []
    const yearsDone = []

    orderedByYear.forEach(movie => {
        let movieYear = movie.year

        if (yearsDone.includes(movieYear)) {
            return
        }

        yearsDone.push(movieYear)

        const sameYearArr = orderedByYear.filter(movie => {
            return movie.year === movieYear
        })

        let totalScore = 0
        sameYearArr.forEach(movie => {
            totalScore += movie.score
        })

        const yearFilms = {
            year: movieYear,
            score: totalScore / sameYearArr.length
        }
        return finalArray.push(yearFilms)
    })
    finalArray.sort((a, b) => b.score - a.score)

    return `The best year was ${finalArray[0].year} with an average score of ${finalArray[0].score}`
}

// Another way of trying to solve the last iteration. Found some information on the internet and tryed to addapt it. I didn't wanted to erase the code so I can have it and revisit it to try and fully understand it.

// const newArray = JSON.parse(JSON.stringify(movies))
    // const scoreObj = newArray.reduce((acc, obj) => {
    //     const key = obj['year']
    //     if (!acc[key]) acc[key] = { score: 0, amount: 0, avg: 0 }
    //     acc[key].score += obj['score']
    //     acc[key].amount += 1
    //     acc[key].avg = acc[key].score / acc[key].amount
    //     return acc
    // }, {})

    // const scoreArr = []
    // console.log(scoreObj)
    // for (var movie in scoreObj) {
    //     scoreArr.push([movie, scoreObj[movie].avg])
    // }

    // const highestAvg = scoreArr.sort((a, b) => b[1] - a[1])[0]

    // const finalArr = [{year: highestAvg[0], score: highestAvg[1]}]

    // return `The best year was ${finalArr[0].year} with an average score of ${finalArr[0].score}`



