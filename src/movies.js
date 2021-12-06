// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map((movie => movie.director));
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  return arr.filter(movie => movie.director.includes("Steven Spielberg") && movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if(!arr.length) return 0;
  return +(arr.filter(movie => "score" in movie).reduce((sumScores, movie) => sumScores+movie.score,0)/arr.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  return scoresAverage(arr.filter(movie => movie.genre.includes("Drama")));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  return [...arr].sort((a, b) => {
    if(!(a.year - b.year)){
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  return [...arr].reduce((initialMovie,lastMovie) => [...initialMovie,lastMovie.title],[]).sort().splice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  return arr.map((movie) => {
    aux = {...movie};
    let hhmm = aux.duration.split(" ");
    if(hhmm.length===1&&hhmm[0].includes("min")){
      aux.duration=Number(hhmm[0].slice(0,hhmm[0].indexOf("min")));
    } else if(hhmm.length===1&&hhmm[0].includes("h")){
      aux.duration=Number(hhmm[0].slice(0,hhmm[0].indexOf("h")))*60;
    } else {
      aux.duration=Number(hhmm[0].slice(0,hhmm[0].indexOf("h")))*60+Number(hhmm[1].slice(0,hhmm[1].indexOf("min")));
    }
    return aux;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  //reduce -> object of arrays of objects separated by years
  if(!arr.length) return null;
  let years = arr.reduce((arrayYears, movie) => {
    if (movie.year in arrayYears) {
      arrayYears[movie.year].push(movie);
    }
    else {
      arrayYears[movie.year] = [movie];
    }
    return arrayYears;
  },{});
  let bestScore = 0;
  let bestYear;
  
  //Comparation of the scores by year
  for(let i of Object.keys(years) ){
    let scoreMovies = scoresAverage(years[i]);
    if(scoreMovies>bestScore){
      bestScore=scoreMovies;
      bestYear=i;
    }
  }
  return `The best year was ${bestYear} with an average score of ${bestScore}`;
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
