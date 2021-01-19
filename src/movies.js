// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(argument) {
    let directorsArray = argument.map(elm => {
        console.log(elm.director)
        return elm.director
    })
    return directorsArray
}
getAllDirectors(movies)



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const SpielbergDramas = movies.filter(elm => elm.director === `Steven Spielberg` && elm.genre.includes(`Drama`))
    console.log(SpielbergDramas)
    const numberOfDramas = SpielbergDramas.length

    console.log(numberOfDramas)
    return numberOfDramas
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    const arrayRatesSum = movies.reduce((acc,elm) => {
        
        console.log(elm.rate)  
        console.log(acc)
        return acc + elm.rate
        
    }, 0)
    console.log(movies.length)
    arrayRatesAverage = arrayRatesSum / movies.length
    const roundedAverage = arrayRatesAverage.toFixed(2)
    console.log(arrayRatesAverage)
    return arrayRatesAverage    
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const arrDrama = movies.filter(elm => elm.genre.includes(`Drama`))
    console.log(arrDrama)
    const arrRate = arrDrama.map(elm => {
        return elm.rate
    })
    console.log(arrRate)
    let sum = 0
    arrRate.forEach(elm => sum += elm)
    console.log(sum)

    avrRateDrama = sum / arrRate.length
    console.log(avrRateDrama)

    return avrRateDrama
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {    
    const arrayByYear = movies.sort(function(a,b) {
        console.log(a.year - b.year)        
        return a.year - b.year
    })
    console.log(arrayByYear)
    const newArray = [...arrayByYear]

    return newArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const arrayByTitle = movies.sort(function(a,b) {
        let name1 = a.title
        let name2 = b.title
        if (name1 < name2) {
            return -1
        }
        if (name1 > name2) {
            return 1
        }
        return 0
    })
    console.log(arrayByTitle)    
    return arrayByTitle
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
