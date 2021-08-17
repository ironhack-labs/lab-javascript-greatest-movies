// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//const movies = require("./data");

const movies = require("./data");


function getAllDirectors(movies) {

  const directors = movies.map((x)=>x.director);
  /*
})
  const directors = movies.map(function (x){

    return x.director;

  });
*/
  return directors;
 }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
/*
FUNCION FLECHA 
-----------------
function howManyMovies(movies) {
  let spielberg = movies.filter(theBest => theBest = theBest.director === 'Steven Spielberg' && theBest.genre.includes('Drama'))
  return spielberg.length
*/

  const spielbergMovies = movies.filter(function(x){
  
      return (x.director == "Steven Spielberg" && x.genre.includes("Drama"));
  
    })
    
    return spielbergMovies.length;
  
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length == 0){
    return 0;
  }
 
  const avgScores = movies.reduce(function(acumulator, current){

    if (current.score){
      
      return acumulator += (current.score);

    }else{

      return acumulator;
    }

  },0);
  
  return parseFloat((avgScores/movies.length).toFixed(2));
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {


const dramaMovies = movies.filter(function(x){

    return x.genre.includes("Drama");
    
})

if (dramaMovies.length == 0){

  return 0;
  
}
const averageDramaMovies = dramaMovies.reduce(function(acumulator, current){

  return acumulator += current.score

},0)

return parseFloat((averageDramaMovies/dramaMovies.length).toFixed(2));


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const copyMovies = [...movies];
  const sortedByYear = copyMovies.sort((a, b) => {

    if (a.year > b.year){

      return 1;
    }
    if (a.year < b.year){

      return -1;
    } 
   
    if (a.title > b.title){

      return 1;

    } 
    if (a.title < b.title){

      return -1;
    } 
    else{

      return 0;

    }
  });

  return sortedByYear;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
//return array de titulos

function orderAlphabetically() {

  

  
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
