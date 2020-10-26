// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = movieArray => movieArray.map(elem => elem.director)
    
//function getAllDirectors (movieArray){return movieArray.map(elem => elem.director)}

    
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movieArray2) {
    let howMovies = movieArray2.filter(function (elem) {
        return (
            elem.director.includes('Steven Spielberg') && elem.genre.includes('Drama')
        )
    })
    return howMovies.length
}

    
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieArray3) {

    if (movieArray3.length === 0)
        { return 0 }
    
    const sumRate = movieArray3.reduce(function (acc, elm) {
        return acc + elm.rate 
    }, 0)

    const numberMovies = movieArray3.length

    const finalRate = parseFloat((sumRate / numberMovies).toFixed(2))

    return finalRate

}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movieArray4) {
    const sumDramaMov = movieArray4.filter(elem => elem.genre.includes('Drama'))
        if (sumDramaMov.length === 0)
        { return 0 }
    
    const rateDramaMov = sumDramaMov.reduce(function (acc, elem) {
        return acc + elem.rate
    }, 0)

    const numberDramaMov = sumDramaMov.length

    const finalRateDramaMov = parseFloat((rateDramaMov/ numberDramaMov).toFixed (2))

    return finalRateDramaMov
        
        
}  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieArray5) {

    const newArray = JSON.parse(JSON.stringify(movieArray5))
    
    const yearMov = newArray.sort(function (a, b) {
        if (a.year > b.year) return 1
        if (a.year < b.year) return -1
        if (a.year == b.year) {
            if (a.title < b.title) return -1
            if (a.title > b.title) return 1
        }
})  
    return yearMov
            
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieArray6) {

    const newArray2 = JSON.parse(JSON.stringify(movieArray6))
    
    const moviesTitles = newArray2.map(elem => elem.title)
    
    const orderTitles = moviesTitles.sort()

    if (orderTitles.length > 20) { return orderTitles.slice(0, 10) }

    else { return orderTitles }
      
}







// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate averag
