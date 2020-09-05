// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArr) {

    return moviesArr.map(movieObj => movieObj.director)

}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr) {

    let filteredArr = moviesArr.filter(movieObj => {
        
        if (movieObj.director === "Steven Spielberg" && movieObj.genre.includes("Drama")) {
          return true
        }

    })
    return filteredArr.length
    }
                                  

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArr) {

    if (moviesArr.length === 0) {
        return 0
    }

    let ratesSum = moviesArr.reduce(function(accumulator, currentValue){
        if (typeof currentValue.rate !== "number") {
            return accumulator
        } else {
        return accumulator + currentValue.rate
        }
    }, 0);

    let average = ratesSum / moviesArr.length

    return Math.round(average * 100) / 100

}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArr) {

    let dramaMoviesCount = 0
    let dramaAverage = 0

    let dramaRatesSum = moviesArr.reduce(function(accumulator, currentValue){
        if (currentValue.genre.indexOf("Drama") !== -1) {
            dramaMoviesCount++
            return accumulator + currentValue.rate
        } else {
            return accumulator
        }

    }, 0);

    if (dramaMoviesCount === 0) {
        return 0
    } else {
        dramaAverage = dramaRatesSum / dramaMoviesCount
    }
    
    return Math.round(dramaAverage * 100) / 100
}

// Alternative????

let dramaMoviesRate2 = (movies) => ratesAverage(movies.filter(movie => movie.genre.includes("Drama")))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArr) {

    sortArr = moviesArr.slice()
    
    sortArr.sort(
      function compare(a,b) {
  if (a.year > b.year) {
    return 1
  } else {
    return -1
  }
}
    )
    return sortArr
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
