// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.


// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirectors = moviesArray.map(e =>{
  return e.director
  })
  return allDirectors
}

// console.log(getAllDirectors(movies))


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let SpielbergArr = moviesArray.filter(e=>{
    if(e.director === "Steven Spielberg"){
      return e.genre.includes("Drama")
    }
  })
  return SpielbergArr
}

console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let length = moviesArray.length
  let sum = 0
  
  for (let ele of moviesArray){
  sum += ele.score
  }

  let total = sum / length

  return total.toFixed(2)
}

// console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaArr = moviesArray.filter(e=>{
    if(e.genre.includes("Drama")){
      return true
    }
  })
  console.log(dramaArr)
  let avg = dramaArr.length
  let total = dramaArr.reduce((acc, el)=>{
    return acc + el.score
  }, 0)
  return total / avg
}

// console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let copyMovies = JSON.parse(JSON.stringify(moviesArray))
  copyMovies.sort((a, b)=>{
    if(a.year > b.year){
      return 1
    }else if(a.year < b.year){
      return -1
    } else{
      0
    }
  })
  return copyMovies
}

// console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let copyMovies = JSON.parse(JSON.stringify(moviesArray))
  copyMovies.sort((a, b)=>{
    if(a.title > b.title){
      return 1
    }else if(a.title < b.title){
      return -1
    } else{
      0
    }
  })
  let first20 = []
  for (let i = 0; i < 20; i++){
    first20.push(copyMovies[i])
  }
  return first20
}

// console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
