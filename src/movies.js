// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    const allDirectors = movies.map(elm => elm.director)
    return allDirectors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){ 

   const moviesDrama = movies.filter(elm => elm.director === 'Steven Spielberg' && elm.genre.includes("Drama"))

  return moviesDrama.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    
    const sumRates = movies.reduce((acc, elm) =>  {
        if(elm.rate){
            return elm.rate + acc
        } else if (!elm.rate){
            return acc
        }
    }, 0)
    
    if(movies.length === 0){
    return 0
    }
    return Math.round((sumRates / movies.length) * 100) / 100
   }

// Iteration 4: Drama movies - Ge t the average of Drama Movies

function dramaMoviesRate(movies){
   
   let moviesRate = movies.filter(elm => elm.genre.includes('Drama'))
   return ratesAverage(moviesRate)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    const orderAll = [...movies].sort((a, b) => {
        if (a.year === b.year){
          return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year 
        }
    })
    return orderAll  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    
    const Alphabetic = [...movies].sort((a, b) => a.title.localeCompare(b.title))
    
    const titleOrder = Alphabetic.slice(0, 20).map(movies => movies.title)
        return titleOrder
    }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
