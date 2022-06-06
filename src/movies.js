
// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(eachDirector => {
    return eachDirector.director
  })
  return directors

}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenMovies = movies.filter(eachFilm => {
    const spielberg = eachFilm.director.includes('Steven')
    const dramaFilms = eachFilm.genre.includes('Drama')
    return spielberg && dramaFilms
  })
  return stevenMovies.length

}





// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const sumScore = movies.reduce((acc, eachMovie) => {
    return acc + eachMovie.score
  }, 0)
  const average = sumScore / movies.length
  const stringNumber = average.toFixed(2)
  if (movies.length === 0) {
    return 0
  }
  return parseFloat(stringNumber)

}







// Iteration 4: Drama movies - Get the average of Drama Movies

/*function dramaMoviesScore(movies) {
  const sumDramas = movies.reduce((acc, eachDrama) => {
    return acc + eachDrama.genre.includes('Drama')
  }, 0)
  const average = sumDramas / movies.length
  const averageFixed = average.toFixed(2)
  return parseFloat(averageFixed)
} */

function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(eachFilm => {

    const dramaFilms = eachFilm.genre.includes('Drama')
    return dramaFilms
  })
  const averageDrama = scoresAverage(dramaMovies)
  return averageDrama
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order) 


function orderByYear(movies) {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
  moviesCopy.sort((a, b) => {
    if (a.year > b.year) {
      return 1
    }
    else if (a.year < b.year) {
      return -1
    } else if (a.year = b.year) {
      a.title > b.title
      return 1
    } else if (a.year > a.year) {
      a.title < b.title
      return -1
    }
  })
  return moviesCopy
}






// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  const moviesCopy = JSON.parse(JSON.stringify(movies))
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
