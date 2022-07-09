// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray
    .filter((movie) => movie.director)
    .map((movie) => movie.director); 

  return [...new Set(directorsArray)]; 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (everyMovie) => 
      everyMovie.director === "Steven Spielberg" && 
      everyMovie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let counter = 0 
  let reduced = moviesArray.reduce((prev, curr) => {
    if (curr.score) {
      return prev + curr.score; 
    } else {
      return prev;
    }
  }, 0); 

  return Number((reduced / moviesArray.length-counter).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((everyMovie) => {
    for (let i = 0; i < everyMovie.genre.length; i++) {
      if (everyMovie.genre[i] === "Drama") {
        return True
      }
    }
  });
  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...newMoviesArray].sort((firstMovie, secondMovie) => {
    if (firstMovie.year === secondMovie.year) {
      return (firstMovie.title).localeCompare(secondMovie.title)
    } 
    return firstMovie.year - secondMovie.year
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return [...moviesArray]
  .sort((prev, curr) => {
    if (prev.title > curr.title) {
      return 1;
    } else if (prev.title < curr.title) {
      return -1;
    } else {
      return 0;
    }
  })
  .map((everyMovie) => everyMovie.title)
  .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { 
}



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
