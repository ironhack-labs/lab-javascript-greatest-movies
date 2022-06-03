// The `movies` array from the file `src/data.js`.



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let dArr = arr.map(function(element){
      return element.director
  })
  return dArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let counter = arr.filter(function(element){
    if (element.director == 'Steven Spielberg' && element.genre.indexOf('Drama') != -1) {
       return true
    }
  })
  return counter.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length == 0) {
    return 0
  }
  let counter = 0;
  let reduced = arr.reduce(function(sum, element){
    if (element.score == undefined || element.score == '') {
      element.score = 0;
    }
      return sum + element.score
  },0)
  let x = reduced/(arr.length-counter)
  return Number(x.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let drama = arr.filter(function(element){
    console.log(element)
    for (let i = 0; i < element.genre.length; i++) {
      if(element.genre[i] == 'Drama'){
        return true
      }
    }
  })
  return scoresAverage(drama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  arr2=arr.slice()
  arr2.sort(function(a,b){
    if (a.year-b.year == 0) {
    
      return a.title.localeCompare(b.title)
    }
    else{
      return a.year - b.year 
    }

  })
  return arr2
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) { 
  let arr20 = arr.map(function(el){ 
    return el
  })
  arr20.sort(function(a,b){
    return a.title.localeCompare(b.title)
  })
   arr20 = arr20.slice(0,20).map(function(el){ 
    return el.title
  })
  return arr20
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
