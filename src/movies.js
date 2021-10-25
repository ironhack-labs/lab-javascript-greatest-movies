// Iteration 1: All directors? - Get the array of all directors.
const movies = require("./data");
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const directors = movies.map(movie => movie.director);

  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

    const countOfMovies = movies.filter(movie => movie.director.toUpperCase() === "STEVEN SPIELBERG")

    let countOfDrama = 0;
    
    countOfMovies.forEach(movie => {
      
      if (movie.genre.indexOf("Drama") > -1) {
        //console.log(countOfDrama);

        return countOfDrama++;
      }
    }) 

    //console.log(countOfDrama);
    return countOfDrama;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length === 0) {
    return 0;
  }

  const average = movies.reduce((acc, currentValue) => {

    if (isNaN(currentValue.score)) {
      return acc;
    }  
    return acc + currentValue.score;
  }, 0)


  return parseFloat((average / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const dramaMovies = movies.filter(movie => {
      
      if (movie.genre == "Drama") {
        return movie;
      }
    }) 

    if (dramaMovies.length === 0) {
    return 0;
  }

    const average = dramaMovies.reduce((acc, currentValue) => {

    if (isNaN(currentValue.score)) {
      return acc;
    }  
    return acc + currentValue.score;
  }, 0)

    return parseFloat((average / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const moviesCopy = [...movies];

  moviesCopy.sort((a, b) => {

    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }

    return a.year - b.year;
  });

  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const moviesTitles = movies.map(movie => movie.title);

  let top20Movies = [];

  if (moviesTitles.length > 20) {
    top20Movies = moviesTitles.slice(0, 20);
  }
  else{
    top20Movies = [...moviesTitles]
  }
  
  top20Movies.sort((a, b) => a.localeCompare(b));

  console.log(top20Movies)

  return top20Movies;
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
