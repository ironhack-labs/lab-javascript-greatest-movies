// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {

  const directors = movies.map(element => {
    //console.log(element.director)
    return element.director
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaMovies = movies.filter(element => {

    if (element.director === "Steven Spielberg" && element.genre.includes("Drama")) { //INCLUDES:devuelve un True o False
      console.log('las peliculas de spielberg de drama son')
      return element
    }
  })
  //console.log (dramaMovies.length)
  return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  }
  const totalScore = movies.map(element => {
    return element.score

  })
  const averageTotalScore = totalScore.reduce((acc, elm) => acc + elm) / movies.length
  return Math.round(averageTotalScore * 100) / 100 //Math.round(num*100)/100 Sacar la media.
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramasMovies = movies.filter(element => {
    if (element.genre.includes("Drama")) {
      return true
    }
  })
  if (dramasMovies.length === 0) {
    return 0
  } else {

    return scoresAverage(dramasMovies)
  }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const filmsByYear = movies.map(element => {
    return element.year
  })
  return filmsByYear.sort();
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const twentyFilmsByTitle = [];                //const nueva para condicion de 20 primeros
  const filmsByTitle = movies.map(element => { //Array con todos los titulos
    return element.title
  });
  filmsByTitle.sort();
  if (filmsByTitle.length > 20) {
    for (let i = 0; i < 20; i++) {
      twentyFilmsByTitle.push(filmsByTitle[i])
    }
    return twentyFilmsByTitle
  }
  else {

    return filmsByTitle
  }
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
