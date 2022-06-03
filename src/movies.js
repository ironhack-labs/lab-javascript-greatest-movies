// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);
// console.log("movie")


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {

  // const getAllDirectors = (movies) => {
  //   return movies.map((movie) => movie.director);
  // };
  const moviesDirector = moviesArr.map(function(movie) {
    return (movie.director) 
  })
  // console.log(moviesDirector)
  return moviesDirector
}
// getAllDirectors(movies)





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movieArr) {
      const spielMovie = movieArr.filter(movie => {
       return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    })
 return spielMovie.length
}
// console.log(howManyMovies(movies))



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if(arr.length === 0) {
    return 0;
  }
  return Number((arr.reduce((scureSum, curent) => {
    if(typeof curent.score === "number") {
      scureSum += curent.score 
    } 
    return scureSum
  }, 0) / arr.length).toFixed(2))

}

// console.log(scoresAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const dramaMovie = moviesArr.filter(movie => {
    return movie.genre.includes("Drama")
  })
  // console.log(dramaMovie)
  return (scoresAverage(dramaMovie))
}

// console.log(dramaMoviesScore(movies))




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieArr) {
 
return [...movieArr].sort((movie1, movie2) => {
  if(movie1.year === movie2.year) {
    return (movie1.title).localeCompare(movie2.title) 
  }
  return movie1.year - movie2.year 

})
}

// console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

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
