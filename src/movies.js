console.log("------Iteration 1------");
// Iteration 1: All directors? - Get the array of all directors.

/* We need to get the array of all directors. Since this is a warm up, 
we will give you a hint: you have to map through the array of movies and 
get all the directors into one array as a final result. Go ahead and create 
a function named getAllDirectors() that receives an array of movies as an 
argument and returns a new (mapped array). */

function getAllDirectors(arr) {
  let directors = arr.map(n => n.director)
  return directors;
};

console.log("<------Iteration 1 - Bonus------>");
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

console.log("<------Iteration 2------>");
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {     
  if (arr.length === 0) {
    return 0;
  }                   
  let directedBySP = arr.filter(movies => (movies.director === 'Steven Spielberg') 
  && (((movies.genre).indexOf('Drama')) !== -1));
  return directedBySP.length;
};


console.log("<------Iteration 3------>");
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0;
  };
  const rates = arr.map(obj => {
    if (!isNaN(obj.rate) || (obj.rate) !== undefined || typeof(obj.rate) !== "string") {
      return obj.rate
    }
  });
  console.log(rates);
  const average = ((rates.reduce((a, c) =>  a + c)) / (rates.length));
  const averageWithTwoFloatingPoints = Number(average.toFixed(2));
  return averageWithTwoFloatingPoints;
};

console.log("<------Iteration 4------>");
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
const dramaMovies = arr.filter(obj => (obj.genre).indexOf('Drama') !== -1);
return ratesAverage(dramaMovies);
};

console.log("<------Iteration 5------>");
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
const newArr = [...arr];

};

console.log("<------Iteration 6------>");
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

console.log("<------Iteration 7------>");
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

console.log("<------Iteration 8------>");
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
