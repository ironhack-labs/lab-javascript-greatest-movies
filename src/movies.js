// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let result = [];
  result = moviesArray.map((movie) => movie.director);
  return result;
}
//console.log(getAllDirectors(movies));
//Bonus:Do not repeat Director

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let result = 0;
  result = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
  return result;
}
//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;

  //filtrar las peliculas con score
  const filteredMovies = moviesArray.filter((movie) => movie.score);
  const sum = filteredMovies.reduce((sum, movie) => sum + movie.score, 0);
  let average = sum / moviesArray.length;
  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray.length) return 0;

  const filteredMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (!filteredMovies.length) return 0;

  const sum = filteredMovies.reduce((sum, movie) => sum + movie.score, 0);
  let average = sum / filteredMovies.length;
  return Math.round(average * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  //creo una copia exacta del moviesArray
  const moviesByYear = moviesArray.slice();
  // ordenar por año y title
  moviesByYear.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      //ordenar alph by title
      return a.title.localeCompare(b.title);
    }
  });
  return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const moviesAlphOrder = moviesArray.slice();
    
    const moviesTitles =  moviesAlphOrder.sort((a, b) => a.title.localeCompare(b.title)).map((movie) => movie.title);
    
    return moviesTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesInMinutes = moviesArray.slice();
    moviesDuration = moviesInMinutes.map(movie => {movie.duration = ConvertToMinutes(movie.duration); 

    //replace('h', ':').replace('min', '')
        
    })


    return moviesDuration;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {


}
