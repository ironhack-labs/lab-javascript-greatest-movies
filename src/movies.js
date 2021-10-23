// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {

const onlyDirectors = moviesArr.map((items) => {
  return items.director
})

moviesArr.filter((duplicates, original)=>{
  moviesArr.indexOf(duplicates) === original
},[])                                             // it should be filter and remove the duplicates

return onlyDirectors

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {

const dramaMovies = moviesArr.filter((movie)=>{
  return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
},[])

return dramaMovies.length

}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {

  if (moviesArr.length === 0){      
    return 0
  } // if the array is empty = 0

  const reducedScores = moviesArr.reduce((acc,scoreNumbers)=>{
    return acc + scoreNumbers.score
  },0)
  

  const halfScores = reducedScores / moviesArr.length // the average

  return Math.round(halfScores*100)/100 // the average with 2 decimals
  

}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {

let filterDrama = moviesArr.filter((item)=>{
  return item.genre.includes('Drama') 
});

if (filterDrama.length === 0 ){
  return 0
}

let filterScore = filterDrama.reduce((acc, item)=>{
  if (filterDrama.score){
    return acc + item.score
  } else {
    return acc
  }
},0);

return Math.round((filterScore / filterDrama.length)*100 )/100

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {

let mappedArray = moviesArr.map((items) => {   // new array created in order to not to "sort" the original one. 
  return items
})                                          

let sortedArray = mappedArray.sort((a, b)=>{
  if (a.year<b.year){
    return -1
  }else if(a.year>b.year){
    return 1 
  }else if(a.year === b.year){
      if (a.title<b.title){
        return -1
      }else{
        return 1
      }
  }
})

return sortedArray

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {

  const orderedByTitle = moviesArr.map((newarr)=>{
    return newarr                                      // new whole array
  })

  const titleOrder = orderedByTitle.sort((a,b)=>{  
    if (a.title<b.title){
      return -1
    } else if(a.title>b.title) {
      return 1
    }
  },)                                             // whole array ordered alphabetically by title

    return titleOrder 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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