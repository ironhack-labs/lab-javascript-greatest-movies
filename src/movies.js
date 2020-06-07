// Iteration 1: All directors? - Get the array of all directors.

function  getAllDirectors (array) {

    return array.map((movie) => movie["director"])

}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies() {

    let spielbergFilms = array.filter(movie => movie["director"] == "Steven Spielberg") 
    let spielbergDramaFilms = spielbergFilms.filter(movie => movie["genre"].includes("Drama"))
    return spielbergDramaFilms.length

}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (array) {
    if (array.length === 0) {
        return 0
    }

    let totalSum = array.reduce((accum, current) => {
        if (!current["rate"]) {
            return accum + 0
        }
        return accum + current["rate"]
    }, 0)
    return Math.round(totalSum / array.length * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (array) {
    let dramaFilms = array.filter(movie => movie["genre"].includes("Drama"))
    let totalSumDrama = dramaFilms.reduce((accum, current) => {
        if (!current["rate"]) {
            return accum + 0
        }
        return accum + current["rate"]
    }, 0)

    if (dramaFilms.length === 0) {
        return 0
    }

    return  Math.round(totalSumDrama / dramaFilms.length * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    let copiedToSort= array.slice(0)
    copiedToSort.sort((a, b) => {
        if (a["year"] === b["year"]) {
            if (a["title"] > b["title"]){
                return 1;
            } else if (a["title"] < b["title"]){
                return -1;
            }
            return 0;
        }
        return a["year"] - b["year"]
    })
    return copiedToSort
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (array) {
    let copiedToSort= array.slice(0)
    copiedToSort.sort((a, b) => {
        if (a["title"] > b["title"]){
            return 1;
        } else if (a["title"] < b["title"]){
            return -1;
        }
        return 0;
    })

    let listOfNames = copiedToSort.map((movie) => movie["title"])

    if (listOfNames.length > 20){
        let listOfTwenty = listOfNames.slice(0,20)
        return listOfTwenty
    }
    return listOfNames 
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
