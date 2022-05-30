// The `movies` array from the file `src/data.js`.

const movies = require("./data")


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((movie) => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (movies.length === 0) {
    return 0
  }
  /*let dramaMovies = movies.filter((movie) => movie.genre === 'Drama') {
    return dramaMovies
  }
  const dramaStevenMovies = dramaMovies.filter((movie) => dramaMovies.director === "StevenSpielberg"){
    return dramaStevenMovies
  }*/
  /*const dramaMovies = movies.filter (() => movies.genre.includes("Drama"))
  const dramaStevenMovies = dramaMovies.filter (() => dramaMovies.director === 'Steven Spielberg')
  return Number(dramaStevenMovies.length)*/
  const dramaMoviesSteven = movies.filter((movie) => {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  })
  return dramaMoviesSteven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length === 0) {
    return 0
  }


  const sumMovies = movies.reduce((acc, curr) => {

    if (curr.hasOwnProperty('score')) { 

      if (curr.score >= 0) {
        acc += curr.score
      } 
      
        else if (curr.score === '') {
          acc += 0
        }  
    } 

    return Number(acc); 
  }, 0)

  return Number((sumMovies / movies.length).toFixed(2));  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
 /* const dramaAverage = movies.reduce((acc, curr) => dramaMovies.score + curr, 0)
  return Number((dramaAverage / dramaAverage.length).tofixed(2))*/
  const dramaMovies = movies.filter((movie) => {
    return movie.genre.includes('Drama')
  })
  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const newMoviesArr = movies.map(movie => movie)

  return newMoviesArr.sort((m1, m2) => {
    if (m1.year > m2.year) {
      return 1;
    } else if (m1.year < m2.year) {
      return -1;
    } else {
      return m1.title.localeCompare(m2.title);
    }
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies.map(movie => movie.title)
  .sort ((t1, t2) => {
    return t1.localeCompare(t2)
  })
  .slice(0, 20)
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
