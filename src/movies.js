// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(arr) {
  let directors = arr.map(function(movie){
    return movie.director
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr2) {
  let spielberg = arr2.filter(function(number){
    if (number.director === "Steven Spielberg" && number.genre.includes("Drama")){
      return true
    }
    return false 
  })
   return spielberg.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr3) {
  let arrScore = arr3.map(function(number){
    return number.score 
  })

  const sumScore = arrScore.reduce(function (acc, val) {
   
    return acc + val
    }, 0 )
  if (sumScore === 0){
    return 0
  } else{
return parseFloat((sumScore / arrScore.length).toFixed(2))
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr4) {
  let dramas = arr4.filter(function(drama){
    if (drama.genre.includes("Drama")){
      return true 
    }
    return false
    })
    const sumDrama = dramas.reduce(function(accu, valu){
      return accu + valu.score
    }, 0)
    if (sumDrama === 0){
      return 0
    } else{
  return parseFloat((sumDrama / dramas.length).toFixed(2))
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr5) {
  let clone = arr5.slice()
  const year = clone.sort (function(a, b){
    if (a !== b){
      return a.year - b.year 
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1
    } else {
      return -1
    }
  })
  return year
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr6) {
     let newArr = arr6.slice()
     const order =  newArr.sort(function(a, b){
      if (a.title.toUpperCase() > b.title.toUpperCase()){
        return 1
      } else if (a.title.toUpperCase() < b.title.toUpperCase()){
        return -1
      }
      return 0
    })
    firstTwenty = order.slice(0, 20)
     let titles = firstTwenty.map(function(title){
      return title.title
    })
    return titles
     
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr7) {
  // 'let arrMinute = arr7.slice()
  // let time = arrMinute.map(function(timer){
  //   return timer.duration
  // })
  //    let minute = time.slice("h")
  //    console.log (minute)
  // for (i=0; i > arrMinute.length; i++)
  // // let minute = arrMinute[i].duration.slice("h")
  // // let convert = parseFloat(minute)
  // onmouseleave.log (minute)'
}

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
