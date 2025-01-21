// Iteration 1: All directors? - Get the array of all directors. map

function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}
console.log(getAllDirectors(movies));

function getAllDirectorsCleaned(moviesArray) {
  return moviesArray
    .map((movie) => movie.director)
    .filter((director, index, array) => array.indexOf(director) === index);
}
console.log(getAllDirectorsCleaned(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const stevenSpielbergMovies = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return stevenSpielbergMovies.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals.
//should return average even if one of the movies does not have score
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const totalScore = moviesArray.reduce((sum, movie) => {
    if (movie.score || movie.score === 0) {
      return sum + movie.score;
    }
    return sum;
  }, 0);
  return parseFloat((totalScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (dramaMovies.length === 0) return 0;
  let totalScore = dramaMovies.reduce(
    (sum, movie) => sum + (movie.score || 0),
    0
  );
  return parseFloat((totalScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { 
    return [...moviesArray.sort((a, b) =>{
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  })];
  
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const orderedMovies = moviesArray.map((movie) => movie.title);
  return orderedMovies.sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
 
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
