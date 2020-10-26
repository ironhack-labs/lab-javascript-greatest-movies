// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {

    const directors = movies.map(elm => elm.director)
    return directors
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

    const stevenFilms = movies.filter(elm => elm.director === 'Steven Spielberg' && elm.genre.includes('Drama'))
    return stevenFilms.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    const note = movies.filter(elm => elm.rate > 0)

    if (movies.length === 0) {
        return 0
    }
    else {
        const totalRate = note.reduce((acc, elm) => acc + elm.rate, 0)
        const rateAv = (totalRate / movies.length).toFixed(2)
        return parseFloat(rateAv)
    }
}


// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(movies) {

    const dramaFilms = movies.filter(elm => elm.genre.includes('Drama'))

    if (dramaFilms.length === 0) {
        return 0
    }

    else {
        const dramaRate = dramaFilms.reduce((acc, elm) => acc + elm.rate, 0)
        const rateAv2 = (dramaRate / dramaFilms.length).toFixed(2)
        return parseFloat(rateAv2)
    }
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(movies) {

    const moviesCopy = JSON.parse(JSON.stringify(movies));
    const orden = moviesCopy.sort((a, b) => a.year - b.year)

    return orden


}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

    const moviesCopy2 = JSON.parse(JSON.stringify(movies));

    const orderTitle = moviesCopy2.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        else if (a.title > b.title) {
            return 1;
        }
        return 0;
    })

    let arrTitle = orderTitle.map(elm => elm.title)
    return (arrTitle.splice(0, 20))


}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    const moviesCopy3 = JSON.parse(JSON.stringify(movies));

    const duration = moviesCopy3.map(elm => {
        const time = elm.duration
        let hours = time.charAt(0)
        let newHours = parseInt(hours)
        let minutes = newHours * 60
        let newMinutes = parseFloat(time.slice(3, 4)) + minutes
        console.log(newMinutes)
        const obt = {
            ...elm,
            duration: newMinutes
        }
        return obt
    })
    return duration
}





// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {

    if (movies.length === 0) {
        return null
    }

}