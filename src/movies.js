// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const allDirectors = movies.map(eachFilm => {
    return eachFilm.director
  })

  return allDirectors

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

  const spielbergDramaFilms = movies.filter(eachFilm => {

    return eachFilm.director === `Steven Spielberg` && eachFilm.genre.includes(`Drama`)
  })
  console.log(spielbergDramaFilms.length)

  const aux = spielbergDramaFilms.length

  return aux

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length === 0) {
    return 0
  }

  const sumRating = movies.reduce((acc, eachFilm) => {

    if (!eachFilm.score) {
      return acc + 0
    } else {
      return acc + eachFilm.score
    }
  }, 0)
  return ((sumRating / movies.length).toFixed(2)) * 1

}


//console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const dramaFilms = movies.filter(eachFilm => {

    return eachFilm.genre.includes(`Drama`)
  })

  return scoresAverage(dramaFilms)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  //deep copy

  const moviesCopy = JSON.parse(JSON.stringify())

  moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) { 

  
  movies.sort(function (a, b) {
    return a.length - b.length;
  });
  return movies
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
