// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(element => {
        return element.director
    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(element => {
        return element.director == "Steven Spielberg" && element.genre.includes("Drama")
    }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (!moviesArray.length) {

        return 0
    } else {
        const average = moviesArray.filter(a => {
            return typeof a.score == "number"
        }).reduce((acc, element) => {
            return acc + element.score
        }, 0) / moviesArray.length

        let newNum = average.toFixed(2)

        if (newNum == 0) {
            return 0
        } else {
            return +newNum
            console.log(typeof newNum)
        }
    }

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (!moviesArray.length) {

        return 0
    } else {
        const cont = moviesArray.filter(a => typeof a.score == "number" && a.genre.includes("Drama"))
        const average = moviesArray.filter(a => {
            return typeof a.score == "number" && a.genre.includes("Drama")
        }).reduce((acc, element) => {
            return acc + element.score
        }, 0) / cont.length


        let newNum = average.toFixed(2)

        if (newNum == 0 || cont.length == 0) {
            return 0
        } else {
            return +newNum
        }
    }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderArray = JSON.parse(JSON.stringify(moviesArray))

    orderArray.sort((a, b) => {
        if (b.year > a.year) return -1;
        if (b.year < a.year) return 1;

        if (b.title > a.title) return -1;
        if (b.title < a.title) return 1;
    })


    return orderArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderArray = JSON.parse(JSON.stringify(moviesArray))

    orderArray.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;


    })

    const orderArray2 = orderArray.map(a => String(a.title)).filter((a, i) => i < 20)
    return orderArray2

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const orderArray = JSON.parse(JSON.stringify(moviesArray))

    return orderArray.map(e => {
        let newHora = parseInt(e.duration.split('h', 1)[0]) * 60
        let min = e.duration.split(' ', 2)[1]
        if (typeof min === "undefined") {
            min = 0
        } else {
            min = parseInt(min.toString().replace(/[^0-9]+/g, ""))
        }
        let total = newHora + min
        return { duration: total }
    })

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
