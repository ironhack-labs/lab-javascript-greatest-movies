// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

//console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let spielbergDramas = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return spielbergDramas.length;
}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  let totalScore = moviesArray.reduce((a, b) => {
    if (b.score) {
      return a + b.score;
    }
    return a;
  }, 0);

  let average = totalScore / moviesArray.length;
  return parseFloat(average.toFixed(2));
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) return 0;

  let dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (dramaMovies.length === 0) return 0;

  let totalScore = dramaMovies.reduce((a, b) => {
    if (b.score) {
      return a + b.score;
    }
    return a;
  }, 0);

  let average = totalScore / dramaMovies.length;
  return parseFloat(average.toFixed(2));
}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const cloneOfmoviesArray = structuredClone(moviesArray);
  return cloneOfmoviesArray.sort((a, b) => {
    if (a.year === b.year) {
      a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const cloneOfmoviesArray = structuredClone(moviesArray);
  let movieTitle = cloneOfmoviesArray.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  let first20Titles = movieTitle.map((movie) => movie.title).slice(0, 20);
  return first20Titles;
}
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const cloneOfmoviesArray = structuredClone(moviesArray);
  let totalHours = cloneOfmoviesArray.reduce((acc, curr) => {
    return acc + 1;
  }, 0);
  console.log(totalHours);
  let minutes = totalHours * 60;
  return minutes;
  /*let singleMovieMins = cloneOfmoviesArray.filter((movie) =>{
      movie.duration
   })*/
}

console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
