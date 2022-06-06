// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const mappedArray = movies.map(function (movie) {
    return movie.director
  })
  return mappedArray
}

//==================================
// function numberDouble(array){
//   const newArray = array.map(function (number){
//     return number *2
//   })

//   其他的功能

//   return newArray
// }
//==================================

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?




function howManyMovies(movies) {
  const theBest = movies.filter(function (allDirector) {
    return allDirector.director === 'Steven Spielberg' && allDirector.genre.includes('Drama')
  })
  return theBest.length
}

//includes or indexOf   



// function howManyMovies(movies) {
//   const theBest = movies.filter(function (allDirector) {
//     if (allDirector.director === 'Steven Spielberg') {
//       newArray2 =
//       {
//         title: allDirector.title
//       }
//       return newArray2
//     } else if (theBest.length === 0){
//       return 0
//     }
//   })
//   return theBest
// }


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  }
  const theAverage = movies.reduce(function (pre, cur) {
    if (typeof cur.score === 'number') {
      return (pre + cur.score)
    } return pre
  }, 0)

  return Number((theAverage / movies.length).toFixed(2))
}



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  if (movies.length === 0) {
    return 0
  }
  const findDrama = movies.filter(function (obj) {
    if (obj.genre.includes('Drama')) {
      return true;
    }
  })
  return scoresAverage(findDrama)
}




// function dramaMoviesScore(movies) {
//   if(movies.length === 0){
//     return 0
//   }
//   const theAverageDrama = movies.reduce(function (pre, cur) {
//     if(typeof cur.score === 'number' && movies.genre.includes('Drama') ){
//       return (pre + cur.score)
//     }return pre
//   },0)
//   return Number((theAverageDrama / movies[''].genre.includes('Drama').length).toFixed(2))
// }




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  byYearResult = [...movies].sort(function (a, b) {
    return a.year - b.year || a.title.localeCompare(b.title)
  })
  return byYearResult
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


// function orderAlphabetically(movies) {
//   byTitleResult = [...movies].sort(function (a, b) {
//     return a.title.localeCompare(b.title)
//   })
//   return byTitleResult
// }


function orderAlphabetically(movies) {
  onlyTitle = movies.map(function (ele) {
    return ele.title
  })
  return onlyTitle.sort().slice(0,20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) { 
  let newDuration = 0
    let minDuration = 0
    let hrDuration = 0
  return movies.map(function(movie){
    for (let movie of movies){
      if (movie.duration.includes('h')){
        hrDuration = Number(movie.duration.slice(0,movie.duration.indexOf('h')-1)) * 60
      }
      if (movie.duration.includes('min')){
        minDuration = Number(movie.duration.slice(movie.duration.indexOf(' ')+1, movie.duration.indexOf('m')))
      }
    }
      
   return  {...movie, duration: newDuration = hrDuration + minDuration }
  })
}




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



