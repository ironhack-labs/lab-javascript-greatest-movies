// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movieArray) {
    const directorsArray = movieArray.map(elm => elm.director)
    return directorsArray
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movieArray) {
    const dramaMovies = movieArray.filter(elm => {
        if (movieArray.length === 0) {
            return 0
        } else if (!(elm.director === "Steven Spielberg")) {
            return 0
        } else {
            let includesDrama = elm.genre.includes("Drama")
            return includesDrama
        }
    })
    return dramaMovies.length
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movieArray) {
    const movieClean = movieArray.filter(elm => elm.rate !== undefined)
    const moviesAvg = movieClean.reduce((acc, elm) => acc + elm.rate, 0)
    const moviesLength = movieArray.length

    if (moviesAvg === 0) {
        return 0
    } else {
        let ratesAvg = Math.round((moviesAvg / moviesLength) * 100) / 100
        return ratesAvg
    }

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movieArray) {
    const dramaMovies = movieArray.filter(elm => elm.genre.includes("Drama"))

    const dramaMoviesSum = dramaMovies.reduce((acc, elm) => acc + elm.rate, 0)
    const dramaMoviesLength = dramaMovies.length
    if (dramaMovies.length === 0) {
        return 0
    } else {
        const dramaMoviesAvg = Math.round((dramaMoviesSum / dramaMoviesLength) * 100) / 100
        return dramaMoviesAvg
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieArray) {
    newMovieArray = JSON.parse(JSON.stringify(movieArray))

    const orderMovieArray = newMovieArray.sort((year1, year2) => {
        if (year1.year === year2.year) {
            var filmA = year1.title.toUpperCase()
            var filmB = year2.title.toUpperCase()
            if (filmA < filmB) {
                return -1;
            }
            if (filmA > filmB) {
                return 1;
            }
            return 0;
        } else {
            return year1.year - year2.year
        }

    })
    return orderMovieArray


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArray) {
    let titlesArray = movieArray.map(elm => elm.title)
    //newMovieArray = JSON.parse(JSON.stringify(movieArray))

    let titlesOrderedArray = []


    if (titlesArray.length <= 20) {

        titlesOrderedArray = titlesArray.sort()
        return titlesOrderedArray

    } else {
        titlesOrderedArray = titlesArray.sort()
        removed = titlesOrderedArray.splice(20)

        return titlesOrderedArray

    }


}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movieArray) {
    //newMovieArray = JSON.parse(JSON.stringify(movieArray))

    let newMovieArray = movieArray.map(elm => {
        return {
            ...elm,
            duration: textToMinutes(elm.duration)
        }
    })
    // console.log(newMovieArray);
    return newMovieArray
}

function textToMinutes(text) {
    hText = text.indexOf('h')
    hour = text.slice(0, hText) * 1

    minText = text.indexOf('m') * 1

    spaceText = text.indexOf(' ') * 1

    // min = text.slice(spaceText, minText) * 1

    if ((typeof hour === "number") && (hour > 0) && (typeof min === "number")) {
        min = text.slice(spaceText, minText) * 1
        time = hour * 60 + min
        return time

    } else if ((typeof hour === "number") && (hour > 0)) {
        time = hour * 60
        return time

    } else if (spaceText !== -1) {
        min = text.slice(spaceText, minText) * 1

        time = min
        return time

    } else {
        min = text.slice(0, minText) * 1

        time = min
        return time
    }
}



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average



