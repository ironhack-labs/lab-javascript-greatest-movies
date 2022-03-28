// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {                         //les doy valor movies, pero podría dar cualquier valor>> arr
  const allDirectors = movies.map(eachMovie => {
    return eachMovie.director
  })
  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDramaMovies = movies.filter(eachMovie => {
    return eachMovie.genre.includes('Drama') && eachMovie.director === 'Steven Spielberg'
  })
  const resultToNumber = spielbergDramaMovies.length
  return resultToNumber
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(movies) {
//   if (movies.length === 0) {
//     return 0
//   }
//   const allScores = movies.reduce((acc, eachScore) => {
//     if (!eachScore.score) {
//       return acc
//     } else {
//       return acc + eachScore.score
//     }
//   }, 0)
//   return (allScores / movies.length).toFixed(2) * 1        //al multiplicar *1 convierto el string en número
// }

function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  }
  const allScores = movies.reduce((acc, eachMovie) => {
    return acc + (eachMovie.score || 0)                   //Si no hay score, 0 es el valor por defecto

  }, 0)
  const averageAllScores = (allScores / movies.length).toFixed(2) * 1        //al multiplicar *1 convierto el string en número
  return averageAllScores
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMovies = arr.filter(eachMovie => {
    return eachMovie.genre.includes('Drama')
  })
  const averageDramaMovies = scoresAverage(dramaMovies)
  return averageDramaMovies
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const arrCopy = JSON.parse(JSON.stringify(arr))       //también puedo hacer const arrCopy = [...movies] >> copia liviana
  arrCopy.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    }
    else if (a.year < b.year) {
      return -1;
    }
    else if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      }
      else if (a.title < b.title) {
        return -1;
      }
    }
  })
  return arrCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const arrCopy = JSON.parse(JSON.stringify(arr))
  arrCopy.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    else if (a.title < b.title) {
      return -1;
    }
  })
  const allTitles = arrCopy.map(eachMovie => {
    return eachMovie.title
  })
  const twentyTitleMovies = allTitles.splice(0, 20)
  return twentyTitleMovies

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
