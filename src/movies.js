// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Con un for i
function getAllDirectorsFori(movies) {
  const directors = [];
  for (let i = 0; i < movies.length; i++){
    directors.push(movies[i].director)
  } return directors;
}

// Con un for of
function getAllDirectorsForof(movies){
  const directors = [];
  for (let movie of movies){
    directors.push(movie.director)
  } return directors
}
//Con un map
function getAllDirectors(movies) {
  return movies.map((movie)=> movie.director)}

//Bonus
uniqueArray = getAllDirectors(movies).filter((movie, pos)=> getAllDirectors(movies).indexOf(movie) === pos)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter((movie)=>movie.director==="Steven Spielberg" && movie.genre.includes("Drama")).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length!=0){
  return Math.round(((movies.reduce((avg,movie) => {
    if (!movie.score){movie.score=0}
    avg=avg+movie.score
    return avg
  },0))/movies.length)*100)/100;}
  else return 0
}

// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesScore(movies) {
  const justDrama = movies.filter((movie) => {
    return movie.genre.includes("Drama")
  })
  return scoresAverage(justDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

/* Sort without by year without caring alphabetical order of movies:
function orderByYear(movies) {
  return movies.sort((a, b) => a.year - b.year);
}
*/

function orderByYear(movies) {
  return movies.slice().sort((moviea, movieb) => { 
    if (moviea.year === movieb.year){
    return moviea.title.localeCompare(movieb.title)}
    else if (moviea.year < movieb.year){
    return -1;}
    else return 1;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  return movies.slice().sort((moviea, movieb) => {
    if (moviea.title === movieb.title){
    return moviea.title.localeCompare(movieb.title)}
    else if (moviea.title < movieb.title){
    return -1;}
    else return 1;
  }).slice(0,20).map((movie)=> movie.title)
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
