// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
    return [...array].map(array => array.director)
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    let countArray = array.filter(array => array.director == "Steven Spielberg" && array.genre.includes("Drama"))
    return countArray.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// Study this
function ratesAverage(array) {
    if (array.length == 0) {
        return 0
    } else {
        let test = 0
        array.map(e => {
            if(e.rate)
            test += e.rate
        })
        let average = test/array.length
        return parseFloat(average.toFixed(2))
    }
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    let dramaArray = array.filter(array => array.genre.includes("Drama"))
    
    if (dramaArray.length == 0) {
        return 0
    } else {
        let averageArray = dramaArray.reduce((acc, currentVal) => {
        return (acc + currentVal.rate)
    } ,0)
    let average = averageArray/dramaArray.length
    return Number(average.toFixed(2))
    }

}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// STUDY THIS
function orderByYear(array) {
    let yearArray = [...array].sort(function(a, b){
        if (a.year - b.year) {
            return a.year - b.year
        } else {
            if (a.title < b.title) {
                return -1
            } else if (a.title > b.title) {
                return 1
            } else {
                return 0
            }
        }
    })
    return yearArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    //map 
    let titleArray = array.map(array => array.title)
    let alphaTitleArray = titleArray.sort()
    //slice 0 hasta 20
    let slicedArray = alphaTitleArray.slice(0,20)
    return slicedArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
    let hoursArray = JSON.parse(JSON.stringify(Object.assign({}, obj )))

}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
