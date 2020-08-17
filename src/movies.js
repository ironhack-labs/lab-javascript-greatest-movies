// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array){
    const newArr = array.map((movie) => {
      return movie.director
    })
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
    const unique = new Set(newArr);
    return [...unique]
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    return array.filter((movie) => {
      return movie.director === "Steven Spielberg" && movie.genre.includes('Drama')
      }).length
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
  if (array === "") return 0
    const avg = array.reduce((acc, val)=>{
      return acc + (val.rate  || 0) / array.length
    }, 0);
    return +avg.toFixed(2)
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
    if (array === "") return 0
      const filtered = array.filter((movie) => {
      return movie.genre.includes('Drama')
        })
    return ratesAverage(filtered)
  }
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    const sorted = array.concat().sort((a, b) => (a.year > b.year) ? 1 : -1)
    return sorted
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    const sorted = array.concat().sort((a, b) => (a.title > b.title) ? 1 : -1).slice(0, 20)
  let result = sorted.map(a => a.title)
  return result
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
    const minutes = array.map((el) => {
    let mins = (+el.duration[0] * 60) + (+el.duration.slice(3, -3));
    parseInt(el.duration.slice(3, -3))
    if (!el.duration.includes("h")){
      return {
     title: el.title,
     year: el.year,
     director: el.director,
     duration: parseInt(el.duration.slice(0, -3)),
     genre: el.genre,
     rate: el.rate,
    } 
    }
    if (el.duration.includes("h") && el.duration[0] > 0){
     return {
     title: el.title,
     year: el.year,
     director: el.director,
     duration: mins,
     genre: el.genre,
     rate: el.rate,
    }
    } else {
      return {
     title: el.title,
     year: el.year,
     director: el.director,
     duration: parseInt(el.duration.slice(3, -3)),
     genre: el.genre,
     rate: el.rate
    }
   }
  })
   return minutes;
}
    
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg (array) {
    if (array.length === 0) { 
        return null
    }
    for(let i = 0; i < array.length; i++){
      console.log(array.indexOf(array[i].year))
      if (array[i].year){
      const sum = array.reduce((acc, val)=>{
       return acc + val.rate
      }, 0)
     const total = sum / array.length || null
     return parseInt(total.toFixed(2))
      }
      }
 }