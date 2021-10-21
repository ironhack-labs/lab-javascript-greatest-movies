// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directors = movies.map((elem) => {
    return elem.director
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spiegelMovie = movies.filter((elem) => {
    return elem.director === "Steven Spielberg" && elem.genre.includes("Drama")
  })
  console.log(spiegelMovie.length)
  return spiegelMovie.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length == 0 ){
    return 0
  }
  let answer = movies.reduce((sum, elem) => {
    if (!elem.score) {
      return sum
    }
    else {
      return sum + elem.score
    }
  }, 0)
  console.log(Number((answer/movies.length).toFixed(2)))
  return Number((answer/movies.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  // if (!movies.genre.includes("Drama")) {
  //   return 0
  // }

  let avDrama = movies.filter((elem) => {
    return elem.genre.includes("Drama")
  
  })
  return scoresAverage(avDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let clone = JSON.parse( JSON.stringify(movies) )
  console.log(clone.year)

  clone.sort( (first, second) => {
       if (first.year > second.year) {
          return 1       
       }
       else if (first.year < second.year) {
         return -1
       }
       else {
        if (first.title > second.title) {
        return 1       
      }
        else if (first.title < second.title) {
          return -1
      }
        else {
          return 0
      }}
  })
  return clone
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let mappedArray = movies.map((elem) => {
    return elem.title
  })
  mappedArray.sort( (first, second) => {
    if (first > second) {
       return 1       
    }
    else if (first < second) {
      return -1
    }
    else {
       return 0
   }
})
  return mappedArray.slice(0,20)
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
