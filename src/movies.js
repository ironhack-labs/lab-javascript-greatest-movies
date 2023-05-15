// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const newArray= movies.map(function getAllDirectors(moviesArray) {
return moviesArray.director;     
});

console.log(newArray);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const newArray2=movies.filter(function howManyMovies(moviesArray) {
   const arrDrama = moviesArray.genre.includes("Drama") && moviesArray.director==="Steven Spielberg";
       return arrDrama;
 });
 
 console.log(newArray2);     

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

const sumScores= movies.reduce(function scoresAverage(accumulator, currentValue) {
    return accumulator+currentValue.score;
 },0);
   
 const avg=(sumScores/movies.length) || 0;
 let avg2=Number(avg.toFixed(2));
    
 console.log(avg2);

// Iteration 4: Drama movies - Get the average of Drama Movies
const newArray4=movies.filter(function dramaMoviesScore(moviesArray) {
const arrDramaMovies=moviesArray.genre.includes("Drama");
return arrDramaMovies;
});
let scores=arrDramaMovies.score;
console.log(scores);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
