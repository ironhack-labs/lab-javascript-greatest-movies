// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

  const directorsArray = moviesArray.map(name => name.director);

  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let counter = 0;

  moviesArray.filter(movie => {
    if (movie.director === "Steven Spielberg"){
      movie.genre.filter(genreElement =>{
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
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    }
  });

  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const movieTitles = moviesArray.map(movieTitle => movieTitle.title.toLowerCase());

    const sortedArray = movieTitles.sort();

    if (sortedArray.length > 20) sortedArray.splice(20);

    return sortedArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let moviesArrayCopy = [...moviesArray];

  const changedArrayToMin = moviesArrayCopy.map(movieName =>{

    if (movieName.duration.includes('min')){
      if(parseFloat(movieName.duration[4])){
        movieName.duration = parseFloat(movieName.duration[0]) * 60 + parseFloat(movieName.duration[3]) * 10 + parseFloat(movieName.duration[4]);
      } else {
        movieName.duration = parseFloat(movieName.duration[0]) * 60 + parseFloat(movieName.duration[3]);
      }
    } else if (movieName.duration.indexOf('min') < 0){
      movieName.duration = parseFloat(movieName.duration[0] * 60);
    }
  });

  return changedArrayToMin;
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
