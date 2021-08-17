// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

//const movies = require("./data");

// con esta funcion obtengo los directores en una nueva array
function getAllDirectors(movies) {
  const directorsArray = movies.map(movie => {
  return movie.director;
  })
  
  return directorsArray;
}
// en esta funcion quito los duplicados
// const directors = getAllDirectors(movies);
// function cleanDirectors (directorsArray){ 
//   const nonDuplicated = directorsArray.reduce((acumulador, currentvalue)=> {   
//     if(acumulador === currentvalue){
//      return acumulador; 
//     }else{
//       return acumulador.push(currentvalue);
//     }
//   })
// }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(movie => {
    return movie.director == 'Steven Spielberg' && movie.genre.includes('Drama');
    })
    spielbergMovies.length;
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const scoresSum = movies.reduce(function(acumulator,current){
    return acumulator+=current.score;
  },0) 
  let average = scoresSum/movies.length;
  return Math.round(average*100)/100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies 
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(movie => {
    return movie.genre.includes('Drama');
  })

  const dramaScores = dramaMovies.filter(dramaMovie =>{
    return dramaMovie.score;
  })

  return scoresAverage(dramaScores); 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sorted = movies.sort((a,b)=>{
    return a.year - b.year;
  })
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const alphabetcally = movies.sort((a,b)=>{
    return a.title - b.title;
  })
  return alphabetcally;
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
