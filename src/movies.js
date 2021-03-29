// Iteration 1: All directors? - Get the array of all directors.

   function getAllDirectors (movies){
       const arrayDirectors = movies.map(movies => movies.director)  
           return arrayDirectors
   }



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const numberOfDramasSteven = movies.filter( (elm) => elm.director.includes('Steven Spielberg') && elm.genre.includes('Drama'))
    return numberOfDramasSteven.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) return 0
    const sumRate = rates.reduce((acc, elm) => acc + elm)
    const averageRate = sumRate / movies.length
    return averageRate
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const numberOfDramas = movies.filter(elm => {
        return elm.genre.includes('Drama')
    })

    const dramaRates = numberOfDramas.map(elm => {
        return elm.rate
    })

    const sumOfRates = dramaRates.reduce((acc, elm) => acc + elm)
    

    const avg = sumOfRates / dramaRates.length
    return avg
}




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies){
    const yearDeepCopy = JSON.parse(JSON.stringify(movies))
    const orderedYears = yearDeepCopy.map(elm => elm.year)

    orderedYears.sort (function (prev, next){
        if(prev.year > next.year){
            return 1
        } if (prev.year < next.title){
            return -1
        }
        return 0

    })

    return orderedYears
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const moviesDeepCopy = JSON.parse(JSON.stringify(movies))
    const orderedMovies = moviesDeepCopy.map(elm => elm.title)

     orderedMovies.sort (function (prev,next){
         if (prev.title > next.title){
             return 1
         } if (prev.title < next.title){
             return -1
         }
         return 0
     })
     return orderedMovies.slice(0 , 20)
}





// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
