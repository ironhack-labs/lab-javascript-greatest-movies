// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map( movie => movie.director)
  /* console.log(directorsArray) */
  return(directorsArray)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielDramaMovies = moviesArray.filter( movies => movies.director === 'Steven Spielberg' && movies.genre.includes("Drama"))
  /* console.log(spielDramaMovies.length) */
  return spielDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0){
    return 0
  }
   const averageScore = moviesArray.reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0);
   let averageDecimals = (averageScore / moviesArray.length)
   /* console.log(averageDecimals.toFixed(2)) */
   return (averageDecimals.toFixed(2) * 1)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let onlyDramaArray = moviesArray.filter( movies => movies.genre.includes("Drama"));
  if (onlyDramaArray.length === 0){
    return 0
  }
  const sumDramaScore = onlyDramaArray.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0)
  /* console.log(sumDramaScore) */
  return (((sumDramaScore/onlyDramaArray.length).toFixed(2))* 1) 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let copyArray = [...moviesArray]
  copyArray.sort(function(a , b){
    if ( a.year != b.year ) {
      return a.year - b.year
    } else { 
      return a.title.localeCompare(b.title);
    }
  });
  return copyArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let copyTitles = moviesArray.map(movies => movies.title)
  copyTitles.sort()
  if (copyTitles.length > 20){
    return copyTitles.slice(0,20)
  }
  if (copyTitles.length <= 20){
    return copyTitles
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // No time :(
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
