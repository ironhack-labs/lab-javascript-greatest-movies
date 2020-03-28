/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    const newArray = [...arr];
    newArray.sort(function (a, b) {
        if ( a.year === b.year) {
            newArray.sort(function (a, b){
               if(a.title < b.title){
                return -1;
               } if(a.title > b.title){
                return 1;
               }   
            });
        } return (a.year - b.year);
     });
     return newArray;
   }
   
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {

    let genreFilter = array.filter(movie => {return movie.genre.includes("Drama");}).filter(movie => {return movie.director === "Steven Spielberg"});
    return genreFilter.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
     let titleArray = array.map(movie => {
         return movie.title
     });
     let movTitle=titleArray.sort();
     return movTitle.slice(0,20);
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
const avgRating = array.reduce(function (acc, val) {
    if (val.rate){
        return acc + val.rate / array.length;
 } else{
     return acc;
 }
}, 0);
  return Math.round(avgRating * 10 ** 2) / 10 ** 2;;
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
    let genreFilter = array.filter(movie => {return movie.genre.includes("Drama");})
return ratesAverage(genreFilter);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array){
    const newDuration = array.map(movie => {
        return movie.duration.split("");
    });
return newDuration;
}
console.log(turnHoursToMinutes(movies));
// BONUS Iteration: Best yearly rate average - Best yearly rate average
