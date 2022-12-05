// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramas = moviesArray.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
  return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const scoreArray = moviesArray.map((movie) => movie.score);
  if (moviesArray.length === 0) {
    return 0;
  } else {
    const scoreArrayTrue = scoreArray.filter((score) => typeof score === "number");
    const totalScore = scoreArrayTrue.reduce((a, b) => a + b);
    const scoresAverage = Number((totalScore / moviesArray.length).toFixed(2));
    return scoresAverage;
  }


}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));
  const scoreArray = dramaMovies.map((movie) => movie.score);
  if (dramaMovies.length === 0) {
    return 0
  } else {
    const scoreArrayTrue = scoreArray.filter((score) => typeof score === "number");
    const totalScore = scoreArrayTrue.reduce((a, b) => a + b);
    const scoresAverage = Number((totalScore / dramaMovies.length).toFixed(2));
    return scoresAverage;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesOrderByYear = [...moviesArray].sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      return a.title.localeCompare(b.title);
    }
  })
  return moviesOrderByYear;
} 
// newMoviesOrderByYear = moviesOrderByYear.map((movie) => movie)     

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesTitle = moviesArray.map((movie) => movie.title);
  const alphabeticOrder = moviesTitle.sort()
  return alphabeticOrder
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
