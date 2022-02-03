
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {

  return arr.map (element => element.director)
  
}
  

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data")

// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {

const totalMovies = arr.filter (element => {

return element.director === 'Steven Spielberg' && element.genre.includes ('Drama')

})
  
return totalMovies.length

}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(arr) {

  if (arr.length === 0) {
    return 0
  }

  const noScore = arr.filter (element => element.score )

  const sum = noScore.reduce((acc, element) => {

  return  acc+ element.score
    
  }, 0)


return parseFloat((sum/ arr.length).toFixed(2))

}


 

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(arr) {

  const drama = arr.filter (element => element.genre.includes('Drama') ) 

  
  if (!drama.length){
    return 0;
  }
   
  const sumAvg = drama.reduce((acc, element) => {

    return  acc+ element.score
        
    }, 0);

    
return Math.round(sumAvg/drama.length*100)/100
    
}
    


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (arr) {
  
  let newArr = [...arr]
 
  let orderArr = newArr.sort ( (a, b) => {

    if (a.year === b.year){
     return a.title.localeCompare(b.title)
    }
  return a.year - b.year
})

return orderArr

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  const filmTitle =  arr.map( element => element.title)

  const arrOrdered = filmTitle.sort().slice(0,20);

  return arrOrdered

  } 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {

  let newArr = [...arr]
  
  const time = newArr.map ( element => {
  
  let durationStr = element.duration.match(/\d+/g)
  
  //console.log(durationStr)
  
  let hours = 0 ; hours = Number((durationStr[0]) * 60)
  
  let minutes = 0

  if (durationStr[1]) {
    minutes = Number(durationStr[1])
  }
  

  let sum = hours + minutes //Total minutes
  
  //console.log(duration)
  
  element.duration = sum
  
  
  });
  
 return newArr

  };
  
  
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
