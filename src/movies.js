// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsArray = moviesArray.map((movie) => {
    return movie.director
  });
  return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if(moviesArray.length === 0 ){
    return 0
  } 
  let numOfSpielbergAndDramaMovies = moviesArray.filter( (movie) => {
    return movie.genre.includes(`Drama`) && movie.director === `Steven Spielberg`
  });

  return numOfSpielbergAndDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let suma = moviesArray.reduce((acc, movie) => {
    if(movie.score !== undefined){
      return acc + movie.score
    }
    return acc
  }, 0);
  let media = suma / moviesArray.length
  return parseFloat(media.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMoviesArray = moviesArray.filter((movie) => {
    return movie.genre.includes(`Drama`)
  });
   

  if (dramaMoviesArray.length === 0) {
    return 0;
  }
  let suma = dramaMoviesArray.reduce((acc, movie) => {
    if(movie.score !== undefined){
      return acc + movie.score
    }
    return acc
  }, 0);
  let media = suma / dramaMoviesArray.length
  return parseFloat(media.toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesSortedByYear = moviesArray.toSorted((movie1, movie2) => {
    if(movie1.year < movie2.year) {
      return -1
    } else if(movie1.year > movie2.year) {
      return 1
    } else {
      return movie1.title.localeCompare(movie2.title)
      
    }
  });
  return moviesSortedByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {


  let moviesSortedByTitle = moviesArray.toSorted( (movie1, movie2) => {
    return movie1.title.localeCompare(movie2.title)
  });
  console.log("e",moviesSortedByTitle);
  let titlesMoviesSortedByTitle = moviesSortedByTitle.map( (movie) => {
    return movie.title
  });
  
  let shortenedMoviesArr = titlesMoviesSortedByTitle.slice(0,20);
  return shortenedMoviesArr
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
