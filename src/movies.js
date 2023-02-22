
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
const directors = moviesArray.map(movie => movie.director);
return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0){
    return 0;
  }
const dramaSteve = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
return dramaSteve.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0){
    return 0;}

  let  averageScore = moviesArray.reduce((acc, movie) =>{
    if ( movie.score === undefined){
      return acc + 0;
    }else {
      return acc + movie.score;};
  }, 0);
  let total =  averageScore / moviesArray.length;
  return Math.round(total * 100) / 100;
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie => movie.genre.includes("Drama")));
  return scoresAverage(dramaMovies);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortedArray = [...moviesArray].sort((a,b) =>{
    if (a.year !== b.year){
      return a.year - b.year;
    } else if (a.year === b.year ){
      return a.title.localeCompare(b.title)
    }});
    return sortedArray;
  }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let copiedMovies = [...moviesArray];
  copiedMovies.sort((a,b) => a.title.localeCompare(b.title));
  let movieTitles = copiedMovies.slice(0,20).map(movie => movie.title);
  return movieTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
