// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergArr = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg"
  );
  const spielbergDrama = spielbergArr.filter((movie) => {
    let genreString = movie.genre.join(",");
    return genreString.includes("Drama");
  });
  return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let scoreArr = [];
  moviesArray.map((movie) => scoreArr.push(movie.score));
  let sum = scoreArr.reduce((a, b) => a + (b || 0), 0);
  let scoreAvg = sum / scoreArr.length || 0;
  return +scoreAvg.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaArr = moviesArray.filter((movie) => {
        let genreString = movie.genre.join(",");
        return genreString.includes("Drama");
      });
      let scoreArr =[];
      dramaArr.map((movie) => scoreArr.push(movie.score));
      let sum = scoreArr.reduce((a, b) => a + (b || 0), 0);
      let scoreAvg = sum / scoreArr.length || 0;
      return +scoreAvg.toFixed(2);    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let dupArray = moviesArray.slice();
    return dupArray.sort((a,b) => {
        return a.year - b.year || a.title.localeCompare(b.title)});
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titleArr = moviesArray.map(movie => movie.title)
    return titleArr.sort((a,b) => a.localeCompare(b)).slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
