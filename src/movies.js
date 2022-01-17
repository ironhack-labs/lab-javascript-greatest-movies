// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data")

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {

  const allDirectors = array.map((eachMovie) => {

    return eachMovie.director
  }
  )

  return allDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {

  const spilbergMov = array.filter((eachMovie) => {

    return eachMovie.director.includes('Spielberg') && eachMovie.genre.includes('Drama')

  }
  )

  return spilbergMov.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {

  if (!array.length) {
    return 0
  } else {

    const sumAverages = array.reduce((acc, eachMovie) => {


      if (typeof eachMovie.score != 'number') {

        eachMovie.score = 0
      }

      let sum = acc + eachMovie.score
      return sum

    }, 0
    )

    let average = sumAverages / array.length
    
    return Number(average.toFixed(2))
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {

  const dramaMovies = array.filter((eachMovie) => {
    return eachMovie.genre.includes('Drama')
  }
  ) //final filtro drama
  
  return scoresAverage(dramaMovies)


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  
  const toOrder = JSON.parse(JSON.stringify(array))
  
  

  toOrder.sort(function (a, b) { //ordenar string
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  toOrder.sort((a, b) => a.year - b.year); // ordernar numeros
  
   
  return toOrder
 }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) { 

  const toOrder = JSON.parse(JSON.stringify(array))
  
  toOrder.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  const onlyTitle = toOrder.map((eachValue) => {
        
    return eachValue.title
  })

  let firstTwenty = onlyTitle.splice(0, 20)

  return firstTwenty
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



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
