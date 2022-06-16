// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directors = movies.map ((index) => index.director)
  return directors  
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
 let Steven = movies.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
 return Steven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//suma del total de elemtos que se divide entre el mismo numero de elementos 

function scoresAverage(movies) {
  const avg = movies.reduce((acumulador, movie) => {
    if (isNaN(movie.score)) {
      return acumulador + 0 / movies.length;
    } else {
      return acumulador + movie.score / movies.length;
    }
  }, 0);
  return parseFloat(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  /*const theDramaMovies = movies.filter(n =>n.genre.includes('Drama') )
  const sumOfTheDramaMovies = theDramaMovies.reduce((aggr, movie) => movie.score + aggr, 0)
  // const sum = movies.reduce((,movie)=>movie.genre.Drama+ ,0)
  const avg = sumOfTheDramaMovies/theDramaMovies.length
  const avgWithDecimals = avg.toFixed(2)
  return Number(avgWithDecimals)*/

/*function dramaMoviesScore(movies) {
  if(movies.lenght === 0)
   return 0
  
  const dramita = movies.filter((movie) => movie.genre.includes('Drama'))
  const prom = suma (dramita) 
  return prom*/
  

 /* let dramita = movies.filter((queen) => movie.genre.includes('Drama'))
  const avg = movies.reduce((acumulador, movie) => {
    if (isNaN(movie.score)) {
      return acumulador + 0 / movies.length;
    } else {
      return acumulador + movie.score / movies.length;
    }
  }, 0);
  return parseFloat(avg.toFixed(2));*/

  /*const avg = movies.reduce((acumulador, movie) => {
    if (isNaN(movie.score && movie.genre.includes('Drama'))) {
      return acumulador + 0 / movies.length;
    } else {
      return acumulador + movie.score / movies.length;
    }
  }, 0);
  return parseFloat(avg.toFixed(2));*/

} 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//map copia, resultado sort
function orderByYear(){
/*function orderByYear() {
const lista = (movies.map(copia =>{
   return movie.year 
 })).sort(function (a,b){
  return a - b
 })
  lista.forEach(movie => (movie))
  
  
  //let cop = movies.sort
}*/
}
 



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// map, sort slice 
function orderAlphabetically() {}

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
