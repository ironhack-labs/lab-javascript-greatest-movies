// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {  
  const directors = movies.map(filmes => filmes.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevenDrama = movies.filter((movie) => {
    if(movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama") !== -1) {
      return movie;
    }
  });
  return stevenDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

// Carla, can we do this with just reduce?
function scoresAverage(movies) {
  if (!movies.length) {return 0}
  const scoreArray = movies.map(movie => movie.score);
  const avgScore = scoreArray.reduce((accumulator, currentValue) => {
    if (!currentValue) {return accumulator} 
    else {return (accumulator + currentValue)}
  });
  return parseFloat((avgScore / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => {
    if(movie.genre.indexOf("Drama") !== -1) {
      return movie;
    } 
  });
  if (!dramaMovies.length) {return 0;}
  const scoreArray = dramaMovies.map(movie => movie.score);
  const avgScore = scoreArray.reduce((accumulator, currentValue) => {
    if (!currentValue) {return accumulator} 
    else {return (accumulator + currentValue)}
  });
  return parseFloat((avgScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
 const orderedMovies = movies.sort((a, b) => {
   if (a.year === b.year) {
     return a.title.localeCompare(b.title);
   } else {
     return a.year - b.year;
   }
  });
 return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesAlphArr = [];
  for (let i = 0; i < 20; i++) {
    if (movies[i]) {
      moviesAlphArr.push(movies[i].title);
    }
    
  }
  moviesAlphArr.sort();
  return moviesAlphArr;
  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
