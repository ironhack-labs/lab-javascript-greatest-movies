// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
    return array.map(element => element.director)
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
 function howManyMovies(array){
    let director = array.filter(element => element.director === "Steven Spielberg" && element.genre.includes("Drama"))
      return director.length;
      }  
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
if(array.length === 0) {
        return 0
    };
const sumPrices = array.reduce((acc, element) => {
     if (element.rate) {
          return acc + element.rate;
     } else {
         return acc;
     } },0);
return Number((sumPrices / array.length).toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    let dramaMovies = array.filter(element => element.genre.includes('Drama'));
    if(dramaMovies.length === 0) {return 0};
    let rateDrama = dramaMovies.map(element => element.rate);
    let averageDrama = rateDrama.reduce((a,b) => a + b );
    return Number((averageDrama / dramaMovies.length).toFixed(2));
  };
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
let orderYear = array.sort((a,b) => {
if (a.title === b.title){
return a.year - b.year ;
} else {
return -1;
}
});
return orderYear.map(element => element);
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
let movieTitles = array.map(element => element.title);
movieTitles.sort();
if (movieTitles.length > 20) {
return movieTitles.slice(0,20);
   } else {
       return movieTitles;
   }
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
