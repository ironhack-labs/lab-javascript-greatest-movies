// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   const onlyDirectors = moviesArray.map(function(element){
    return element.director
   })
   return onlyDirectors
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {}
function howManyMovies(movies){
const spielbergDramaMovies = movies.filter(element =>
    element.director === "Steven Spielberg" && element.genre.includes("Drama")
)
return spielbergDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
   if (moviesArray.length === 0) {
      return 0;
    }
    const totalScore = moviesArray.reduce((accumulator, currentValue) => {
      if (currentValue.score) {
        return accumulator + currentValue.score;
      } else {
        return accumulator;
      }
    }, 0);
const averageScore = totalScore / moviesArray.length;
return Math.round(averageScore * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'))
   const totalScore = dramaMovies.reduce((accumulator, currentValue) => {
    if (currentValue.score) {
      return accumulator + currentValue.score;
    } else {
      return accumulator;
    }
    
  }, 0);
    const averageScore = totalScore / dramaMovies.length;
    return Math.round(averageScore * 100) / 100 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const movies = [...moviesArray];
    movies.sort((a, b) => a - b)
    return movies

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map(element => element.title).sort()
  return titles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
