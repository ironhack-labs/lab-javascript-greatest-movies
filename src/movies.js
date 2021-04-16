

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array){
    const newArray = array.map((movie) => movie.director)
    return newArray
}
console.log(getAllDirectors(movies))
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array){
    const spielbergMovies = array.filter((movie)=> {
        return movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama')
    })
    return spielbergMovies.length
}
console.log(howManyMovies(movies))

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    if(!movies.length){return 0}

    const ratesArr = array.map(movie => {
        if(!movie.rate){
            return 0
        } else {
            return movie.rate
        }
    }) 
   
    const rates = ratesArr.reduce((acc, rate) => {
        return acc + rate/ratesArr.length
   }, 0)
   return Number(rates.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
    function dramaMoviesRate(array){
        if(!movies.length) return 0

        const dramaArray = array.filter(movie => {
            return movie.genre.includes('Drama') 
        })
        // console.log(dramaArray)
        const ratesArray = dramaArray.map(movie => {
            return movie.rate
        })
        // console.log(ratesArray)
        const ratesAvrg = ratesArray.reduce((acc, currentMovie) => {
            return acc + currentMovie/ratesArray.length
        },0)
        return Number(ratesAvrg.toFixed(2))
    }
    console.log(dramaMoviesRate(movies))
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  function orderByYear(array) {
    const moviesArray = [...array]
    const orderMovies = moviesArray.sort(
        (a, b) => {
            if(a.years === b.years){
                if(a.title < b.title){return -1} 
                else if(a.title > b.title){return 1} 
                else {return 0}
            }
            return a.year - b.year
        }
    )
    return orderMovies
  } 
  
  console.log(orderByYear(movies))
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){

    const filterdByTittle = array.map((movie) => movie.title)
    const sortedMovies = filterdByTittle.sort()
    const twentyMovies = sortedMovies.slice(0,20)
    return twentyMovies
    // const newTittlesArr = filtered
    // return twentyMovies
}

console.log(orderAlphabetically(movies))
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
