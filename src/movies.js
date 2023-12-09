
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
  
function getAllDirectors(moviesArray){
    return  moviesArray.map(function(element){
       return element.director
    }) 
}
getAllDirectors(movies)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) { 
    return moviesArray.filter(function(element){
       return  element.director==='Steven Spielberg' && element.genre.includes('Drama')===true
    }).length
   
 } 
(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length===0){
        return 0
    }
   
    const scoresAv=(moviesArray.reduce(function(sum, currentValue){
        return sum+currentValue.score
    },0)/moviesArray.length)
    return parseFloat(scoresAv.toFixed(2))
}

console.log(scoresAverage(movies))
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
 if( (moviesArray.filter(function (element) {
    return element.genre.includes('Drama')
  })).length===0){
    return 0
  }
const dramaScore= (moviesArray.filter(function (element) {
    return element.genre.includes('Drama')
  })).reduce(function(sum,currentValue){
    return sum+currentValue.score
  },0)/(moviesArray.filter(function(element){
    return element.genre.includes('Drama')
  })).length
  return parseFloat(dramaScore.toFixed(2))
}
console.log(dramaMoviesScore(movies))
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let yearlyOrdered= [...moviesArray]
  yearlyOrdered = yearlyOrdered.sort(function(a,b){
    if( a.year===b.year){
      return  a.title.localeCompare(b.title)
  }
    return a.year-b.year
  })
  
  return yearlyOrdered
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let orderTitles= moviesArray.map(function(element){
    return element.title
  })
  
  return orderTitles.sort().slice(0,20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let moviesDuration= moviesArray.map(function(element){
    return element.duration
  })
 let moviesDurationSplit= moviesDuration.map(function(element){
  return element.split(" ")
})
  return moviesDurationSplit
}

console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
