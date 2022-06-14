// The `movies` array from the file `src/data.js`.
const movies = require("./data.js");
//console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directors = movies.map(movie => movie.director);
  //Bonus:
  return [...new Set(directors)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let splielbergDramas = movies.filter(movie => {
    if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
      return movie;
    }
  });
  return splielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length === 0) return 0;
  let sum = movies.reduce((acc, movie) => {
    if (movie.score == null ){
      return acc;
     } else{
      return acc + movie.score;
     } 
  },0);
 return Math.round((sum/movies.length)*100)/100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramas = movies.filter(movie => movie.genre.includes("Drama"));
  return scoresAverage(dramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let byYear = [...movies];
  byYear.sort((a, b) => {
    if(a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return byYear;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let byTitle = [...movies];
  byTitle.sort((a, b) => a.title.localeCompare(b.title));
  let sortedTitles = (byTitle.map(movie => movie.title)).slice(0, 20);
  return sortedTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let arrayWithTime = movies;
  let time = arrayWithTime.map(movie => {
    //console.log(typeof movie.duration);
    let timeComps = movie.duration.split(' ');
    let arrayTime = timeComps.map(element => {
      return parseInt(element);
    });
    return arrayTime;
  });
   time.map((time, index) =>{
    let hours = 0;
    if(!isNaN(time[0])) {hours = time[0]};
    let minutes = 0;
    if(!isNaN(time[1])) {minutes = time[1]};
    return arrayWithTime[index].duration = (hours*60) + minutes;
  });
  console.log(arrayWithTime);
  return arrayWithTime;
}
turnHoursToMinutes(movies);
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) return null;
}



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
