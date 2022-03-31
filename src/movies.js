// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = [];
  let directorsFiltered = [];

  moviesArray.map(element => directors.push(element.director));

  directors.filter((directorName, index) =>{
    if (directors.indexOf(directorName) === index){
      directorsFiltered.push(directorName);
    }
  });

  return directorsFiltered;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let counter = 0;

  moviesArray.filter(element => {
    if (element.director === "Steven Spielberg"){
      element.genre.filter(genreElement =>{
        if (genreElement === "Drama") counter ++;
      });
    }
  });

  return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;

  let movieScoresTotal = moviesArray.reduce((accumulator, currentValue) => { 
    if (currentValue.score === undefined) return accumulator;

    return accumulator + currentValue.score;
  },0);
  
  let movieScoresAvg = movieScoresTotal / moviesArray.length;
  
  return parseFloat(movieScoresAvg.toFixed(2));
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = [];

  moviesArray.filter((element) => {
    element.genre.filter((movieGenre)=>{
      if (movieGenre === 'Drama') {
        dramaMovies.push(element.score);
      }
    })
  });

  if (dramaMovies.length === 0) return 0;

  let dramaMoviesTotal = dramaMovies.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
  });

  let dramaMoviesAvg = dramaMoviesTotal / dramaMovies.length;

  return parseFloat(dramaMoviesAvg.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sorted = [...moviesArray];
  
  sorted.sort((a,b)=>{
    if(a.year !== b.year) {
     return a.year - b.year;
    } else {
      const nameA = a.title.toLowerCase();
      const nameB = b.title.toLowerCase();

       if (nameA < nameB) {
         return -1;
       }
       if (nameA > nameB) {
        return 1;
      }
    }
  });

  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let counter = 0;
  let moviesArrayToSort = [...moviesArray];
  let topTwentyMovies = [];

  moviesArrayToSort.sort((a, b) => {
    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  });

    moviesArrayToSort.filter((element) => {
      if (counter < 20) {
      topTwentyMovies.push(element.title);
      counter ++;
      }
    });

  topTwentyMovies.sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

 return topTwentyMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let arrayToUpdate = [...moviesArray];
  let durationInMinutes = 0;

  const timeInMinutesArray = arrayToUpdate.map((element) => {
    let timeArray = [...element.duration];

    
  });

  return timeInMinutesArray;
}

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
