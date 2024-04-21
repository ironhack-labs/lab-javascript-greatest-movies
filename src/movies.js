// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

let result = moviesArray.map((el) => el.director);
return result
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let result = 0
    result =moviesArray.filter(movie => {return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');})
    return result.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) return 0;
let result = 0;
let movieFiltered = moviesArray.filter(el => el.score);
let movieSum = movieFiltered.reduce((acc, el) => el.score + acc, 0);
result = movieSum / moviesArray.length;
return Math.round(result*100) / 100;

}
/*function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    const filteredMovies = moviesArray.filter((movie) => movie.score);
    const sum = filteredMovies.reduce((sum, movie) => sum + movie.score, 0);
    let avg = sum/moviesArray.length;
    return Math.round(avg*100)/100;
}*/

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
let dramaMovies = moviesArray.filter((movie)=>movie.genre.includes('Drama'));

    let result = scoresAverage(dramaMovies);
    return result;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copiaArray1 = [...moviesArray];
let movieYearOrdered = copiaArray1.sort((a, b) => a.year - b.year);

let movieSameYearOrdAlph = arrayTexto.reduce ((acc, movie) => {
    return acc + movie;
  }, "" && a.year === b.year);// oppure// 
  if (a.year === b.year) return movieSameYearOrdAlph;
return movieSameYearOrdAlph;

//ULTIMO PUNTO NON LO SO RISOLVERE





}
//let arrayMap = let array3 = [1, 2, 3, 4];

// array3.forEach((el) => {
//   el = el * 2;
//   console.log(el);
// });

// array3.forEach((el, index) => {
//   console.log(
//     "Soy el elemento con índice: " + index + " y tengo el valor de: " + el
//   );
// });


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const copiaArray2 = [...moviesArray];
    let movieYearOrdered = copiaArray2.sort((a, b) => a.title - b.title);

    let movieTitleOrder = arrayTexto.reduce ((acc, movie) => {
        return acc + movie;
      }, "");
      return movieTitleOrder;
      movies.slice(0,20).forEach(movie => console.log(movie))
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
