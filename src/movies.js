// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    // console.log(moviesArray)
    const directorMovies = moviesArray.map(eachDirector => {
        // console.log(typeof eachDirector)
        return eachDirector.director
    })
    return directorMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramas = moviesArray.filter(eachMovie => {
        // console.log(eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama'))
        return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')

    })
    return spielbergDramas.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }



    const imdbSum = moviesArray.reduce((acc, element) => {
        if (!element.score) {
            return acc
        } else {
            return acc + element.score
        }

    }, 0)


    const imdbAvg = parseFloat((imdbSum / moviesArray.length).toFixed(2))
    // console.log(typeof moviesArray.length)

    return imdbAvg
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(element => {
        return element.genre.includes('Drama')
    })

    if (dramaMovies.length === 0) {
        return 0
    }


    const dramaAvg = dramaMovies.reduce((acc, element) => {
        return element.score + acc
    }, 0)
    return parseFloat((dramaAvg / dramaMovies.length).toFixed(2))

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray))
    const orderedMovies = moviesCopy.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year;
        }
    })
    return orderedMovies;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const movilesTitle = moviesArray.map(element => element.title)

    // console.log('aaaaa', movilesTitle)
    movilesTitle.sort((a, b) => {
        return a.localeCompare(b)
    })
    // // console.log(moviesCopy)
    // const orderedMovies = moviesCopy.sort((a, b) => {
    //     return a.title.localeCompare(b.title)
    // })
    // console.log('hey', typeof movilesTitle)
    return movilesTitle.slice(0, 20)



}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const timeHours = moviesArray.map(element => {
        let totalMinutes = 0
        element.duration.split(' ').forEach(element => {
            if (element.includes('h')) {
                totalMinutes += parseInt(element) * 60
            } else {
                totalMinutes += parseInt(element)
            }
            // console.log(totalMinutes)
        });
        // console.log(element)


        return {
            ...element,
            duration: totalMinutes,
        }
    })

    return timeHours;

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null
    }

    // const moviesCopy = JSON.parse(JSON.stringify(moviesArray))


}
