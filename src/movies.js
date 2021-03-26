// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (moviesArr) =>{
    let directorsArr= moviesArr.map(eachMovie =>{

        return eachMovie.director
    })
    return directorsArr
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (arr){ 
    let filtered = movies.filter((elem,  i) =>{
        return elem.director == "Steven Spielberg"
    })
    let filtered2 = filtered.filter((elem, i) => {
        return elem.genre.drama
    })
    let count = filtered2.length
    return count
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){ 
    let movieRates = movies.map((elem, index) => {
      return elem.rate
    })
 let sum = movieRates.reduce((acc, elem, index) => {
   return acc + elem
 }, 0)
 let average = sum / movieRates.length
 return average.toFixed(2)
 }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArr){
    let drama = moviesArr.filter((elem, index) =>{
      return elem.genre.includes('Drama')   
    })
    
      let dramaRate = drama.map((elem, index) => {
        return elem.rate 
       
     })
    let sum = dramaRate.reduce( function(total, amount){
    return total + amount
  })
   let average = sum/drama.length
  return average.toFixed(2)
  
  } 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (moviesArr) => {
let clonedArr = JSON.parse(JSON.stringify(moviesArr))
let sorted = clonedArr.sort((elem1, elem2) => {
    if(elem1.year > elem2.year){
        return -1
    }else if(elem1.year < elem2.year){
        return 1
    }else{
        if(elem1.name > elem2.name){
            return -1
        }else if(elem1.name < elem2.name){
            return 1
        }else{
            return 0
        }
    }
    
})
return sorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (moviesArr) => {
    let clonedArr = JSON.parse(JSON.stringify(moviesArr))
    let sorted = clonedArr.sort((elem1, elem2) => {
        if(elem1.title > elem2.title){
            return 1
        }else if ( elem1.title < elem2.title){
            return -1
        }else{
            return 0
        }
      
    })
    let first20 = sorted.slice(0,20)
      return first20
   
   }
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (moviesArr) => {
    let mins = moviesArr.map((elem, index) => {
        return elem.duration * 60
    })
    return mins
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
