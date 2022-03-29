
// The `movies` array from the file `src/data.js`.
//console.log('movies:', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr) {
  let newFilmArray = arr.map(eachFilm => {
    //console.log(eachFilm)
    return eachFilm.director
  })
  return newFilmArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arraySpielberg) {
  let spielbergMovies = arraySpielberg.filter(eachSpielbergFilm => {
    return eachSpielbergFilm.director === 'Steven Spielberg' && eachSpielbergFilm.genre.includes('Drama')
  })

  return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(scores) {
  if (scores.length === 0) {
    return 0
  }
  else {
    let sumScores = scores.reduce((acc, eachMovie) => {
      if (eachMovie.score === undefined) {
        return 0 + acc
      } else {
        return acc + eachMovie.score
      }
    }, 0)
    let result = sumScores / scores.length
    let twoDecimals = Math.round(result * 100) / 100
    return twoDecimals
  }
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(dramaScore) {

  let dramaArray = dramaScore.filter(eachDramaFilm => {
    return eachDramaFilm.genre.includes('Drama')
  })
  if (dramaArray.length === 0) {
    return 0
  }
  let averageDrama = dramaArray.reduce((acc, eacheAverage) => {
    return acc + eacheAverage.score
  }, 0)
  let averageFinal = averageDrama / dramaArray.length
  let twoDecimals = Math.round(averageFinal * 100) / 100
  return twoDecimals


}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(yearOrder) {



  let newArray = [...yearOrder]

  newArray.sort((a, b) => {
    if (a.year < b.year) {
      return a.year - b.year
    } else if (a.title < b.title) {
      return -1
    }
  })
  return newArray
}






// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(orderByLetter) {

  let newArray = [...orderByLetter]

  let mapArray = newArray.map(elemet => {
    return elemet.title
  })

  let finalLetter = mapArray.sort((a, b) => {
    return a.localeCompare(b)

  })
  return finalLetter.slice(0, 20)
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
