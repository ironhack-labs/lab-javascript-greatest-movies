// Iteration 1: All directors? - Get the array of all directors.

const movies = require("./data");

function getAllDirectors(moviesArray) { 
  return moviesArray.map((movie) => {
    return movie.director; 
  });
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = moviesArray => {
  const filteredMoviesArray = moviesArray.filter((movie) => {
    return movie.director.toUpperCase() === "STEVEN SPIELBERG" && movie.genre.includes("Drama");
  });

  return filteredMoviesArray.length
};

howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const scoreSum = moviesArray.reduce(function(acc, element) {
    if (!element.score){
      return acc + 0;
    }

    return acc + element.score;
    
  }, 0);

  const avg = (scoreSum / moviesArray.length).toFixed(2);

  return +avg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesScore = moviesArray => {
  if (moviesArray.length === 0) return 0;


  const dramaAvg = moviesArray.reduce((acc, movie) => {
    if (movie.genre.includes('Drama')) {
      acc.scoreSum += movie.score;
      acc.dramaMoviesQuantity += 1;


      return acc;
    }


    return acc;
  }, { scoreSum: 0, dramaMoviesQuantity: 0 });


  if (dramaAvg.dramaMoviesQuantity === 0) return 0; 


  const avg = (dramaAvg.scoreSum / dramaAvg.dramaMoviesQuantity).toFixed(2);


  return +avg;  
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = JSON.parse(JSON.stringify(moviesArray));


  moviesCopy.sort((movie1, movie2) => {
    if (movie1.year < movie2.year) return -1;


    if (movie1.year > movie2.year) return 1;


    return movie1.title.localeCompare(movie2.title);
  });


  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = moviesArray => {
  const movieTitles = moviesArray.map(movie => movie.title);


  movieTitles.sort((movie1, movie2) => movie1.localeCompare(movie2));


  return movieTitles.slice(0, 20);

};



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
