// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(element => element.director)
  return directors;
};

console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
        
  const dramaSpielberg = moviesArray.filter((element) =>  element.director === "Steven Spielberg" &&
  element.genre.includes("Drama"));

  
    return dramaSpielberg.length;
                                        
};

console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
if (moviesArray.length === undefined){
  return 0;
} else {
  let score = moviesArray.reduce( function(acumulator, currentValue){
    return acumulator + currentValue.score;
  },0);
  
 return score/moviesArray.length.toFixed(2);
 
}};

// Iteration 4: Drama movies - Get the average of Drama Movies

  
  function dramaMoviesScore(moviesArray) {
  
    const drama = moviesArray.filter(element => element.genre.includes("Drama"));
    
    let scoreDrama = drama.reduce( function(acumulator, currentValue){
      return acumulator + currentValue.score;
    },0);
    
  
    return scoreDrama/drama.length.toFixed(2);
    
  }; 
  
  console.log(dramaMoviesScore(movies));
 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const moviesCopy = [...movies];

function orderByYear(moviesArray) {
  moviesCopy.sort(function(a,b){
    return a-b;
  });
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const moviesCopyAlpha = [...movies]
function orderAlphabetically(moviesArray) {
  moviesCopy.sort();
  return moviesCopy.slice(0,19);
}; 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
