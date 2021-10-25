// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
//PONER DE PARAMETRO MOVIES Y NO UTILIZAR EL MOVIES'REQUIRE'
function getAllDirectors(movies) {


  const allDirectors = movies.map(eachDirector => {

    const director = eachDirector.director;

    return director

  })


  return allDirectors

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const spielbergDramas = movies.filter(filter => {
  return filter.director.includes('Steven Spielberg') && 
  filter.genre.includes('Drama')

  })

  return spielbergDramas.length

}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

    let count = 0;
    if (movies.length === 0) {
      return 0
    } else {
      movies.forEach(eachMovies => {
        if (eachMovies.score) {
          count += eachMovies.score
        } else {
          count += 0
        }
      }
      )
    }
    return Number((count / movies.length).toFixed(2));

}


  //---- ignorar
  // if (movies.length === 0){
  //   return 0
  // } else {
  //   const score = movies.map(arr => {
  //     return arr.score
  //   }) 

  //   const scoreReduce = score.reduce((acc, eachNumber) => {
  //     return acc + eachNumber
  //   }) 

  //   let result = scoreReduce / score.length;
    
  //   if (result){
  //   return Number(result.toFixed(2)) 
  //   } else {
  //     return Number(result)
  //   }
    
  // }
  // -------------------------------------------------




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) { 

  let dramaFilter = movies.filter(filter => {
    return filter.genre.includes('Drama')
  })

  let count = 0;

  if (!dramaFilter.length) {
    return 0
  } else {
    movies.forEach(eachMovies => {

    let dramaFilter = movies.filter(filter => {
      return filter.genre.includes('Drama')
    })


    if (eachMovies.score && dramaFilter ) {
        count += eachMovies.score
    } else {
        count += 0
    }
    }
    )
  }
  return Number((count / movies.length).toFixed(2));


  

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) { 

const order = movies.map(orderArr => {
  return orderArr.year
})

 const ordered = order.sort((a, b) => {return a - b})


 return ordered

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) { 

  const moviesCopy = [...movies]
  const alphaOrder = moviesCopy.sort((a, b) => a.title.localeCompare(b.title))
  
  return alphaOrder.slice(0, 20)

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
