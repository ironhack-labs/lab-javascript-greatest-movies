// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   const allDirectors = moviesArray.map((movie) => {
      return movie.director
   })

   return [...new Set(allDirectors)]

}

// let uniques = [ ...new Set([1, 2, 3, 1, 1]) ]; // [1, 2, 3]

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   const stevenSpielbergMovies = moviesArray.filter(movie => {
      return movie.director.toLowerCase() === 'steven spielberg' && movie.genre.includes('Drama')
   })

   return stevenSpielbergMovies.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
   if (!moviesArray.length) {
      return 0
   }
   const scoreAverageMovies = moviesArray.reduce((acc, movie) => {
      if (!movie.score) {
         return acc + 0
      }
      else { return acc + movie.score }
   }, 0)

   let media = scoreAverageMovies / moviesArray.length
   return Number(media.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   const filterDramasMovies = moviesArray.filter(movie => {
      return movie.genre.includes('Drama')
   })
   return scoresAverage(filterDramasMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
   const copyMoviesArraY = [...moviesArray]
   copyMoviesArraY.sort((a, b) => {
      if (a.year > b.year) {
         return 1
      } else if (a.year < b.year) {
         return -1
      } else if (a.title > b.title) {
         return 1
      } else if (a.title < b.title) {
         return -1
      } else {
         return 0
      }
   })

   return copyMoviesArraY
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
   const moviesTitle = moviesArray.map((movie) => {
      return movie.title
   })

   return moviesTitle.sort().splice(0, 20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
